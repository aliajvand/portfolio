---
title: Tehran Stock Market Forecasting
slugOverride: tehran-stock-forecasting
categories: [Machine Learning, Time Series, Deep Learning]
repo: tehran_stock_forecasting
tech: [PyTorch, Graph Neural Networks (GCN), LSTM, FastAPI, Plotly Dash, SQLite, Walk-Forward CV]
summary: A quantitative market microstructure forecasting platform for Tehran Stock Exchange (TSETMC) indexing 10,874 trading days and institutional order flow (Haghighi/Hoghughi), achieving 69.85% directional accuracy on walk-forward holdouts.
thumbnail: /images/projects/tehran_stock_forecasting_banner.png
featured: true
order: 2
stats:
  - label: Peak Directional Accuracy
    value: 69.85%
  - label: Walk-Forward CV Splits
    value: 5 Folds
  - label: Historical Records Indexed
    value: 10,874
  - label: TSETMC Instruments
    value: 428
---

## Overview
Forecasting emerging markets like the Tehran Stock Exchange (TSETMC) requires navigating strict regulatory price boundaries (±5% daily price caps) and synthetic liquidity lockups. I built an end-to-end quantitative platform coupling an expanding-window walk-forward cross validation protocol with a Hybrid LSTM + Graph Convolutional Network (GNN).

## Market Microstructure & Formulation
Traditional models overfit because they assume I.I.D. distributions and ignore cross-asset dependencies. By modeling inter-stock correlation graphs across major industrial sectors (Metals, Petrochemicals, Automotive) and tracking daily institutional ('Hoghughi') smart-money accumulation ratios, the engine captures macro sentiment shifts.

## Results & Production Serving
- Peak Directional Accuracy reached 69.85% and ROC-AUC reached 0.7024 on Fold 5 out-of-sample holdout.
- Served in sub-second latency via a FastAPI microservice (`/forecast`, `/symbols`, `/governance`) and rendered on an interactive Plotly/Dash candlestick analytics portal on port 8063.

