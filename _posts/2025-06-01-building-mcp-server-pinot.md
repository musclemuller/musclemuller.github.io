---
layout: post
title: Building an MCP Server for Real-Time Analytics
date: 2025-06-01 12:00:00-0700
description: A placeholder post on building an MCP server on top of Apache Pinot to enable LLM-powered analytics workflows.
tags: [pinot, mcp, real-time-analytics, distributed-systems]
categories: []
---

> **Note:** This is a placeholder post. I'll expand it with the full technical write-up soon.

At Uber, I've been working on a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server built on top of Apache Pinot — Uber's real-time OLAP datastore. The goal: make it easy for LLM agents to reason about Pinot tables, run queries, and troubleshoot issues without requiring users to know the internals of the platform.

## What's an MCP Server?

MCP is an open protocol that standardizes how LLMs interact with tools and data sources. An MCP server exposes a set of **tools** (functions the LLM can call) and **resources** (data the LLM can read). The LLM decides which tools to call based on user intent, and the server executes them.

## Why Pinot?

Pinot is a real-time OLAP database designed for low-latency analytical queries over high-throughput event streams. At Uber, it powers dashboards, alerts, and operational analytics for teams across the company. But onboarding a new table or debugging a query issue typically requires understanding Pinot internals — schema formats, segment lifecycles, routing rules, upsert semantics.

That's the gap the MCP server fills.

## What the Server Exposes

A few of the tools currently implemented:

- `list_tables` — enumerate all tables in a cluster
- `get_schema` — fetch the schema for a given table
- `run_query` — execute a PQL/SQL query and return results
- `get_segment_metadata` — inspect segment-level health and gaps
- `get_broker_routing` — check how queries are routed to segments

## Multi-Agent Layer

On top of the MCP server, I built a multi-agent orchestration layer that routes user requests from Slack, an internal chatbot, and Claude Code. Each agent has access to the MCP tools and can chain calls — for example, diagnosing a slow query by first checking routing, then inspecting segment metadata, then running an explain plan.

More details on the agent architecture coming in a follow-up post.
