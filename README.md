# CreditRisk

## Dataset Columns
**There are a total of 12 columns:**
- `person_age` 
- `person_income`
- `person_emp_length`
- `loan_grade`
- `loan_amnt`
- `loan_int_rate`
- `loan_percent_income`
- `cb_person_default_on_file`
- `cb_person_cred_hist_length`
- `person_home_ownership`
- `loan_intent`
- `loan_status`

## The application is deployed 

https://vercel.com/praveen-kumars-projects-a755998b/credit-risk-prediction

## Running the Project

### Frontend Setup
To set up and run the frontend, use the following commands:
```sh
cd frontend
npm install
npm run dev
```

### Backend Setup
To set up and run the backend, use the following commands:
```sh
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# For Windows:
venv\Scripts\activate
# For macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```