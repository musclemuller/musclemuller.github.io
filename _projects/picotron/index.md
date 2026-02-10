---
layout: page
title: picotron
description: Exploring Hugging Face's minimalist 4D distributed training framework — data, tensor, and pipeline parallelism in a few hundred lines.
importance: 2
category: work
---

## Overview

[Picotron](https://github.com/huggingface/picotron) is Hugging Face's educational distributed training framework implementing **4D parallelism** (data parallel, tensor parallel, pipeline parallel, context parallel) in a few hundred lines of code. It's designed to be the smallest possible codebase that actually works at scale.

> **Status:** Exploring. Notes and experiments to be filled in.

## What I Want to Understand

- [ ] How 4D parallelism is composed — what runs on which GPU
- [ ] Pipeline parallelism scheduling (1F1B vs GPipe)
- [ ] Tensor parallelism for attention and FFN layers
- [ ] How ZeRO-style data parallelism is implemented
- [ ] Communication collectives (all-reduce, all-gather, reduce-scatter)

## Links

- [Original repo](https://github.com/huggingface/picotron)
- [Companion tutorial](https://huggingface.co/blog/picotron)

## Notes

See [notes.md](notes.md) for implementation notes and experiments.
