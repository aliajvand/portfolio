---
title: Hackathon Pel 4 — Demand Forecasting
slugOverride:
categories: [Machine Learning, Data Analysis]
repo:
tech: [Python, Pandas, LightGBM, XGBoost, CatBoost, HistGradientBoosting, Time-Series Ensembling, Scikit-learn]
summary: 2nd place at Hackathon Pel 4 (AI Innovation Factory × Jobama). In 72 hours our team built a gradient-boosting ensemble that reached 82% prediction accuracy on real hospitality booking data across 321 Iranian cities.
thumbnail: figure:line
featured: true
order: 1.5
powerBiEmbedUrl:
screenshots: []
biSection: null
stats:
  - label: Final placement
    value: 2nd
  - label: Prediction accuracy
    value: 82%
  - label: Cities covered
    value: 321
  - label: Build time
    value: 72h
figures:
  Overview: figure:line
  Problem Statement: figure:flow
  Dataset: figure:map
  Feature Engineering: figure:bars
  Model: figure:pipeline
  Evaluation: figure:kv
  Results: figure:bars
  Tech Stack: figure:flow
---

## Overview

Hackathon Pel 4 was a 72-hour team competition run by **AI Innovation Factory (کارخونه نوآوری هوش مصنوعی)** together with **Jobama (جاباما)**, an Iranian hospitality booking platform. The brief was demand forecasting on Jobama's real booking data. Our team finished **2nd**, with a gradient-boosting ensemble that reached **82% prediction accuracy** on the organizers' evaluation, covering **321 Iranian cities**.

The short version:

- **2nd place** in a 72-hour team hackathon on real, messy production data.
- **82% prediction accuracy** on the competition's held-out evaluation period.
- **An ensemble of four gradient-boosting models** (LightGBM, XGBoost, CatBoost, HistGradientBoosting) instead of one hero model.
- The forecast was framed as an **early-warning signal 2–4 weeks ahead** of demand peaks, so capacity and pricing decisions had time to react.

This was team work over three days, so most of this write-up says "we". Where a number comes from the organizers' scoring rather than my own evaluation harness, I say so.

## Problem Statement

A booking marketplace lives or dies on lead time. If a city is about to spike, supply has to be secured and prices adjusted weeks before guests start searching; if demand is about to soften, the same decisions have to move the other way. Getting it wrong is expensive in both directions: unsold inventory on one side, sold-out cities and lost bookings on the other.

Booking data also has a structural trap. Reservations for a given stay date accumulate over weeks, so the most recent stay dates always look artificially empty at the moment you pull the data. Train naively on that and the model learns a decline that does not exist. Handling this accrual effect — nowcasting the not-yet-complete recent window — was the most important modelling decision we made.

On top of that: 72 hours, a team that had not worked together before, and a dataset nobody had seen until the clock started.

## Business Goal

Produce city-level demand forecasts with enough lead time and stability to drive two concrete decisions: where to push capacity and host acquisition, and where to move pricing. A 2–4 week signal was the useful horizon, because that is roughly when both levers can still change an outcome.

## Dataset

Real booking data from Jobama, spanning **321 Iranian cities** with wide variance in volume: a handful of large destination cities carry most of the bookings, while a long tail of small cities produces sparse, spiky series.

<!-- TODO before publishing: exact row count, date range, and grain (daily per city? per listing?). -->

Preprocessing focused on three things: reconciling booking timestamps against stay dates so the accrual window could be identified, aggregating to a consistent grain per city and date, and handling the sparse tail so small cities did not inject noise into the loss without being dropped entirely.

## Data Cleaning

Leakage prevention was deliberate, not incidental. Splits were chronological, never random. Every feature was built only from information that would genuinely exist at prediction time, and the recent-accrual window was treated explicitly instead of being fed in as if it were complete history. In a 72-hour contest the fastest way to lose is to post a beautiful validation score built on a leak and then collapse on the private evaluation.

## Feature Engineering

Three families of features carried the model:

- **Lag and rolling features** — recent demand at several lags plus rolling means and volatility, so the model could read both level and trend per city.
- **Calendar seasonality** — day-of-week, month, and Persian (Jalali) calendar effects including public holidays, which drive Iranian travel demand far more than the Gregorian calendar does.
- **Geographic features** — city identity and aggregate city-level behaviour, letting the model share strength across similar destinations instead of fitting 321 independent series.

Plus the accrual-aware nowcasting features described above, which corrected the artificial dip at the end of the series.

<!-- TODO: confirm the final feature list and which features topped the importance ranking. -->

## Model

We benchmarked **LightGBM, XGBoost, CatBoost and HistGradientBoosting** on the same feature matrix and the same validation split. The individual scores landed close together, and no single model was reliably best across folds — a classic sign that crowning a winner on a 72-hour tuning budget would have meant fitting the leaderboard rather than the problem.

So we ensembled them. Their errors were decorrelated enough that the blend came out both more accurate and noticeably more stable fold to fold than any single member. Under that time constraint, stability was worth more than squeezing the last fraction of a point out of one model.

## Evaluation

Validation was chronological: train on the past, score on a later unseen period, mirroring how the forecast would actually be used.

The headline **82% prediction accuracy** is the competition's own scoring metric on their evaluation period, and I report it as the organizers computed it rather than dressing it up as something else. In a production setting I would quote a volume-weighted error metric (WMAPE) alongside bias, because accuracy-style figures hide systematic over- and under-forecasting.

<!-- TODO: state the exact metric definition (100 − WMAPE? 100 − MAPE? R²?), the scored horizon, and the baseline score if the organizers published one. -->

## Results

The ensemble reached 82% prediction accuracy on the organizers' evaluation and took **2nd place** overall. Just as important to the judges, the output was not left as a raw forecast: we framed it as an early-warning signal that flags when a city is heading into a demand peak 2–4 weeks out, and tied it to specific capacity and pricing actions.

That framing is, I think, why we placed. Plenty of teams can fit a decent model in 72 hours. Fewer connect the forecast to a decision someone at Jobama could actually take on Monday morning.

## Challenges & Lessons

- **The accrual trap was the whole game.** Recognising that recent stay dates were incomplete rather than declining was worth more than any hyperparameter search.
- **The clock forced better priorities.** With 72 hours we spent them on features, leakage checks and validation discipline instead of exotic architectures. No deep learning, no regret.
- **Sparse cities distort everything.** A long tail of low-volume cities can dominate an unweighted error metric while contributing almost nothing to revenue.
- **Ensembling beat model shopping.** When candidates score within noise of each other, blending is the honest answer.
- **Speed came from the split, not the code.** Agreeing early on who owned data prep, features and modelling was the difference between three days of work and three days of merge conflicts.

## Tech Stack

Python, pandas and NumPy for data work; LightGBM, XGBoost, CatBoost and scikit-learn's HistGradientBoosting for modelling; scikit-learn for the pipeline and chronological validation; Matplotlib and Seaborn for analysis and the final presentation.

## Links

Competition: Hackathon Pel 4 — AI Innovation Factory × Jobama, 2026.

<!-- TODO: add repo, slides and competition links if any are public. To switch the GitHub panel on, put the repo name (not the URL) in the `repo:` field at the top of this file. -->

## Future Work

Given more than 72 hours: forecast **prediction intervals** rather than point estimates, so capacity decisions can be sized by uncertainty instead of a flat buffer; break the evaluation out by city tier, since one national accuracy number hides where the model actually struggles; and add price, search and cancellation signals to separate genuine demand shifts from supply-side effects.
