---
layout: page
title: Pinot Fulfillment Cluster Rebuild
description: Re-architected Uber's Fulfillment team tables on dedicated Pinot clusters with Upsert features — 50% cost reduction and 10x query latency improvement (10s → 1.5s).
importance: 2
category: work
---

## Overview

Uber's Fulfillment team runs time-sensitive analytics on delivery and trip data. Their tables were previously hosted on shared Pinot clusters with high query latency and unnecessary storage costs due to full row duplication.

## What Changed

Migrated the Fulfillment team's tables to dedicated Pinot clusters and enabled **Pinot Upsert** — a feature that allows only the latest version of a record (keyed by primary key + time) to be retained and queryable in real time.

This involved:

- Designing the new cluster topology and capacity plan for dedicated deployment
- Re-ingesting historical data with upsert-compatible schemas
- Coordinating with the Fulfillment team on schema migration and query compatibility
- Tuning upsert configuration (hash partitioning, comparison column selection, delete record handling)

## Results

| Metric | Before | After |
|---|---|---|
| Query latency (P99) | ~10s | ~1.5s |
| Cost | Baseline | **-50%** |

## Tech Stack

- Apache Pinot (Upsert, dedicated cluster deployment)
- Apache Kafka (real-time ingestion)
- Internal Uber infrastructure tooling
