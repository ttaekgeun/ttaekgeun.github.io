---
title: "Performance Profiling of Vulkan-based Ray Tracing Renderers on Mobile Platforms"
author: "Taekgeun You, Sungho Yun, Sehee Cho, Woong Seo and Insung Ihm"
date: "2025-07-25"
journal: "Journal of the Korea Computer Graphics Society, Vol. 31, No. 3, pp. 171–181"
external_url: "https://doi.org/10.15701/kcgs.2025.31.3.171"
description: "A performance study of Vulkan-based full and hybrid ray tracing renderers optimized for real-time rendering on mobile platforms."
tags:
  - "Real-Time Rendering"
  - "Ray Tracing"
  - "Ray Query"
  - "Mobile"
  - "Vulkan"
---

## Abstract

The emergence of high-performance desktop GPU has enabled ray tracing techniques to be widely used in real-time rendering, including 3D gaming applications. However, applying real-time ray tracing on moblie devices remains challenging due to power consumption, thermal constraints, and limited resources. In this paper, we developed a Vulkan-based optimized renderer for real-time ray tracing on mobile platforms and analyzed its performance. The renderers are categorized into two types: a full ray tracing renderer and a rasterization-based hybrid ray tracing renderer. To achieve optimal implementation, we applied the ray tracing pipeline and ray query extension to each renderer and evaluated their performance. Furthermore, to reduce the shading cost caused by shadow rays in scenes with multiple lights, we adopted an optimization technique that restricts the shading based on the extent of each light’s influence. In this context, maintaining the light’s influence as small as possible while preserving appropriate intensity is critical. To this end, we propose a new attenuation function and assess its performance when applied.

## Key Contributions

1. **Mobile ray tracing renderer implementation**
2. **Ray tracing pipeline and ray query comparison**
3. **Multi-light shading optimization**