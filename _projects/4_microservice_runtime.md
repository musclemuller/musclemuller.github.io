---
layout: page
title: Microservice Runtime & Service Mesh
description: Go runtime library for building Confluent Cloud microservices, plus service mesh implementation using Istio and Gloo Mesh for K8s service-to-service communication.
importance: 4
category: work
---

## Overview

Confluent Cloud runs hundreds of microservices across multiple clouds. Two related projects aimed to standardize how these services are built and how they communicate.

## Microservice Runtime Library

Built a Go runtime library for Confluent's Application Developer Platform that gives service owners a single integration point for cross-cutting platform concerns:

- **Dependency injection** using [uber-go/fx](https://github.com/uber-go/fx)
- **Config management** — pluggable backends (Vault, environment, flags)
- **Observability** — metrics, tracing, and structured logging wired up automatically
- **Security** — mTLS, service identity, and credential rotation handled at the framework level

Service owners import the runtime and get all of this without writing boilerplate, keeping business logic clean and platform concerns centralized.

## Service Mesh Layer

Implemented the **runtime network** layer — a dedicated service mesh that handles service-to-service communication within the K8s network:

- **Istio** for traffic management, mTLS, and observability between services
- **Gloo Mesh** for multi-cluster routing and centralized mesh policy management
- Abstracted mesh config from application code so services communicate over the mesh transparently

## Testing Strategy

As part of this work, I also drove a shift in testing strategy from an **hourglass distribution** (heavy on unit + e2e, light on integration) to a **pyramid distribution** (more focused component and contract tests). Onboarded **Pact broker** for consumer-driven contract testing across 200+ cloud microservices.

## Tech Stack

- Go, uber-go/fx
- Istio, Gloo Mesh
- Kubernetes
- Pact (contract testing)
