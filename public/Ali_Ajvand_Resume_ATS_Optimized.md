# Ali Ajvand
**Senior Data Scientist & Analytics Engineer**
Tehran, Iran | +98 919 525 3462 | aliajvand@gmail.com | [github.com/aliajvand](https://github.com/aliajvand) | [linkedin.com/in/aliajvand](https://linkedin.com/in/aliajvand) | [aliajvand.github.io/portfolio](https://aliajvand.github.io/portfolio)

---

## PROFESSIONAL SUMMARY
Results-driven **Data Scientist & Analytics Engineer** with a proven track record of architecting and deploying end-to-end production data products—from raw ingestion and dimensional star schemas to leakage-audited machine learning pipelines, sub-second FastAPI microservices, and interactive operations portals. Demonstrated impact across retail demand forecasting (**72.5% error reduction**), credit risk underwriting (**38% default reduction** under cost-sensitive policy frontiers), customer retention (**2.52x decile lift factor** capturing 50.5% of churners), and quantitative equity forecasting (**69.85% directional accuracy** with Graph Neural Networks). Placed **2nd of 13 teams** at Hackathon Pol 4 for large-scale time-series demand forecasting. Dedicated to zero-leakage validation, expanding-window walk-forward benchmarking, and clean reproducible software engineering.

---

## TECHNICAL SKILLS

- **Machine Learning & Deep Learning:** LightGBM, XGBoost, CatBoost, Scikit-Learn, PyTorch, Graph Neural Networks (GNN/GCN), Recurrent Neural Networks (LSTM), Transfer Learning (ResNet-50), Monotonic Constraints, Isotonic Probability Calibration, SHAP Interpretability, Cost-Sensitive Frontier Optimization.
- **Time-Series & Forecasting:** Hierarchical Forecasting, Expanding-Window Walk-Forward Cross Validation, Actuarial Chain-Ladder Accrual Curves, Seasonality & Trend Decomposition, Safety Stock & Reorder Point (ROP) Modeling, Rolling Volatility (ATR).
- **Data Engineering & SQL:** SQL, PostgreSQL, SQLite, DuckDB, MySQL, SQL Server, T-SQL, Apache Parquet, Dimensional Star Schema Design (Kimball), ETL/ELT Pipeline Automation, CTEs, Window Functions, As-Of Merges, Data Quality Auditing.
- **LLMs & NLP Systems:** Retrieval-Augmented Generation (RAG), FAISS Dense Vector Indexing, Sentence-Transformers, Hugging Face, LangChain, Groq API (Llama 3.1), Clinical NLP, Document Ingestion & OCR.
- **Software Engineering & Serving:** FastAPI, Flask, RESTful API Design, Pydantic, Plotly/Dash, Docker, Git/GitHub Actions CI/CD, PyTest (Test-Driven Development), Ruff, Linux/Bash Shell.
- **Business Intelligence & Analytics:** Plotly, Dash, Power BI (Advanced DAX, Drill-Through, Star Schema Modeling), Seaborn, Matplotlib, Folium Geospatial Route Mapping.

---

## PROFESSIONAL EXPERIENCE

### Data Analyst / Analytics Engineer (Project-Based)
**BehinBazar (Client: Japan Tobacco International — JTI)** | Tehran, Iran | *Apr 2025 – Nov 2025*
- **Accomplished 100% automated daily operational reporting** across nationwide retail field-survey operations by engineering an end-to-end data pipeline from scratch utilizing Python, Excel, and Google Sheets APIs, completely eliminating recurring manual data preparation overhead.
- **Optimized daily surveyor store assignments and route efficiency** by building custom geospatial clustering and mapping tooling in Python (Folium), converting ad-hoc visit dispatching into a structured, repeatable routing system.
- **Improved survey team store coverage tracking and audit compliance** by modeling surveyor progress KPIs and field data feeds into structured analytical tables for operational leadership.

---

## FEATURED PRODUCTION DATA PRODUCTS

### 1. Demand & Sales Forecasting Platform (FMCG Retail)
*Technologies: Python, LightGBM, Walk-Forward Validation, FastAPI, Plotly/Dash, SQLite Star Schema* | [GitHub: demand_sales_forecasting](https://github.com/aliajvand/demand_sales_forecasting)
- **Reduced forecast error by 72.5%** (WMAPE decreased from 34.06% planner heuristic to **9.36%**) across **844,338 open store-days and 1,115 retail stores** by engineering hierarchical LightGBM models over three non-overlapping 42-day walk-forward validation folds.
- **Enabled automated replenishment for 98.3% of chain stores** by calculating store-specific safety stocks and dynamic Reorder Points (ROP), eliminating manual inventory review for stores maintaining $<15\%$ WMAPE.
- **Served predictions in sub-50ms latency** via a dedicated FastAPI microservice (`/forecast`, `/replenishment`) paired with a Plotly/Dash operations portal.

### 2. Credit Risk Decision Engine (Underwriting & Policy Frontier)
*Technologies: LightGBM, Monotonic Constraints, Cost-Sensitive Optimization, FastAPI, Dash* | [GitHub: credit_risk_decision_engine](https://github.com/aliajvand/credit_risk_decision_engine)
- **Decreased default bad rate by 38%** (from 15.9% to 9.8%) while maintaining a **54.4% approval rate** on 30,000 credit bureau accounts by formulating a 5:1 false-approval to false-decline cost-sensitive threshold policy frontier instead of naive $p < 0.50$ classification.
- **Achieved 0.892 ROC-AUC** and 3.17x lift in the riskiest decile by enforcing domain-driven monotonic constraints on debt-to-income (DTI) and delinquency features while strictly excluding protected demographic attributes.
- **Deployed an interactive underwriting simulator** with real-time policy loss-ratio sliders and automated PyTest validation suites.

### 3. Customer Churn Intelligence & Lifetime Value Preservation
*Technologies: Python, Calibrated L1 Logistic, Isotonic Regression, DuckDB/SQL, FastAPI, Dash* | [GitHub: customer_churn_intelligence](https://github.com/aliajvand/customer_churn_intelligence)
- **Captured 50.53% of all customer churners at 67.02% precision** under a constrained 20% call-center outreach capacity budget, securing a **2.52x capacity lift factor** over random retention outreach on 7,043 customer accounts.
- **Protected over \$176,000 in annualized contract revenue at risk** by prioritizing outreach via expected Value-at-Risk ($\text{VaR} = \hat{p} \times \text{Charges} \times 12$) based on isotonically calibrated probabilities (ROC-AUC **0.8448**).
- **Engineered an analytical star schema and windowed SQL cohorts** analyzing contract elasticity and customer survival degradation.

### 4. Tehran Stock Exchange Quantitative Forecasting Engine (TSETMC)
*Technologies: PyTorch, Graph Convolutional Networks (GCN), LSTM, SQLite, FastAPI, Plotly/Dash* | [GitHub: tehran_stock_forecasting](https://github.com/aliajvand/tehran_stock_forecasting)
- **Achieved 69.85% directional accuracy and 0.7024 ROC-AUC** on out-of-sample holdout regimes by architecting a Hybrid LSTM + Graph Convolutional Network that models spatial sector correlations across 428 listed equities.
- **Indexed 10,874 daily price snapshots and 10,876 institutional order flow facts**, engineering 80 quantitative features tracking smart-money accumulation ratios (Hoghughi net inflow) and 20-day Average True Range (ATR).
- **Eliminated temporal lookahead bias** by enforcing a 5-fold expanding-window walk-forward cross validation protocol under TSETMC ±5% daily price boundaries.

### 5. Tourism & Accommodation Search Demand Forecasting (Hackathon Pol 4)
*Technologies: LightGBM Ensemble, Actuarial Chain-Ladder Curves, Solar Calendar, FastAPI* | [GitHub: pol4_hackathon](https://github.com/aliajvand/pol4_hackathon)
- **Awarded 2nd Place out of 13 shortlisted teams** in a 72-hour competition hosted by Jobama and AI Innovation Factory, generating 9,630 daily forecasts across 321 Iranian destination cities for Azar 1404.
- **Secured 0.143 median WAPE across 119 walk-forward backtests** (and 83.0% accuracy on Azar 1403 historical holdout replay) by coupling actuarial booking accrual completion curves with a 96-feature LightGBM seed ensemble.

### 6. Brazilian E-Commerce Logistics Delay & Lead Time Analytics (Olist)
*Technologies: Scikit-Learn, As-Of Temporal Joins, Star Schema SQL, FastAPI, Plotly/Dash* | [GitHub: olist-delivery-analytics](https://github.com/aliajvand/olist-delivery-analytics)
- **Delivered 2.07x delay mitigation lift** over random carrier dispatching by training checkout-time delivery delay classifiers and lead-time regressors across 100,000+ orders, strictly eliminating post-purchase scan leakage.
- **Optimized carrier expedite queue spend** via a 5.4:1 cost ratio matrix (65 BRL delay penalty vs 12 BRL priority shipping).

### 7. Clinical Decision-Support RAG Platform
*Technologies: PyTorch, Sentence-Transformers, FAISS, FastAPI, Docker, OCR* | [GitHub: medical](https://github.com/aliajvand/medical)
- **Delivered sub-15ms semantic search latency with 100% data provenance** across accredited clinical databases (MIMIC-III, DrugBank, SIDER) using frozen biomedical sentence embeddings and FAISS vector indexing.

### 8. Electric Vehicle & Automotive Market Intelligence
*Technologies: Python, Power BI Star Schema, DAX, Linear & Gradient Boosting Regression* | [GitHub: ev_automotive_analytics](https://github.com/aliajvand/ev_automotive_analytics)
- **Achieved used vehicle pricing accuracy of $R^2 = 0.8326$ and MAPE 19.34%** on 15,409 listings, outperforming dealer heuristics (41.79% error); audited drivetrain proxy leakage to prevent production model failure.

---

## EDUCATION & CERTIFICATIONS

- **B.Sc. in Computer Engineering** | Islamic Azad University, Science & Research Branch, Tehran (GPA: 16.0 / 20.0) | *Graduated 2026*
- **National M.Sc. Entrance Examination in Computer Engineering** | Completed 2026
- **Data Scientist Professional Bootcamp (100+ Hours)** | Daneshkar (2025)
- **LangChain for LLM Application Development** | freeCodeCamp (2026)
- **Business Intelligence & Data Warehouse Architecture** | Udemy (2023)
- **Data Analyst Professional Bootcamp** | Alex The Analyst (2023)

---

## LANGUAGES
- **Persian:** Native
- **English:** Professional Working Proficiency (Technical reading, engineering documentation & writing)
