---
title: "Mobile-DDGI: Lightweight Probe-Based Global Illumination via Adaptive Budget Allocation"
author: "Taekgeun You, Woong Seo, Donghee Han and Insung Ihm"
date: "2026-06-29"
journal: "I3D Companion '26: Companion Proceedings of the Symposium on Interactive 3D Graphics and Games, Article No. 16"
external_url: "https://dl.acm.org/doi/10.1145/3807895.3807920"
description: "A lightweight probe-based dynamic diffuse global illumination method that adaptively allocates a limited probe-update budget for efficient real-time rendering on mobile hardware. This work was presented in the poster track at I3D 2026 and received the Best Poster Award."
tags:
  - "Real-time Rendering"
  - "Ray Tracing"
  - "Mobile Platform"
  - "Global Illumination"
  - "DDGI"
  - "Vulkan"
---

## Abstract

While Dynamic Diffuse Global Illumination (DDGI) and its extensions achieve efficient real-time global illumination on desktop hardware, their computational overhead remains a prohibitive bottleneck for resource-constrained mobile platforms. To address this limitation, we introduce an adaptive, probe-based framework that aggressively prioritizes updates within the camera frustum. Central to our approach is a novel probe importance metric that optimally distributes a strictly constrained mobile ray budget to the most perceptually significant probes. Evaluated across four distinct mobile ray tracing pipelines, our method significantly reduces the overall ray budget while robustly adapting to rapid radiometric and geometric changes without compromising visual fidelity.

## Key Contributions

1. **Camera-attached multiple probe volumes**
2. **Per-frame probe update budget**
3. **Probe importance metric**

<div class="youtube-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/7tO3wOghh48?si=Soyq1Rl2x7oHtLvK"
    title="Mobile-DDGI Demo Video"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>