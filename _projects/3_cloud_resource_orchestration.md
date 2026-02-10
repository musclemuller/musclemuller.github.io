---
layout: page
title: Cloud Resource Orchestration Service
description: Spring Boot service to orchestrate Confluent Cloud resource lifecycle — networks, Kubernetes clusters, Kafka, and Flink — for internal testing infrastructure.
importance: 3
category: work
---

## Overview

At Confluent, end-to-end system tests require a full stack of cloud resources: VPC networks, Kubernetes clusters, Kafka clusters, and Flink clusters. Provisioning and tearing down these environments was manual, slow, and error-prone.

## What I Built

A **resource pooling service** in Spring Boot that manages the full lifecycle of Confluent Cloud resources:

- **Pool management** — maintains a warm pool of pre-provisioned resources ready for test consumption
- **Lifecycle automation** — handles create, assign, release, and garbage-collect operations
- **Metadata storage** — persists resource state and ownership in RDS (PostgreSQL)
- **Garbage collection** — detects and reclaims leaked or expired resources automatically

The service manages 300+ cloud resources at any given time and is used by CI/CD pipelines and engineers running local e2e tests.

## Deployment & Observability

- Deployed to Kubernetes via Halyard and Helm charts
- Integrated with ElasticSearch for log aggregation and Datadog for metrics, dashboards, and alerting

## Tech Stack

- Java, Spring Boot
- Confluent Cloud APIs (Network, Kafka, Flink, Kubernetes)
- PostgreSQL (RDS), ElasticSearch, Datadog
- Kubernetes, Halyard, Helm
