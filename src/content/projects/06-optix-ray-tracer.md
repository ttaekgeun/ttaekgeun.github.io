---
title: "OptiX-Based Ray Tracer"
description: "An NVIDIA OptiX ray tracer supporting built-in and custom primitives, reflection, refraction, shadows, physically based shading, instancing, glTF meshes, and dynamic objects."
external_url: "https://github.com/ttaekgeun/RealTimeRendering/tree/main/HW4"
tags:
  - "C++"
  - "OptiX"
  - "Ray Tracing"
  - "PBR"
  - "glTF"
  - "Personal Project"
image: "/images/projects/06/thumbnail.png"
---

## Overview

- **Period:** December 2024
- **Type:** Personal project
- **Objective:** Implement a ray tracer with the OptiX API and support dynamically updated objects.

## Implementation

- Ray traced OptiX built-in primitive types, including triangles, spheres, and axis-aligned bounding boxes.
- Implemented custom intersection routines for cones and cylinders.
- Applied reflection, refraction, and shadow effects through ray tracing.
- Applied physically based rendering shading.
- Implemented instancing and rendered multiple instances of the same object.
- Loaded glTF files and rendered triangle-mesh data.
- Updated dynamic objects and reflected their changes in the ray-tracing acceleration structures.
