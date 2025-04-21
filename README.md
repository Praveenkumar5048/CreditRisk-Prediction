# Credit Risk Prediction using Ensemble Machine Learning

## 📊 Project Overview

This project implements a robust machine learning framework for credit risk assessment using ensemble models. The system not only predicts whether a borrower is likely to default but also introduces a novel Loan Amount Optimizer that suggests an optimal loan amount for borderline applications, striking a balance between risk mitigation and financial inclusivity.

### Key Features

- **High-Accuracy Classification**: Using ensemble models (Random Forest, CatBoost, XGBoost) to predict loan defaults with over 93% accuracy
- **Loan Amount Optimizer**: A secondary regression model that suggests optimal loan amounts for borderline applicants
- **Comprehensive Data Preprocessing**: Advanced handling of missing values, outliers, and categorical variables
- **Feature Importance Analysis**: Identification of the most influential factors in credit risk assessment
- **Web Interface**: User-friendly application for inputting loan application data and receiving predictions

## 🛠️ Technologies Used

- Python 3.7+
- Scikit-learn
- XGBoost
- CatBoost
- Pandas
- NumPy
- Matplotlib/Seaborn
- Flask (Web Interface)

## 📈 Results

### Classification Models Performance

| Model | Accuracy | Precision | Recall | F1 Score |
|-------|----------|-----------|--------|----------|
| Random Forest | 94.01% | 97.90% | 74.20% | 84.40% |
| CatBoost | 93.96% | 96.80% | 74.90% | 84.40% |
| XGBoost | 93.71% | 95.10% | 75.10% | 83.90% |
| Decision Tree | 89.70% | 75.30% | 79.30% | 77.30% |
| AdaBoost | 88.40% | 78.80% | 64.50% | 70.90% |
| Logistic Regression | 84.00% | 70.80% | 45.90% | 55.70% |

### Loan Amount Optimizer Performance

| Model | R² Score | RMSE | MAE |
|-------|----------|------|-----|
| Random Forest | 0.978 | 912.08 | 227.07 |
| XGBoost | 0.975 | 983.35 | 360.52 |
| Gradient Boosting | 0.793 | 1660.20 | 740.69 |
| Logistic Regression | 0.775 | 2967.28 | 1826.55 |

## 🔍 Dataset

- The project uses the [Credit Risk Dataset](https://www.kaggle.com/datasets/laotse/credit-risk-dataset) from Kaggle, which contains 32,581 records with 12 columns. You can also find it in the Datasets folder.
- We created our own Adjusted amount dataset that is used to train our regression model to find the adjusted loan amount if the person is predicted as risky for the laon amount requested by him. This dataset can also be found in the Datasets folder

## 🚀 Installation and Setup

```bash
# Clone the repository
git https://github.com/Praveenkumar5048/CreditRisk-Prediction.git
cd credit-risk-prediction

# Run the frontend
cd frontend
npm install
npm run dev

# Run the backend
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

```
