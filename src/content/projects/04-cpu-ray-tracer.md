---
title: "CPU Ray Tracer"
description: "A C++ CPU ray tracer supporting multiple analytic primitives, glTF triangle meshes, reflection, refraction, hard and soft shadows, and physically based shading."
external_url: "https://github.com/ttaekgeun/RealTimeRendering/tree/main/HW1"
tags:
  - "C++"
  - "Ray Tracing"
  - "PBR"
  - "glTF"
  - "Personal Project"
image: "/images/projects/04/fox.png"
---

## Overview

- **Period:** October 2024
- **Type:** Personal project
- **Objective:** Implement a basic ray tracer that runs entirely on the CPU.

## Implementation

- Implemented intersection tests for triangles, quadrilaterals, spheres, axis-aligned bounding boxes, cones, and cylinders.
- Implemented reflection, refraction, and shadow effects through ray tracing.
- Produced soft shadows by casting additional rays toward randomly sampled points around a light source.
- Loaded glTF files and rendered triangle-mesh data.
- Applied physically based rendering shading.
