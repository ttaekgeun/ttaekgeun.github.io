---
title: "CPU Ray Tracer"
description: "A C++ CPU ray tracer supporting multiple analytic primitives, glTF triangle meshes, reflection, refraction, hard and soft shadows, and physically based shading."
git_url: "https://github.com/ttaekgeun/RealTimeRendering/tree/main/HW1"
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

## Result
<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-04 image gallery-1">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/triangle_albedo.png" alt="Albedo: Triangle" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Albedo: Triangle</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/rec_albedo.png" alt="Albedo: Rectangle" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Albedo: Rectangle</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/sph_albedo.png" alt="Albedo: Sphere" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Albedo: Sphere</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/aabb_albedo.png" alt="Albedo: AABB" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Albedo: AABB</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/cone_albedo.png" alt="Albedo: Cone" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Albedo: Cone</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/cylinder_albedo.png" alt="Albedo: Cylinder" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Albedo: Cylinder</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-04 image gallery-2">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/triangle_normal.png" alt="Normal: Triangle" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Normal: Triangle</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/rec_normal.png" alt="Normal: Rectangle" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Normal: Rectangle</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/sph_normal.png" alt="Normal: Sphere" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Normal: Sphere</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/aabb_normal.png" alt="Normal: AABB" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Normal: AABB</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/cone_normal.png" alt="Normal: Cone" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Normal: Cone</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/cylinder_normal.png" alt="Normal: Cylinder" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Normal: Cylinder</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-04 image gallery-3">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/glTF_1.png" alt="glTF Model: Avocado" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>glTF Model: Avocado</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/glTF_2.png" alt="glTF Model: glTF Box" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>glTF Model: glTF Box</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-04 image gallery-4">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/met_0_rough_0.png" alt="Met 0 Rough 0" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>PBR Shading: Metallic = 0.0 / Roughness = 0.0</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/met_0_rough_1.png" alt="Met 0 Rough 1" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>PBR Shading: Metallic = 0.0 / Roughness = 1.0</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/met_1_rough_1.png" alt="Met 1 Rough 1" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>PBR Shading: Metallic = 1.0 / Roughness = 1.0</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/met_1_rough_0.png" alt="Met 1 Rough 0" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>PBR Shading: Metallic = 1.0 / Roughness = 0.0</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-04 image gallery-5">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/refl_1.png" alt="Ray Tracing Effects: Reflection-1" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Ray Tracing Effects: Reflection-1</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/refl_2.png" alt="Ray Tracing Effects: Reflection-2" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Ray Tracing Effects: Reflection-2</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/refr_1.png" alt="Ray Tracing Effects: Refraction-1" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Ray Tracing Effects: Refraction-1</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/refr_2.png" alt="Ray Tracing Effects: Refraction-2" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Ray Tracing Effects: Refraction-2</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/shadow_1.png" alt="Ray Tracing Effects: Shadow-1" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Ray Tracing Effects: Shadow-1</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/shadow_2.png" alt="Ray Tracing Effects: Shadow-2" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Ray Tracing Effects: Shadow-2</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>

<div class="project-gallery" data-gallery tabindex="0" aria-label="Project-04 image gallery-6">
  <div class="project-gallery__viewport" data-viewport>
    <div class="project-gallery__track" data-track>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/fox.png" alt="Demo: Fox" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Demo: Fox</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/tiger_statue_hard.png" alt="Demo: Tiger Statue (Hard Shadow)" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Demo: Tiger Statue (Hard Shadow)</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/tiger_statue_soft.png" alt="Demo: Tiger Statue (Soft Shadow)" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Demo: Tiger Statue (Soft Shadow)</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/chess_hard.png" alt="Demo: Chess (Hard Shadow)" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Demo: Chess (Hard Shadow)</strong></figcaption>
      </figure>
      <figure class="project-gallery__slide">
        <div class="project-gallery__image"><img src="/images/projects/04/chess_soft.png" alt="Demo: Chess (Soft Shadow)" loading="lazy"></div>
        <figcaption class="project-gallery__caption"><strong>Demo: Chess (Soft Shadow)</strong></figcaption>
      </figure>
    </div>
    <button type="button" class="project-gallery__nav project-gallery__nav--prev" data-prev aria-label="Previous image">‹</button>
    <button type="button" class="project-gallery__nav project-gallery__nav--next" data-next aria-label="Next image">›</button>
  </div>
</div>