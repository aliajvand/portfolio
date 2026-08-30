---
title: EV & Automotive Analytics
slugOverride:
categories: [Business Intelligence, Machine Learning, Dashboard]
repo: ev_automotive_analytics
tech: [Power BI, DAX, Python, Linear Regression, Gradient Boosting, SHAP, K-Means]
summary: A Power BI star schema over 289,555 EV registrations plus a used-car pricing model on 15,409 listings, where an explainable linear model beat gradient boosting once a leakage audit was applied.
thumbnail: null
featured: true
order: 4
powerBiEmbedUrl:
screenshots: []
biSection: Dashboard
stats:
  - label: EV registrations analyzed
    value: "289,555"
  - label: Used-car listings priced
    value: "15,409"
  - label: Pricing R²
    value: 0.83
  - label: Pricing MAPE
    value: 19.3%
figures:
  Overview: figure:donut
  Dataset: figure:flow
  Data Cleaning: figure:bars
  EDA: figure:line
  Model: figure:flow
  Results: figure:kv
  Business Insights: figure:donut
---

## Overview

A two-part market-intelligence project: a Power BI star schema over 289,555 EV registrations to inform charging-infrastructure planning, and a used-car pricing model on 15,409 listings where the honest answer turned out to be the simpler model.

## Problem Statement

Charging-infrastructure decisions need a clear read on where EV adoption is actually concentrated, not just a headline adoption number. Separately, used-car pricing needed a model that could be trusted and explained to a buyer or analyst — not a black box that happened to score well.

## Business Goal

Give infrastructure planners a geographic and segment breakdown of EV adoption to prioritize where charging investment matters most, and give pricing analysts a defensible, explainable price estimate for used vehicles.

## Dataset

289,555 EV registration records for the adoption analysis, modeled into a Power BI star schema, alongside 15,409 used-car listings with vehicle specifications and asking prices for the pricing model.

## Data Cleaning

Registration records were normalized into fact and dimension tables (vehicle, geography, time) to support drill-through in Power BI, and the used-car listings were split on a nameplate-grouped basis so the same model or nameplate couldn't appear in both training and test data.

## EDA

The registration data showed 80.7% BEV share and 69.3% fleet concentration across just the top three counties — a concentration sharp enough to directly shape where charging infrastructure should be prioritized first. On the pricing side, a first-pass classification check produced a suspiciously perfect ROC-AUC of 1.00.

## Feature Engineering

For pricing, vehicle age, mileage, trim, and drivetrain-derived features were engineered — and then interrogated specifically because of that suspicious 1.00 AUC result.

## Model

A leakage audit traced the perfect ROC-AUC to drivetrain-derived proxy features that were effectively encoding the target. Removing them dropped the score to a believable 0.66, which prevented a misleading model from shipping. For pricing, linear regression was compared against gradient boosting on the leakage-clean feature set.

## Evaluation

On the nameplate-grouped split, the explainable linear regression model reached R² 0.83 and 19.3% MAPE, beating both a 41.8% MAPE brand-median baseline and, notably, a 20.8% MAPE gradient boosting model — a case where the simpler, more explainable model was also the better one.

## Results

The EV adoption dashboard quantified exactly how concentrated demand was (80.7% BEV share, top-three-county fleet concentration of 69.3%), and the pricing model shipped as an explainable linear model rather than a black-box gradient boosting model that had initially looked stronger before the leakage fix.

## Business Insights

A model that looks too good is a leakage audit waiting to happen — catching the 1.00 AUC before it shipped avoided a pricing tool that would have failed silently on new listings. And once leakage was removed, the simplest defensible model won on both accuracy and explainability, which is the outcome pricing stakeholders actually want.

## Future Work

Extending the adoption dashboard with a time dimension to track how county-level concentration shifts as charging infrastructure is built out, and adding confidence intervals to the pricing estimates so analysts can see how much to trust a given quote.
