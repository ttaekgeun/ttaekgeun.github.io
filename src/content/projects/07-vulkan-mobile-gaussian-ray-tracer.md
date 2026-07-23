---
title: "3DGVRT: Vulkan-Based Mobile Gaussian Ray Tracer"
description: "A mobile Gaussian ray tracer created by porting NVIDIA 3DGRUT to Vulkan and optimizing both the ray-tracing-pipeline and Ray Query implementations."
external_url: "https://github.com/sebbang99/3DGVRT"
tags:
  - "C++"
  - "Vulkan"
  - "Ray Tracing"
  - "Ray Query"
  - "Gaussian Splatting"
  - "Mobile"
  - "Team Project"
image: "/images/projects/project-7.webp"
---

## Overview

- **Period:** May 2025 – June 2025
- **Type:** Team project
- **Objective:** Develop and optimize a Vulkan-based Gaussian ray tracer for mobile platforms.

## Key Features

- Ported NVIDIA's 3DGRUT implementation to a Vulkan-based environment.
- Implemented the renderer with both the Vulkan ray-tracing pipeline and the Ray Query extension and compared their performance.
- Removed invalid Gaussian particles generated during training.

## Optimization Details

- Subdivided a single bounding-volume hierarchy into three-dimensional cells.
- Applied the following Ray Query optimizations:
  1. Stored sorted Gaussian-particle results in shared memory.
  2. Moved a loop from the shader to host-side command-buffer recording, allowing each thread to traverse and sort the full BVH once.
  3. Collected only pixels with remaining transmittance and executed Ray Query operations for those pixels.
