---
layout: about
title: about
permalink: /
subtitle: Software Engineer · Data Infrastructure & Real-Time Analytics · <a href="https://www.uber.com" target="_blank">Uber</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Sunnyvale, CA</p>
    <p><a href="mailto:mullerlzr@gmail.com">mullerlzr@gmail.com</a></p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false

latest_posts:
  enabled: true
  scrollable: true
  limit: 3
---

I'm a Software Engineer on the Data Infrastructure & Platform team at Uber, where I work on two core pillars: real-time analytics over [Apache Pinot](https://pinot.apache.org/) and streaming infrastructure over [Apache Kafka](https://kafka.apache.org/). My work sits at the intersection of large-scale distributed systems, operational efficiency, and developer experience.

On the analytics side, I've been building tooling to make Pinot more accessible — including an MCP Server and a multi-agent system that lets users onboard tables and troubleshoot queries through Slack, our internal chatbot, and Claude Code. I also re-architected the Fulfillment team's dedicated Pinot clusters using Upsert features, cutting costs by 50% and reducing query latency from 10s to 1.5s. More recently, I tackled NUMA-aware node sizing for our Logging clusters — which account for over 50% of Uber's total Pinot deployment — saving 200TB of memory and $3.3M annually.

Before Uber, I spent nearly two years at Confluent on the Cloud Infrastructure team. I built a resource pooling service in Spring Boot to orchestrate Confluent Cloud resources (Kafka, Flink, Kubernetes, networking) for internal e2e test environments, and implemented a Go-based microservice runtime with service mesh support using Istio and Gloo Mesh. I also drove a testing strategy overhaul — introducing component tests and contract tests (via Pact) across 200+ cloud microservices.

I hold an M.S. in Information Networking from Carnegie Mellon University and a B.E. in Computer Software Engineering from the University of Electronic Science and Technology of China. I've also interned at Snowflake (task scheduling infrastructure) and StubHub (payments platform). Outside of work, I'm interested in AI agents, LLM tooling, and the evolving landscape of agentic systems built on top of data infrastructure.
