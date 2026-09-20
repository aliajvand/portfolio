---
title: Intelligent Medical Assistant
slugOverride:
categories: [Machine Learning, NLP]
repo: TODO-REPO-NAME
tech: [Python, FastAPI, FAISS, Sentence-Transformers, PyTorch, OCR, Docker]
summary: A retrieval-augmented medical assistant that reads medical documents with OCR, embeds them with Sentence-Transformers, and serves semantic search through a FAISS-backed FastAPI service packaged with Docker, planned as a six-phase product.
thumbnail: null
featured: true
order: 1
powerBiEmbedUrl:
screenshots: []
biSection: null
stats:
  - label: Roadmap phases
    value: 6
  - label: Vector index
    value: FAISS
  - label: API
    value: FastAPI
  - label: Packaging
    value: Docker
figures:
  Overview: figure:flow
  Retrieval Pipeline: figure:pipeline
  Product Roadmap: figure:flow
---

## Overview

An AI-powered medical assistant built around semantic medical search. Text is extracted from medical documents with OCR, embedded with Sentence-Transformers, indexed in FAISS, and exposed through a FastAPI service that runs in Docker. It is designed as a product that grows in versions, from a symptom-based classifier to doctor–patient interaction and clinical-trial recommendations.

Source code: [medical_ai_server on GitHub](https://github.com/1381aliajvand1381/medical_ai_server).

> TODO: add a screenshot or a short demo of a query and its results, and a live link if one exists.

## Problem Statement

Medical knowledge sits in books and scanned documents that keyword search handles badly: a patient describes symptoms in everyday words, while the source text uses clinical terms. The core problem is searching by meaning rather than exact words, over text that first has to be extracted from scans.

## Business Goal

Let users search medical content by meaning and, over later versions, build on that retrieval layer: symptom-based inference, drug information, doctor–patient requests, and clinical-trial recommendations.

## Data Sources

The retrieval layer works on text extracted from medical books and other documents, including scanned ones, using OCR.

> TODO: name the documents or books indexed, how many pages or chunks they make up, and their language(s).

## Retrieval Pipeline

1. **Ingestion and OCR:** documents are read and scanned pages are converted to text.
2. **Embeddings:** text is embedded with Sentence-Transformers (PyTorch), so similar meanings land close together.
3. **Vector index:** embeddings are stored in FAISS for fast similarity search.
4. **API:** a FastAPI service takes a question and returns the closest passages.
5. **Packaging:** the whole service is containerized with Docker so it runs the same way on any machine.

> TODO: add the embedding model, chunk size and overlap, the number of results returned, and the API endpoints.

## Product Roadmap

The project is planned as versions, each adding one capability on top of the last:

| Version | Focus |
| --- | --- |
| v0 | University prototype: symptom-based disease prediction with a simple NLP model (Scikit-learn) |
| v1 | Real medical data sources and transformer-based prediction, with a simple front end |
| v2 | OCR over medical books and semantic search (FAISS, FastAPI) |
| v3 | Drug categorization and details (effects, side effects, dosage) with a database and API |
| v4 | Doctor–patient interaction: patient requests, doctor replies, and notifications |
| v5 | Clinical-trial integration and recommendations based on symptoms |

On top of these, a doctor-feedback loop is planned: corrections from doctors feed back into training so predictions improve over time.

> TODO: mark which versions are already built and which are still planned, so the page never claims more than exists.

## Evaluation

> TODO: add retrieval quality (for example, how often the right passage appears in the top results on a set of test questions) and query latency.

## Business Insights

Semantic search over OCR-extracted sources is the foundation the later versions build on: drug information, doctor answers, and trial recommendations all need reliable retrieval first. Packaging the service with Docker means the same build runs on any machine, which is what turns a notebook into something deployable.

## Future Work

Versions 3 to 5 and the doctor-feedback loop from the roadmap, plus a measured evaluation of retrieval quality and an interface for end users.
