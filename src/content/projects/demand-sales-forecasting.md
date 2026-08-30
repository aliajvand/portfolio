---
title: Demand & Sales Forecasting
slugOverride:
categories: [Machine Learning, Data Analysis]
repo: demand_sales_forecasting
tech: [Python, Pandas, Scikit-learn, Gradient Boosting, Walk-Forward Validation, Power BI]
summary: A 42-day retail demand forecasting pipeline across 1,115 stores that cut error from a 34.06% same-weekday heuristic to 9.36% WMAPE, validated on non-overlapping walk-forward folds.
thumbnail: null
featured: true
order: 1
powerBiEmbedUrl:
screenshots: []
biSection: null
stats:
  - label: WMAPE (vs 34.06% baseline)
    value: 9.36%
  - label: Store-days forecasted
    value: 844,338
  - label: Stores in estate
    value: 1,115
  - label: Stores under 15% error
    value: 98.3%
figures:
  Overview: figure:line
  Dataset: figure:flow
  Data Cleaning: figure:bars
  EDA: figure:line
  Model: figure:flow
  Results: figure:kv
  Business Insights: figure:donut
---

## Overview

A retail planning team needed a 42-day-ahead demand forecast for every store in a 1,115-store estate, without access to yesterday's sales at forecast time. I built a hierarchical forecasting pipeline in Python that beat the incumbent same-weekday heuristic by 24.7 points, taking error from 34.06% down to 9.36% WMAPE.

## Problem Statement

The existing process leaned on a same-weekday-last-cycle heuristic: whatever a store sold on the equivalent weekday before, repeat it. It ignored trend, promotions, holidays, and store-level seasonality, and it could not be trusted to drive automated replenishment or safety-stock decisions.

## Business Goal

Produce a 42-day-horizon forecast accurate and stable enough that the automation threshold (under 15% error) could be applied store-by-store, freeing planners to focus on the exceptions instead of re-deriving every number by hand.

## Dataset

844,338 open store-days across 1,115 stores, covering daily sales, store metadata, promotions, and calendar effects (holidays, school breaks). The evaluation horizon was deliberately long — 42 days — to match the real lead time planners actually work with.

## Data Cleaning

Store-closure days were excluded from training and evaluation so they didn't distort the error metric. Promotion and holiday flags were reconciled against the calendar, and stores with insufficient history were held out of model-fitting but still forecast using the group-level model.

## EDA

Demand showed strong day-of-week and holiday seasonality layered on top of slower store-level trend, and the variance between stores was large enough that a single chain-wide model would have systematically under- or over-forecast entire clusters of stores. That shaped the decision to model at the store level rather than pool everything into one series.

## Feature Engineering

Calendar features (day-of-week, holiday proximity, school-break flags), promotion indicators, and lagged/rolling sales features were engineered with strict respect for the forecast horizon — no feature was allowed to peek past the point where "yesterday's sales" would actually be available in production.

## Model

A gradient boosting forecaster, tuned and validated using walk-forward cross-validation on three non-overlapping 42-day folds, with training data always ending strictly before each fold begins. This mirrors how the model will actually be used in production, rather than the optimistic numbers a random train/test split would produce.

## Evaluation

WMAPE was the primary metric, chosen because it weights forecast error by sales volume rather than treating a 100-unit store the same as a 2-unit store. Bias was tracked separately to catch systematic over- or under-forecasting that WMAPE alone can hide.

## Results

The model cut WMAPE from a 34.06% same-weekday baseline to 9.36% at the 42-day horizon, held bias to -1.9% against a ±5% target, and brought 98.3% of the estate inside the 15% error threshold used to gate automated decisions. Per-store error came in at a median of 8.7% (p90 11.9%), published so planners could apply differentiated safety-stock policies instead of one chain-wide rule.

## Business Insights

Forecast accuracy is not uniform across a chain — publishing per-store error let planners target manual review at the tail of stores that needed it, instead of auditing all 1,115 stores or trusting the average blindly. The gap between the heuristic and the model also quantified, in concrete WMAPE points, exactly what the old process was costing in over- and under-stocking.

## Future Work

Extending the pipeline to shorter, more reactive horizons for fast-moving categories, and feeding forecast uncertainty (not just the point estimate) into the replenishment system so safety stock can be sized probabilistically rather than with a flat buffer.
