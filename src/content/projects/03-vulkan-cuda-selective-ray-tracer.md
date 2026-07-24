---
title: "Selective Ray Tracer Using Vulkan and CUDA"
description: "A selective shadow ray tracer that detects shadow-map boundaries with a CUDA Sobel filter and applies ray tracing only to edge regions to reduce cost while improving shadow quality."
git_url: "https://github.com/ttaekgeun/ShadowEdgeSelectiveRT"
tags:
  - "C++"
  - "Vulkan"
  - "CUDA"
  - "Ray Tracing"
  - "Shadow Mapping"
  - "Deferred Rendering"
  - "glTF"
  - "Personal Project"
image: "/images/projects/03/thumbnail.png"
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
- In the tested PC environment, the hybrid rendering approach does not outperform full ray tracing. This is mainly because the test system uses an RTX 4090, which provides very high ray tracing performance for general Whitted-style ray tracing workloads.

## Result
<div class="gallery" data-gallery tabindex="0" aria-label="Project-03 image gallery-1">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/original-texture-1.png" alt="Original Texture: Sponza" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Original Texture: Sponza</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/original-texture-2.png" alt="Original Texture: Bistro Exterior" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Original Texture: Bistro Exterior</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/original-texture-3.png" alt="Original Texture: Cornell Box" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Original Texture: Cornell Box</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="gallery__nav gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="gallery__nav gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="gallery" data-gallery tabindex="0" aria-label="Project-03 image gallery-2">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/position-texture-1.png" alt="Position Texture: Sponza" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Position Texture: Sponza</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/position-texture-2.png" alt="Position Texture: Bistro Exterior" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Position Texture: Bistro Exterior</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/position-texture-3.png" alt="Position Texture: Cornell Box" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Position Texture: Cornell Box</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="gallery__nav gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="gallery__nav gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="gallery" data-gallery tabindex="0" aria-label="Project-03 image gallery-3">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/shadow-texture-1.png" alt="Shadow Texture: Sponza" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Shadow Texture: Sponza</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/shadow-texture-2.png" alt="Shadow Texture: Bistro Exterior" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Shadow Texture: Bistro Exterior</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/shadow-texture-3.png" alt="Shadow Texture: Cornell Box" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Shadow Texture: Cornell Box</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="gallery__nav gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="gallery__nav gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="gallery" data-gallery tabindex="0" aria-label="Project-03 image gallery-4">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/edge-texture-1.png" alt="Edge Texture: Sponza" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Edge Texture: Sponza</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/edge-texture-2.png" alt="Edge Texture: Bistro Exterior" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Edge Texture: Bistro Exterior</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/edge-texture-3.png" alt="Edge Texture: Cornell Box" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Edge Texture: Cornell Box</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="gallery__nav gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="gallery__nav gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="gallery" data-gallery tabindex="0" aria-label="Project-03 image gallery-5">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/final-1.png" alt="Final Result: Sponza" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Final Result: Sponza</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/final-2.png" alt="Final Result: Bistro Exterior" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Final Result: Bistro Exterior</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/03/final-3.png" alt="Final Result: Cornell Box" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Final Result: Cornell Box</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="gallery__nav gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="gallery__nav gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>