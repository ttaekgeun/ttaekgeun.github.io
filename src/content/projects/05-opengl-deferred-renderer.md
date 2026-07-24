---
title: "OpenGL Deferred Renderer"
description: "An OpenGL renderer developed from forward rendering to deferred rendering, with selective shading optimized through light volumes and stencil-buffer testing."
external_url: "https://github.com/ttaekgeun/RealTimeRendering/tree/main/HW3"
tags:
  - "C++"
  - "OpenGL"
  - "Deferred Rendering"
  - "PBR"
  - "glTF"
  - "Personal Project"
image: "/images/projects/05/method_3_view_1.png"
---

## Overview

- **Period:** December 2024
- **Type:** Personal project
- **Objective:** Implement a deferred renderer using the OpenGL API.

## Development Stages

1. Implemented a forward renderer.
2. Converted the renderer to deferred rendering.
3. Added selective shading through conditional branches inside shader loops.
4. Optimized lighting by rendering spherical light volumes and using the stencil buffer.

## Key Features

- Applied physically based rendering shading.
- Loaded glTF files and rendered triangle-mesh data.

## Optimization Details

- Defined each light's influence radius using light attenuation.
- Rendered light-volume spheres and wrote to the stencil buffer based on depth comparisons.
- Shaded only pixels that passed the stencil test and blended the resulting lighting image.
