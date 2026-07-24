---
title: "3DGVRT: Vulkan-Based Mobile Gaussian Ray Tracer"
description: "A mobile Gaussian ray tracer created by porting NVIDIA 3DGRUT to Vulkan and optimizing both the ray-tracing-pipeline and Ray Query implementations."
git_url: "https://github.com/sebbang99/3DGVRT"
tags:
  - "C++"
  - "Vulkan"
  - "Ray Tracing"
  - "Ray Query"
  - "Gaussian Splatting"
  - "Mobile"
  - "Team Project"
image: "/images/projects/07/view-1.png"
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

## Result

<div class="gallery" data-gallery tabindex="0" aria-label="Project-07 image gallery-1">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/07/invalid-particle.png" alt="Invalid Particle Ellimination" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Invalid Particle Ellimination</strong><span>Result image after applying invalid particle eillimination.</figcaption>
      </figure>
    </div>
  </div>
</div>

<div class="gallery" data-gallery tabindex="0" aria-label="Project-07 image gallery-2">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/07/view-1.png" alt="Result: View-1" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Result: View-1</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/07/view-2.png" alt="Result: View-2" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Result: View-2</strong></figcaption>
      </figure>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/projects/07/view-3.png" alt="Result: View-3" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Result: View-3</strong></figcaption>
    </div>
    <button type="button" class="gallery__nav gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="gallery__nav gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="youtube-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/_PJ500vArCM"
    title="3DGVRT Demo Viedo (Mobile)"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<div class="youtube-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/xbAMOWnd4mA"
    title="3DGVRT Demo Viedo (PC)"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>