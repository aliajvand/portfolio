---
title: Endoscopy Image Triage
slugOverride:
categories: [Machine Learning, Healthcare AI]
repo: TODO-REPO-NAME
tech: [Python, PyTorch, ResNet-50, Flask, Groq, Llama 3.1]
summary: A Flask app that classifies endoscopy images as normal, Crohn's disease, or ulcerative colitis with a ResNet-50 model, then has an LLM explain the result to the patient in plain language, with fallback text if the LLM is unavailable.
thumbnail: null
featured: true
order: 3
powerBiEmbedUrl:
screenshots: []
biSection: null
stats:
  - label: Classes
    value: 3
  - label: Backbone
    value: ResNet-50
  - label: Input size
    value: 224×224
  - label: Explanation model
    value: Llama 3.1 8B
figures:
  Overview: figure:flow
  Model: figure:pipeline
  Explanation Layer: figure:flow
---

## Overview

A working prototype that takes an endoscopy image from upload to result. A ResNet-50 classifier assigns the image to one of three classes (normal, Crohn's disease, ulcerative colitis) with a confidence score, and a Llama 3.1 model served through Groq rewrites that result as a short, calm explanation a patient can read. The classifier decides; the language model only explains.

Source code: [crohn-project on GitHub](https://github.com/1381aliajvand1381/crohn-project).

> TODO: add a screenshot of the chat interface (save it in public/images/ and attach it under figures: Overview) and a live demo link if one exists.

## Problem Statement

A bare class label is not useful to a patient, and a model output that reads like a diagnosis is unsafe. The app needed to return the classification together with a plain-language explanation, and to be explicit that the result is a first look, not a medical verdict.

## Business Goal

Give a patient an understandable first read of an endoscopy image, while keeping the physician as the person who confirms and decides.

## Dataset

The model separates three classes: normal, Crohn's disease, and ulcerative colitis. Every uploaded image is converted to RGB, resized to 224×224, and normalized with the ImageNet mean and standard deviation before it reaches the network.

> TODO: add the dataset name and source, image counts per class, the train / validation / test split, and any augmentation.

## Model

The backbone is a ResNet-50 with its original classification layer removed, feeding a custom head: dropout (0.5), a 512-unit layer with batch normalization and ReLU, dropout (0.4), a 256-unit layer with batch normalization and ReLU, dropout (0.3), and a 3-way output. Softmax over the output gives the predicted class and a confidence value. Inference runs on GPU when one is available and on CPU otherwise.

> TODO: add training details: pretrained weights or not, fine-tuning strategy, epochs, optimizer, and augmentation.

## Explanation Layer

After classification, the predicted class and its confidence are passed to Llama 3.1 8B through the Groq API. The prompt asks for three to five simple, reassuring sentences in Persian, without heavy medical jargon and without alarming the patient, and it always ends with a reminder that this is only a first look and a specialist must confirm it. If the LLM call fails, the app returns pre-written fallback text for the predicted class, so the patient always gets a message. The API key is read from an environment variable and is never stored in the code.

## Application

The interface is a chat-style web page. It sends the image as base64 to a single `/api/predict` endpoint built with Flask, which returns the class, its Persian label, the confidence, and the explanation as JSON.

## Evaluation

> TODO: add held-out metrics: overall accuracy, macro-F1, per-class recall, and a confusion matrix. State how the split was made, and whether images from the same patient can appear in both training and test data.

## Business Insights

Separating the decision from the narration is the key design choice. The vision model produces the label and the confidence, and the language model can only phrase them, which keeps the medical judgement out of the LLM and makes the system easier to audit. Showing the confidence and closing every message with a referral to a specialist keeps the product a triage aid rather than a diagnosis.

## Future Work

Reporting per-class metrics on a patient-level held-out set and calibrating the confidence score; adding Grad-CAM heatmaps so the patient and the doctor can see which region drove the prediction; hardening the app for real deployment (input validation, rate limits, generic error responses, no debug mode); and adding a clinician review step.
