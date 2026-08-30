---
title: Credit Risk Decision Engine
slugOverride:
categories: [Machine Learning, Business Intelligence]
repo: credit_risk_decision_engine
tech: [Python, Logistic Regression, Gradient Boosting, Isotonic Calibration, SHAP, Power BI]
summary: A calibrated probability-of-default scorecard and approval policy for 30,000 credit-card clients, tuned to a real cost trade-off and audited to keep protected attributes out of the decision.
thumbnail: null
featured: true
order: 2
powerBiEmbedUrl:
screenshots: []
biSection: null
stats:
  - label: ROC-AUC
    value: 0.780
  - label: KS statistic
    value: 0.427
  - label: Brier score
    value: 0.135
  - label: Approved at 9.8% bad rate
    value: 54.4%
figures:
  Overview: figure:kv
  Dataset: figure:flow
  Data Cleaning: figure:bars
  EDA: figure:line
  Model: figure:flow
  Results: figure:kv
  Business Insights: figure:donut
---

## Overview

A calibrated credit-risk scorecard for 30,000 credit-card clients, built to do more than rank-order applicants — the probabilities themselves needed to be trustworthy enough to plug into a cost-based approval policy, and the feature set needed to be defensible from a fairness standpoint.

## Problem Statement

A raw classification score tells you who is riskier than whom, but not what probability of default that score actually implies, and it says nothing about whether the model is quietly leaning on demographic attributes to get there. Both gaps matter once a score is used to approve or decline real applicants.

## Business Goal

Produce default-probability estimates accurate enough to support a cost-sensitive approval policy — approve as many good applicants as possible at an acceptable bad rate — while excluding protected attributes (sex, education, marital status, age) from the features the model actually uses to decide.

## Dataset

30,000 credit-card clients described by 41 behavioral and demographic features: payment history, bill amounts, credit limit, and repayment behavior over several billing cycles, plus demographic fields retained for monitoring but not modeling.

## Data Cleaning

Payment-history and bill-amount fields were checked for inconsistent encodings and out-of-range values, and demographic attributes (sex, education, marital status, age) were separated out of the training feature matrix entirely — kept only for post-hoc adverse-impact monitoring, never as model inputs.

## EDA

Default behavior clustered heavily around recent payment-status fields rather than static demographics, which supported the decision to build a behavioral, not demographic, scorecard — both on fairness grounds and because the behavioral signal turned out to be the stronger predictor anyway.

## Feature Engineering

The 41 behavioral features were engineered from raw payment and billing history: delinquency streaks, utilization ratios, and trend in payment behavior across cycles, all computed only from information that would be available at decision time.

## Model

Logistic regression and gradient boosting were compared as the base classifier, with the final score passed through isotonic calibration so the output could be read as an actual probability of default rather than an uncalibrated ranking score. SHAP was used to explain individual and global feature contributions for audit purposes.

## Evaluation

The model reached ROC-AUC 0.780, PR-AUC 0.554, KS 0.427, and Brier 0.135 — against a 0.703 ROC-AUC single-rule baseline. A 5:1 false-approval-to-false-decline cost policy was optimized on the calibrated probabilities rather than on the raw score, so the approval threshold reflects the actual asymmetry between the two error types.

## Results

Under the cost-optimized policy, 54.4% of applicants were approved at a 9.8% bad rate, versus 15.9% approved under a naive PD < 0.50 rule. The riskiest decile defaulted at 70.0%, against a 22.1% portfolio-wide rate — a 3.17x lift that shows the score is doing real separating work, not just re-stating the base rate.

## Business Insights

A calibrated score is what makes a cost-sensitive policy possible in the first place — without calibration, "approve everyone below threshold X" has no principled way to set X. Publishing a re-costable threshold table also means the approval line can move if the business's risk appetite changes, without retraining the model.

## Future Work

Extending the calibration and cost-policy framework to a rejected-applicant reject-inference study, and building a monitoring dashboard that tracks calibration drift and adverse-impact metrics on the demographic attributes over time as the portfolio evolves.
