import os
import numpy as np
import pandas as pd
import pickle
import traceback
from flask import Flask, request, render_template, jsonify, send_file
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Function to load a pickle file
def load_pickle_model(model_filename):
    try:
        with open(model_filename, "rb") as f:
            model = pickle.load(f)
        print(f"✅ Successfully Loaded model from '{model_filename}'")
        return model
    except FileNotFoundError:
        print(f"❌ File not found: '{model_filename}'")
    except pickle.UnpicklingError as e:
        print(f"❌ Unpickling error in '{model_filename}': {e}")
    except Exception as e:
        print(f"❌ Unexpected error loading model '{model_filename}':\n{traceback.format_exc()}")
    return None
def preprocess_input(input_data):

    input_df = pd.DataFrame([input_data])

    # Drop original categorical columns (since we use one-hot encoding)
    input_df.drop(columns=["person_home_ownership", "loan_intent"], inplace=True, errors="ignore")
    
    # One-hot encoded column names
    ohe_cols = [
        "person_home_ownership_MORTGAGE", "person_home_ownership_OTHER",
        "person_home_ownership_OWN", "person_home_ownership_RENT",
        "loan_intent_DEBTCONSOLIDATION", "loan_intent_EDUCATION",
        "loan_intent_HOMEIMPROVEMENT", "loan_intent_MEDICAL",
        "loan_intent_PERSONAL", "loan_intent_VENTURE"
    ]
    
    for col in ohe_cols:
        input_df[col] = 0

    # Set the correct one-hot encoded column to 1 based on input data
    if f"person_home_ownership_{input_data['person_home_ownership']}" in ohe_cols:
        input_df[f"person_home_ownership_{input_data['person_home_ownership']}"] = 1

    if f"loan_intent_{input_data['loan_intent']}" in ohe_cols:
        input_df[f"loan_intent_{input_data['loan_intent']}"] = 1

    return input_df

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze_data():
    # Load the main loan status model
    model = load_pickle_model("xgb_creditRisk.pkl")
    if model is None:
        return jsonify({"error": "Failed to load model"}), 500

    try:
        input_data = request.json

        # Change loan amount and person income to dollors
        input_data["loan_amnt"] = input_data["loan_amnt"] / 85
        input_data["person_income"] = input_data["person_income"] / 85

        # Calculate loan_percent_income if not provided
        if input_data.get("loan_percent_income") is None:
            input_data["loan_percent_income"] = input_data["loan_amnt"] / input_data["person_income"]

        # Preprocess input data (including one-hot encoding, etc.)
        processed_data = preprocess_input(input_data)

        prediction = model.predict(processed_data)
        probability = model.predict_proba(processed_data)

        result = {
            "prediction": "Rejected" if prediction[0] == 1 else "Approved",
            "probability": float(probability[0][1]),  # Probability of default (class 1)
            "optimized_loan_amnt": None
        }

        # If rejected, predict optimized loan amount
        if prediction[0] == 1:
            
            opt_model = load_pickle_model("xgb_loanAmountOptimiser.pkl")
            
            # Predict optimized loan amount
            optimized_amt = opt_model.predict(processed_data)[0]
            optimized_amt = optimized_amt * 85  # Convert back to original scale
            
            # Add to response
            result["optimized_loan_amnt"] = max(int(round(optimized_amt)), 200)

        return jsonify(result)

    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)