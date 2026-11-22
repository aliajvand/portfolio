---
title: Tourism Demand Forecasting (Hackathon Pol 4)
slugOverride: pol4-hackathon
categories: [Machine Learning, Time Series, Forecasting]
repo: pol4_hackathon
tech: [LightGBM Ensemble, Actuarial Chain-Ladder, Persian Calendar, FastAPI, Plotly Dash]
summary: 2nd place out of 13 shortlisted teams at Hackathon Pol 4 (Jobama x AI Innovation Factory), generating 9,630 daily forecasts across 321 Iranian destination cities with 0.143 median WAPE across 119 walk-forward cutoffs.
thumbnail: /images/projects/pol4_hackathon_banner.png
featured: true
order: 4
stats:
  - label: Competition Placement
    value: 2nd of 13
  - label: Destination Cities
    value: 321 Cities
  - label: Walk-Forward Backtest WAPE
    value: 0.143
  - label: Engineered Features
    value: 96 Features
---

## Overview
Built during an intense 72-hour competition by Jobama and AI Innovation Factory, our two-person team placed 2nd of 13 shortlisted teams by forecasting accommodation search demand across 321 Iranian cities for Azar 1404 (9,630 total predictions).

## Mathematical Modeling & Innovations
- Actuarial Chain-Ladder Curves: Modeled booking accrual completion across a 59-day lead-time lookahead window.
- LightGBM Seed Ensemble: Combined 96 engineered features with Persian Solar Calendar holiday uplifts and hard lower-bound constraints ($\hat{Y} \ge Y_{\text{logged}}$).
- Robust Backtesting: Validated across 119 expanding-window cutoffs (median WAPE 0.143) and achieved 83.0% accuracy on Azar 1403 holdout replay.

