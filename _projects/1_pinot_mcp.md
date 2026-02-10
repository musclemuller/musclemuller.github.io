---
layout: page
title: Pinot MCP Server & Multi-Agent System
description: AI-powered support for real-time analytics at Uber — automates table onboarding and query troubleshooting via Slack, internal chatbot, and Claude Code.
importance: 1
category: work
---

## Overview

Built a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server on top of Apache Pinot and layered a multi-agent system on top of it to make the platform more self-service for internal users at Uber.

## What It Does

The MCP server exposes Pinot operations (table inspection, schema queries, segment metadata, query execution) as structured tools that LLM agents can call. On top of that, a multi-agent orchestration layer routes user requests from three surfaces:

- **Slack** — users can ask questions about their tables or paste failing queries in a dedicated Slack channel
- **Internal chatbot** — embedded in Uber's internal developer portal
- **Claude Code** — engineers can query Pinot state directly from their terminal

## Impact

- Significantly reduced time-to-resolution for common Pinot issues (schema mismatches, segment gaps, query timeouts)
- Automated table onboarding flows that previously required manual intervention from the platform team
- Enabled self-service debugging for teams that own Pinot tables

## Tech Stack

- Apache Pinot (OLAP datastore)
- MCP (Model Context Protocol)
- Multi-agent orchestration (Claude)
- Slack API, internal chatbot integration
