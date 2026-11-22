# Ali Ajvand
**Senior Data Scientist & Machine Learning Engineer**
Tehran, Iran | +98 919 525 3462 | aliajvand@gmail.com | [github.com/aliajvand](https://github.com/aliajvand) | [linkedin.com/in/aliajvand](https://linkedin.com/in/aliajvand) | [aliajvand.github.io/portfolio](https://aliajvand.github.io/portfolio)

---

## PROFESSIONAL SUMMARY
Quantitative Data Scientist and Machine Learning Engineer specializing in risk decision engines, quantitative market microstructure, and high-stakes operational forecasting. Proven track record of taking models from raw transactional SQL into low-latency production microservices: cut loan default bad rate by **38%** under asymmetric cost frontiers, achieved **69.85% directional accuracy** on equity order flows with Graph Neural Networks, and won **2nd place out of 13 teams** at Hackathon Pol 4 via actuarial chain-ladder accrual modeling. Core focus on expanding-window walk-forward validation, zero temporal leakage, and defensible statistical calibration.

---

## TECHNICAL SKILLS

- **Machine Learning & Risk Modeling:** Probability Scorecards, Isotonic Calibration, Monotonic Constraints, Cost-Sensitive Frontier Optimization, LightGBM, XGBoost, CatBoost, Scikit-Learn, PyTorch, Graph Neural Networks (GNN/GCN), LSTM, SHAP Interpretability, Survival Analysis.
- **Quantitative Analytics & Forecasting:** Order Flow & Smart-Money Imbalance, Rolling Volatility (ATR), Actuarial Chain-Ladder Curves, Hierarchical Time-Series, Expanding Walk-Forward Validation, Safety Stock & Dynamic Reorder Points.
- **Data Engineering & SQL:** PostgreSQL, SQLite, DuckDB, MySQL, SQL Server, T-SQL, Apache Parquet, Star Schema Design (Kimball), CTEs, Window Functions, As-Of Merges, Automated ETL Pipelines.
- **Serving & Production:** FastAPI, REST APIs, Pydantic, Plotly/Dash Interactive Portals, Docker, Git/GitHub Actions CI/CD, PyTest (TDD), Linux/Bash.
- **BI & Spatial Intelligence:** Power BI (Advanced DAX, Modeling), Tableau, Folium Geospatial Routing, Seaborn, Matplotlib.

---

## SELECTED PRODUCTION SYSTEMS & DECISION PLATFORMS

### 1. Credit Risk Decision Engine & Underwriting Policy Frontier *(Banking & FinTech)*
*Python, LightGBM, Monotonic Constraints, Isotonic Calibration, FastAPI, Plotly/Dash* | [GitHub: credit_risk_decision_engine](https://github.com/aliajvand/credit_risk_decision_engine)
- **Cut loan default bad rate by 38%** (15.9% down to 9.8%) while keeping a **54.4% approval rate** across 30,000 credit accounts by replacing naive $p < 0.5$ cutoffs with a 5:1 asymmetric cost-sensitive frontier.
- **Achieved 0.892 ROC-AUC and 3.17x top-decile lift** by enforcing domain monotonic constraints on debt-to-income and delinquency features; audited features to strictly exclude protected demographic attributes.
- **Deployed a sub-50ms FastAPI service** (`/score`, `/policy-frontier`) connected to an interactive executive underwriting simulator.

### 2. Quantitative Market Microstructure & Asset Flow Engine *(FinTech & Crypto/Equities)*
*PyTorch, Graph Neural Networks (GCN), LSTM, Walk-Forward CV, SQLite, FastAPI, Dash* | [GitHub: tehran_stock_forecasting](https://github.com/aliajvand/tehran_stock_forecasting)
- **Delivered 69.85% directional accuracy and 0.7024 ROC-AUC** on out-of-sample regimes by building a Hybrid GNN + LSTM modeling inter-asset correlation graphs across 428 instruments.
- **Engineered 80 quantitative indicators over 10,874 daily price and order-flow snapshots**, capturing institutional smart-money accumulation ratios (Hoghughi net flows) and 20-day Average True Range (ATR).
- **Prevented temporal lookahead** through a strict 5-fold expanding-window cross-validation under daily regulatory price caps.

### 3. Actuarial Demand & Loss-Accrual Forecasting Engine *(Insurance & Risk Modeling)*
*LightGBM Ensemble, Actuarial Chain-Ladder Curves, Persian Calendar, FastAPI* | [GitHub: pol4_hackathon](https://github.com/aliajvand/pol4_hackathon)
- **Placed 2nd of 13 shortlisted teams** in a 72-hour competition (Jobama × AI Innovation Factory), forecasting 9,630 daily time-series across 321 destination cities.
- **Attained 0.143 median WAPE across 119 walk-forward backtest cutoffs** (83.0% accuracy on historical holdout replay) by coupling actuarial booking completion curves with a 96-feature LightGBM seed ensemble.

### 4. Automotive Intelligence & Used-Vehicle Valuation Engine *(Automotive & Mobility)*
*Power BI Star Schema, DAX, Python, Linear Regression, Gradient Boosting, SHAP* | [GitHub: ev_automotive_analytics](https://github.com/aliajvand/ev_automotive_analytics)
- **Achieved vehicle valuation accuracy of $R^2 = 0.8326$ and 19.34% MAPE** across 15,409 listings, outperforming baseline dealer heuristics (41.79% error); audited drivetrain proxy leakage to safeguard live deployment.
- **Architected a star schema over 289,555 EV registrations** to optimize municipal charging infrastructure dispatch and battery range adoption.

### 5. Customer Churn Intelligence & Contract Value-at-Risk *(Enterprise B2B)*
*Python, Isotonic Logistic Regression, DuckDB Star Schema, FastAPI, Plotly/Dash* | [GitHub: customer_churn_intelligence](https://github.com/aliajvand/customer_churn_intelligence)
- **Captured 50.53% of churners with 2.52x decile lift** at a 20% outreach budget constraint, protecting over **$176,700 in annual contract Value-at-Risk** ($\text{VaR} = \hat{p} \times \text{Charges} \times 12$) across 7,043 enterprise accounts.

### 6. Multi-Store Retail Demand Forecasting & Automated Replenishment *(Supply Chain)*
*Python, Hierarchical LightGBM, Non-Overlapping Walk-Forward Folds, SQLite, Dash* | [GitHub: demand_sales_forecasting](https://github.com/aliajvand/demand_sales_forecasting)
- **Reduced forecast error by 72.5%** (WMAPE decreased from 34.06% heuristic to **9.36%**) across **844,338 store-days and 1,115 stores**, automating safety stock and dynamic reorder points for 98.3% of stores.

---

## PROFESSIONAL EXPERIENCE

### Data Analyst / Analytics Engineer (Project-Based)
**BehinBazar (Account: Japan Tobacco International — JTI)** | Tehran, Iran | *Apr 2025 – Nov 2025*
- **Automated 100% of daily field-sales operational reporting** across nationwide retail audits by building an automated Python and Google Sheets API pipeline, eliminating daily manual data consolidation.
- **Built geospatial store-coverage and route-planning tools** in Python (Folium), replacing ad-hoc field visits with structured route clusters for regional auditors.
- **Engineered data validation and clean audit tables** ensuring field team KPI tracking matched corporate sales compliance targets.

---

## EDUCATION

- **M.Sc. in Computer Engineering — Artificial Intelligence**
  *Islamic Azad University, Electronic Campus* | Tehran, Iran | *Started Oct 2025 – Present (Enrolled)*
- **B.Sc. in Computer Engineering**
  *Islamic Azad University, Science & Research Branch* | Tehran, Iran | *Graduated 2025 (GPA: 16.0 / 20.0)*

---

## HONORS & PROFESSIONAL CERTIFICATIONS

- **2nd Place Winner (Silver Medal)** — Hackathon Pol 4 Demand Forecasting (Jobama × AI Innovation Factory, 2026)
- **Data Scientist Professional Bootcamp (100+ Hours)** — Daneshkar (2025)
- **LangChain & LLM Systems Development** — freeCodeCamp (2026)
- **Business Intelligence & Data Warehouse Architecture** — Udemy (2023)
- **Data Analyst Professional Certification** — Alex The Analyst (2023)

---

## LANGUAGES
- **Persian:** Native
- **English:** Professional Working Proficiency (Technical documentation, engineering discussions, paper review)
