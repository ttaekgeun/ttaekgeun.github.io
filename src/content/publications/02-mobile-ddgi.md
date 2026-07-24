---
title: "Mobile-DDGI: Lightweight Probe-Based Global Illumination via Adaptive Budget Allocation"
author: "Taekgeun You, Woong Seo, Donghee Han and Insung Ihm"
date: "2026-06-29"
journal: "I3D Companion '26: Companion Proceedings of the Symposium on Interactive 3D Graphics and Games, Article No. 16"
paper_url: "https://dl.acm.org/doi/10.1145/3807895.3807920"
git_url: "https://github.com/ttaekgeun/PIKA/blob/main/docs/Mobile-DDGI.md"
description: "A lightweight probe-based dynamic diffuse global illumination method that adaptively allocates a limited probe-update budget for efficient real-time rendering on mobile hardware. This work was presented in the poster track at I3D 2026 and received the Best Poster Award."
tags:
  - "Real-time Rendering"
  - "Ray Tracing"
  - "Mobile"
  - "Global Illumination"
  - "DDGI"
  - "Vulkan"
award: "I3D 2026 Best Poster Award"
image: "/images/publications/02/thumbnail.png"
---

## Abstract

While Dynamic Diffuse Global Illumination (DDGI) and its extensions achieve efficient real-time global illumination on desktop hardware, their computational overhead remains a prohibitive bottleneck for resource-constrained mobile platforms. To address this limitation, we introduce an adaptive, probe-based framework that aggressively prioritizes updates within the camera frustum. Central to our approach is a novel probe importance metric that optimally distributes a strictly constrained mobile ray budget to the most perceptually significant probes. Evaluated across four distinct mobile ray tracing pipelines, our method significantly reduces the overall ray budget while robustly adapting to rapid radiometric and geometric changes without compromising visual fidelity.

## Key Contributions

1. **Camera-attached multiple probe volumes**
2. **Per-frame probe update budget**
3. **Probe importance metric**

## Core Idea

Mobile-DDGI combines three ideas:

1. **Camera-attached cascaded probe volumes**
2. **Tracking window-based logical probe movement**
3. **Adaptive probe update budget allocation**

The renderer maintains multiple DDGI probe volumes around the camera. Each volume has a different probe spacing, allowing dense indirect lighting near the viewer and coarser coverage farther away.

Only a limited number of probes are updated every frame. The update budget is assigned to probes that are expected to have the greatest visual impact.

---

## Probe Volume Structure

Mobile-DDGI uses camera-attached cascaded DDGI volumes.

| Property | Description |
|---|---|
| Volume type | Camera-attached cascaded probe volumes |
| Probe grid size | `16 x 8 x 16` probes per cascade |
| Cascade spacing | Each cascade doubles the spacing of the previous one |
| Probe movement | Tracking window / infinite scrolling-style logical index update |

This structure keeps high-resolution probe coverage near the camera while avoiding full-scene dense probe allocation.

<div class="gallery" data-gallery tabindex="0" aria-label="Pubication-02 image gallery-1">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/02/cascaded-volumes.png" alt="Camera-Attached Cascaded Volumes" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Camera-Attached Cascaded Volumes</strong></figcaption>
      </figure>
    </div>
  </div>
</div>

---

## Adaptive Probe Update Algorithm

Mobile-DDGI updates probes in the following order:

| Step | Operation | Description |
|---|---|---|
| 1 | Update newly active probes | Probes newly entering the active region due to camera movement are updated first. |
| 2 | Compute probe importance | Each probe receives an importance value based on usage, distance, and view-center proximity. |
| 3 | Sort probes by priority | Probes are sorted according to the computed importance value. |
| 4 | Update high-priority probes | A fixed portion of the remaining budget is assigned to visually important probes. |
| 5 | Round-robin update | The residual budget is used to update the remaining probes sequentially. |

In the evaluated configuration, the update budget is set to **200 probes per `16 x 8 x 16` cascade**. For four cascades, this means that only **800 probes** are updated per frame out of **8,192 total probes**.

---

## Probe Importance Metric

Each probe is assigned an importance score $\rho$:

$$
\rho
=
w_{\mathrm{ref}}
\cdot
w_{\mathrm{dist}}
\cdot
w_{\mathrm{center}}
$$

| Term | Meaning | Purpose |
|---|---|---|
| $w_{\mathrm{ref}}$ | Probe usage weight | Prioritizes probes contributing to the current indirect-lighting computation. |
| $w_{\mathrm{dist}}$ | Distance weight | Assigns greater importance to probes closer to the camera. |
| $w_{\mathrm{center}}$ | View-center weight | Assigns greater importance to probes closer to the screen center. |

### Probe Usage Weight

$$
w_{\mathrm{ref}}
=
\begin{cases}
1, & \text{if probe is referenced}, \\[4pt]
w_{\mathrm{ref}}^{\mathrm{min}}, & \text{otherwise}.
\end{cases}
$$

The weight $w_{\mathrm{ref}}$ prevents unused probes from being completely ignored while assigning higher priority to probes that directly contribute to shading.

### Distance Weight

$$
w_{\mathrm{dist}}
=
\begin{cases}
1, & \text{if } \lVert \mathbf{p}-\mathbf{c} \rVert < k, \\[4pt]
\exp\left(
-\left(
\lVert \mathbf{p}-\mathbf{c} \rVert-k
\right)
\right),
& \text{otherwise}.
\end{cases}
$$

where:

| Symbol | Description |
|---|---|
| $\mathbf{p}$ | Probe position |
| $\mathbf{c}$ | Camera position |
| $k$ | Distance threshold |

Probes near the camera are more likely to affect the final image and are therefore updated more aggressively.

### View-Center Weight

The projected screen-space position of probe is defined as

$$
\mathbf{d}
=
\left(
\frac{X_{\mathrm{clip}}}{W_{\mathrm{clip}}},
\frac{Y_{\mathrm{clip}}}{W_{\mathrm{clip}}}
\right).
$$

Its normalized distance from the center of the screen is

$$
n_d
=
\operatorname{clamp}
\left(
\lVert \mathbf{d} \rVert,
0,
1
\right).
$$

The view-center weight is then computed as

$$
w_{\mathrm{center}}
=
\max
\left(
1-
\operatorname{smoothstep}
\left(
0.7,
1,
n_d
\right),
w_{\mathrm{center}}^{\mathrm{min}}
\right).
$$

The weight $w_{\mathrm{center}}$ assigns higher priority to probes projected near the center of the user's view. This formulation also supports future gaze-aware or foveated-rendering extensions.

<div class="gallery" data-gallery tabindex="0" aria-label="Pubication-02 image gallery-2">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/02/probe-importance-metric.png" alt="Probe Importance Metric" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Probe Importance Metric</strong></figcaption>
      </figure>
    </div>
  </div>
</div>

---

## Probe State Machine

Mobile-DDGI uses a probe state machine to avoid unnecessary probe updates.

| State | Description |
|---|---|
| `FRESHMAN` | Newly introduced probe that needs initialization. |
| `CANDIDATE` | Probe selected as a potential update target. |
| `UPDATE` | Probe selected for ray tracing and DDGI data update. |
| `INACTIVE` | Probe that is not actively updated in the current frame. |

<div class="gallery" data-gallery tabindex="0" aria-label="Pubication-02 image gallery-3">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/02/probe-state-machine.png" alt="Probe State Machine" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Probe State Machine</strong></figcaption>
      </figure>
    </div>
  </div>
</div>

---

## Rendering Pipeline

The Mobile-DDGI rendering pipeline is organized as follows:

| Step | Stage | Description |
|---|---|---|
| 1 | Geometry pass | Render scene geometry and G-buffer data. |
| 2 | Check probe reference | Determine which probes are referenced during indirect lighting. |
| 3 | Priority sort | Sort probes using the adaptive importance metric. |
| 4 | Probe trace | Trace rays for selected probes. |
| 5 | Probe classification | Classify probes based on activity and update state. |
| 6 | Probe update | Update probe irradiance and distance data. |
| 7 | Indirect lighting pass | Evaluate indirect lighting from DDGI probe data. |
| 8 | Lighting pass | Combine direct lighting, indirect lighting, and material shading. |

<div class="gallery" data-gallery tabindex="0" aria-label="Pubication-02 image gallery-4">
  <div class="gallery__viewport" data-viewport>
    <div class="gallery__track" data-track>
      <figure class="gallery__slide">
        <div class="gallery__image"><img src="/images/publications/02/pipeline.png" alt="Rendering Pipeline" loading="lazy"></div>
        <figcaption class="gallery__caption"><strong>Rendering Pipeline</strong></figcaption>
      </figure>
    </div>
  </div>
</div>

---

## Summary

Mobile-DDGI reduces DDGI update cost on mobile GPUs by allocating a strict per-frame probe update budget to the most important probes.

The algorithm prioritizes:

1. Newly active probes caused by camera movement
2. Probes referenced by current indirect lighting
3. Probes close to the camera
4. Probes close to the center of the user's view
5. Remaining probes through round-robin updates

This makes probe-based global illumination more suitable for mobile ray tracing environments with limited ray tracing throughput and strict performance constraints.

<div class="youtube-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/7tO3wOghh48?si=Soyq1Rl2x7oHtLvK"
    title="Mobile-DDGI Demo Video"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>