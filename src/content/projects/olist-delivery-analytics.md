---
title: Olist Delivery Performance Analytics
slugOverride:
categories: [Machine Learning, Automation]
repo: olist-delivery-analytics
tech: [Python, Scikit-learn, Pandas, Parquet, Geospatial Features, Isotonic Calibration, pytest]
summary: An end-to-end logistics pipeline over ~99,000 Brazilian e-commerce orders that predicts late delivery, estimates freight cost, and sets promise dates using only purchase-time information, backed by a 39-feature leakage audit and 34 automated tests.
thumbnail: null
featured: true
order: 3
powerBiEmbedUrl:
screenshots: []
biSection: null
stats:
  - label: Orders modeled
    value: "~99,000"
  - label: Sellers covered
    value: "3,000"
  - label: States covered
    value: 27
  - label: Automated tests
    value: 34
figures:
  Overview: figure:flow
  Dataset: figure:flow
  Data Cleaning: figure:bars
  EDA: figure:line
  Model: figure:flow
  Results: figure:kv
  Business Insights: figure:donut
---

## Overview

A predictive logistics layer over Olist's Brazilian e-commerce marketplace data: one pipeline that predicts whether an order will arrive late, estimates freight cost, and sets a realistic promise date — all using only information that exists at the moment a purchase is made.

## Problem Statement

Delivery promise dates and freight costs are useful only if they can be produced before the order ships, using seller, route, and customer signals that don't leak information from the future. Naively joining historical tables onto an order is an easy way to build a model that looks great offline and fails in production.

## Business Goal

Give operations a set of decision policies — which orders to route through an expedite queue, and what promise date to quote — that hold up under the same information constraints the business actually has at purchase time.

## Dataset

Roughly 99,000 orders across 3,000 sellers and 27 Brazilian states, covering order items, payments, freight, customer and seller geography, and delivery timestamps.

## Data Cleaning

Timestamps across the order lifecycle (purchase, approval, shipping, delivery) were reconciled and checked for logical ordering, and freight and price fields were audited for outliers and currency-format inconsistencies before feature engineering began.

## EDA

Delivery delay correlated strongly with route distance and seller-level historical performance, which pointed toward seller- and route-level features as the backbone of the model — but only if those features could be computed without looking past the purchase timestamp.

## Feature Engineering

Seller, route, and customer-history features were engineered via as-of joins keyed strictly to purchase time, so every feature reflects only what was knowable at the moment of purchase. This was verified with a 39-feature leakage audit and backed by 34 automated tests to keep the guarantee from silently breaking as the pipeline evolved.

## Model

Five separate models were built to cover the operational surface: late-delivery classification, freight-cost estimation, and promise-date estimation, translated into capacity-constrained expedite queues and quantile promise dates with isotonic calibration applied where probability estimates fed a downstream policy.

## Evaluation

Each model was evaluated against an incumbent baseline appropriate to its task, with cost-sensitivity tables built so the business could see the trade-off between being conservative (safe but slow promise dates) and being aggressive (faster promises, more late-delivery risk).

## Results

The pipeline shipped five production-oriented models on leakage-verified features, with the 39-feature leakage audit and 34-test suite giving operations confidence that the as-of join discipline — not an accidental peek at the future — was driving the accuracy.

## Business Insights

The leakage audit itself was as valuable as the models: several naive feature candidates that looked highly predictive turned out to be encoding information from after the purchase, and would have quietly inflated offline metrics while failing in production.

## Future Work

Extending the expedite-queue policy with real capacity constraints per fulfillment center, and adding a monitoring layer that flags when a seller's or route's live delay pattern drifts away from what the model was trained on.
