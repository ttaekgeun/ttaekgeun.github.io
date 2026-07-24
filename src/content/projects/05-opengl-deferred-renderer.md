---
title: "OpenGL Deferred Renderer"
description: "An OpenGL renderer developed from forward rendering to deferred rendering, with selective shading optimized through light volumes and stencil-buffer testing."
git_url: "https://github.com/ttaekgeun/RealTimeRendering/tree/main/HW3"
tags:
  - "C++"
  - "OpenGL"
  - "Deferred Rendering"
  - "PBR"
  - "glTF"
  - "Personal Project"
image: "/images/projects/05/thumbnail.png"
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
- <em>Ref: <a href="https://ogldev.org/www/tutorial37/tutorial37.html" target="_blank" rel="noopener noreferrer">OGLDev Tutorial 37</a></em>

## Rendering Methods

| Method | Description |
|---|---|
| Method-0 | Forward Renderer |
| Method-1 | Deferred Renderer |
| Method-2 | Deferred Renderer with sphere radius consideration for each light |
| Method-3 | Optimized Deferred Renderer using Stencil Test and Depth Test |

## Result

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-05 image gallery-1">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_1_albedo.png" alt="Method-1: Albedo" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Method-1: Albedo</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_1_normal.png" alt="Method-1: Normal" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Method-1: Normal</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_1_emissive.png" alt="Method-1: Emissive" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Method-1: Emissive</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_1_mr.png" alt="Method-1: Metallic Roughness" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Method-1: Metallic Roughness</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_1_pos.png" alt="Method-1: Position" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Method-1: Position</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-05 image gallery-2">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_3_spheres_1.png" alt="Method-3: Spheres-1" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Method-3: Spheres-1</strong><span>Wireframe of the actual rendered sphere.</figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_3_spheres_2.png" alt="Method-3: Spheres-2" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Method-3: Spheres-2</strong><span>Wireframe of the actual rendered sphere.</figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-05 image gallery-3">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_0_final.png" alt="Comparison: Method-0" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Comparison: Method-0</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_1_final.png" alt="Comparison: Method-1" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Comparison: Method-1</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_2_final.png" alt="Comparison: Method-2" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Comparison: Method-2</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/05/method_3_final.png" alt="Comparison: Method-3" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Comparison: Method-3</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>