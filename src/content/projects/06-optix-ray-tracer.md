---
title: "OptiX-Based Ray Tracer"
description: "An NVIDIA OptiX ray tracer supporting built-in and custom primitives, reflection, refraction, shadows, physically based shading, instancing, glTF meshes, and dynamic objects."
git_url: "https://github.com/ttaekgeun/RealTimeRendering/tree/main/HW4"
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

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-06 image gallery-1">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/06/main.png" alt="Main View" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Main View</strong><span>Shadow, reflection and refraction effects are applied and supports triangle, sphere, aabb, cone, cylinder intersection.</figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/06/instancing.png" alt="Instancing" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Instancing</strong><span>The result image after applying instancing.</figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/06/dynamic_update.png" alt="Dynamic Update" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Dynamic Update</strong><span>The result image after applying dynamic update.</figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>