---
title: Customer Churn Intelligence
slugOverride: customer-churn-intelligence
categories: [Machine Learning, Data Analysis, Business Intelligence]
repo: customer_churn_intelligence
tech: [Python, Scikit-learn, Isotonic Calibration, FastAPI, Plotly Dash, DuckDB Star Schema]
summary: Enterprise customer retention engine with isotonic probability calibration, decile lift optimization, and Value-at-Risk outreach queues that captured 50.53% of churners with 2.52x lift factor at 20% capacity constraint.
thumbnail: /images/projects/customer_churn_intelligence_banner.png
featured: true
order: 3
stats:
  - label: Top 20% Capacity Lift
    value: 2.52x
  - label: Model ROC-AUC
    value: 0.8448
  - label: Churners Captured @ 20%
    value: 50.53%
  - label: Value-at-Risk Protected
    value: $176.7K
---

## Overview
In recurring revenue businesses, uncalibrated binary classifiers misallocate retention budgets. I designed a disciplined customer retention platform bridging statistical calibration and constrained operational decision-making across 7,043 customer accounts.

## Business Formulation
Rather than applying naive cutoffs ($p \ge 0.5$), the system calibrates probabilities using isotonic regression and ranks accounts by annualized contract Value-at-Risk ($\text{VaR} = \hat{p} \times \text{Charges} \times 12$). At a fixed 20% call center capacity, the policy achieves a 2.52x lift factor over random contact, capturing 50.53% of all churners with 67.02% precision.

## Architecture & Production
- Audited 10-model benchmark with zero temporal leakage.
- Production FastAPI microservice (`/score`, `/queue/top-risk`, `/governance`) and responsive Plotly/Dash portal on port 8062 with live retention ROI sliders.

