---
title: "Performance Profiling of Vulkan-based Ray Tracing Renderers on Mobile Platforms"
author: "Taekgeun You, Sungho Yun, Sehee Cho, Woong Seo and Insung Ihm"
date: "2025-07-25"
journal: "Journal of the Korea Computer Graphics Society, Vol. 31, No. 3, pp. 171–181"
paper_url: "https://doi.org/10.15701/kcgs.2025.31.3.171"
description: "A performance study of Vulkan-based full and hybrid ray tracing renderers optimized for real-time rendering on mobile platforms."
tags:
  - "Real-Time Rendering"
  - "Ray Tracing"
  - "Ray Query"
  - "Mobile"
  - "Vulkan"
image: "/images/publications/01/thumbnail.jpg"
---

## Abstract

The emergence of high-performance desktop GPU has enabled ray tracing techniques to be widely used in real-time rendering, including 3D gaming applications. However, applying real-time ray tracing on moblie devices remains challenging due to power consumption, thermal constraints, and limited resources. In this paper, we developed a Vulkan-based optimized renderer for real-time ray tracing on mobile platforms and analyzed its performance. The renderers are categorized into two types: a full ray tracing renderer and a rasterization-based hybrid ray tracing renderer. To achieve optimal implementation, we applied the ray tracing pipeline and ray query extension to each renderer and evaluated their performance. Furthermore, to reduce the shading cost caused by shadow rays in scenes with multiple lights, we adopted an optimization technique that restricts the shading based on the extent of each light’s influence. In this context, maintaining the light’s influence as small as possible while preserving appropriate intensity is critical. To this end, we propose a new attenuation function and assess its performance when applied.

## Key Contributions

1. **Mobile ray tracing renderer implementation**
2. **Ray tracing pipeline and ray query comparison**
3. **Multi-light shading optimization**

## Renderering Methods

<div class="gallery" data-gallery tabindex="0" aria-label="Pubication-01 image gallery-1">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/01/fullrt.jpg" alt="Full Ray Tracing" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Full Ray Tracing</strong><span>Uses ray tracing or ray query as the primary rendering method.</figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/01/hybrid.jpg" alt="Hybrid" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Hybrid</strong><span>Performs deferred rasterization first, then applies ray tracing or ray query for selected effects.</figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/01/hybrid-shadowmap.jpg" alt="Hybrid Shadowmap" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Hybrid Shadowmap</strong><span>Uses the hybrid approach but replaces ray-traced shadow rendering with shadow mapping.</figcaption>
      </figure>
    </div>
    <button type="button" class="gallery__nav gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="gallery__nav gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

## Renderering Pipelines

<div class="gallery" data-gallery tabindex="0" aria-label="Pubication-01 image gallery-1">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/01/hybrid-pipeline.jpg" alt="Hybrid Pipeline" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Hybrid Pipeline</strong><span>Uses ray tracing or ray query as the primary rendering method.</figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/01/hybrid-shadowmap-pipeline.jpg" alt="Hybrid Shadowmap Pipeline" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Hybrid Shadowmap Pipeline</strong><span>Performs deferred rasterization first, then applies ray tracing </figcaption>
      </figure>
    </div>
    <button type="button" class="gallery__nav gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="gallery__nav gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

## Extending the Light Attenuation Function

$$
\begin{aligned}
f(x)
&=
\begin{cases}
\dfrac{1}{a x^2 + b x + 1},
& \text{if } 0 < x < \alpha d_{\max}, \\[8pt]
h\left(x-\alpha d_{\max}\right)^2+\dfrac{1}{\beta},
& \text{if } \alpha d_{\max} < x < d_{\max},
\end{cases}
\\[12pt]
a
&=
\left(1-\dfrac{1}{\beta}\right)
\dfrac{1}{\alpha d_{\max}},
\\[8pt]
b
&=
-2\left(1-\dfrac{1}{\beta}\right)
\dfrac{1}{\alpha d_{\max}},
\\[8pt]
h
&=
\dfrac{1}{(1-\alpha)^2 d_{\max}^2}
\left(
\dfrac{1}{\gamma}-\dfrac{1}{\beta}
\right).
\end{aligned}
$$

<div class="gallery" data-gallery tabindex="0" aria-label="Pubication-01 image gallery-1">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/01/light-attenuation.png" alt="Attenuation Function Control" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Attenuation Function Control</strong><span>Attenuation function control using alpha, beta, and gamma parameters.</figcaption>
      </figure>
    </div>
  </div>
</div>

## Summary

- Performance analysis of various ray-tracing rendering techniques on mobile platforms
- Hybrid ray-tracing renderers generally outperform full ray-tracing renderers.
  - However, the performance advantage of hybrid ray tracing decreases as the number of triangles increases.
- Using an any-hit shader significantly increases traversal costs in the ray-tracing pipeline.
  - Some any-hit effects can be reproduced using a hybrid ray-tracing approach.
- Ray queries generally outperform the ray-tracing pipeline.
- A new attenuation function is proposed to effectively balance performance and visual quality.