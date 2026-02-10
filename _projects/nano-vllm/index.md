---
layout: page
title: nano-vllm
description: A minimal, from-scratch reimplementation of vLLM in ~1200 lines of Python — studying efficient LLM inference and PagedAttention.
importance: 1
category: work
---

## Overview

[nano-vllm](https://github.com/GeeeekExplorer/nano-vllm) is a clean, readable reimplementation of the core [vLLM](https://github.com/vllm-project/vllm) inference engine in roughly 1,200 lines of Python. The goal is to understand how vLLM actually works under the hood — without the complexity of a production codebase.

> **Status:** Reading / studying. Notes and writeup to be filled in.

## What I Want to Understand

- [ ] PagedAttention — the core memory management idea behind vLLM
- [ ] Continuous batching and how it differs from static batching
- [ ] Tensor parallelism implementation
- [ ] CUDA graph capture and replay
- [ ] Prefix caching

## Links

- [Original repo](https://github.com/GeeeekExplorer/nano-vllm)
- [vLLM paper](https://arxiv.org/abs/2309.06180)

## Notes

See [notes.md](notes.md) for implementation reading notes.
