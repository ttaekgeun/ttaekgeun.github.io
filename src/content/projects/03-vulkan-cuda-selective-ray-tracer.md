---
title: "Selective Ray Tracer Using Vulkan and CUDA"
description: "A selective shadow ray tracer that detects shadow-map boundaries with a CUDA Sobel filter and applies ray tracing only to edge regions to reduce cost while improving shadow quality."
external_url: "https://github.com/ttaekgeun/ShadowEdgeSelectiveRT"
tags:
  - "C++"
  - "Vulkan"
  - "CUDA"
  - "Ray Tracing"
  - "Shadow Mapping"
  - "Deferred Rendering"
  - "glTF"
  - "Personal Project"
image: "images/projects/project-3.webp"
---

## Overview

- **Period:** September 2024 – December 2024
- **Type:** Personal project
- **Objective:** Reduce the ray-tracing cost of shadow generation while improving the visual quality of shadow maps.

The renderer performs ray tracing only around boundaries detected in the shadow-map result.

## Implementation

- Used interoperability between the Vulkan and CUDA APIs:
  - Vulkan handled graphics operations.
  - CUDA handled parallel image-processing operations.
- Applied a parallel Sobel filter in CUDA to a shadow-map texture created by Vulkan.
- Performed selective ray tracing only on regions identified as edges by the Sobel filter.

## Challenge

- The Sobel filter size and its boundary-detection characteristics prevented the renderer from producing shadows as clean as originally intended.

## Lessons Learned

- Correct read/write access modes are critical when CUDA accesses textures created by Vulkan.
- Vulkan–CUDA resource sharing requires careful external-memory management and synchronization using external memory and semaphores.
