---
company: Hackathon Pol 4
role: 2nd Place — Demand Forecasting, 72-Hour Team Competition
period: 2026 / 72 hours
location: AI Innovation Factory × Jobama
logo: 
monogram: P4
order: 0
tech: [Python, Pandas, LightGBM, XGBoost, CatBoost, Time-Series Forecasting]
---

## Overview

A 72-hour team hackathon run by AI Innovation Factory with Jobama, on demand forecasting for real hospitality booking data. Our team placed **2nd**.

## What We Built

- **Ensemble forecaster:** Benchmarked LightGBM, XGBoost, CatBoost and HistGradientBoosting on the same chronological split and blended them, since no single model was reliably best inside a 72-hour tuning budget.

- **Accrual-aware nowcasting:** Bookings accumulate toward a stay date, so recent dates look artificially empty. Correcting for that — instead of letting the model learn a decline that wasn't there — was the decision the result hinged on.

- **Calendar & geography features:** Lags, rolling statistics, Persian (Jalali) calendar and holiday effects, and city-level features across **321 Iranian cities**.

- **Result:** **82% prediction accuracy** on the organizers' evaluation, framed as an early-warning signal 2–4 weeks ahead of demand peaks for capacity and pricing decisions.

Full write-up in the Projects section.
