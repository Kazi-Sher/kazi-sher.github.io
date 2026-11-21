---
layout: distill
title: "[Working title of the note]"
description: "[One line: what was done and the main result]"
date: 2026-11-18
tags: []
thumbnail: assets/img/publication_preview/spindle_scaled.jpg # PLACEHOLDER, replace with assets/img/posts/<slug>/thumb.jpg (homepage card + /blog/ list)

authors:
  - name: Kazi Sher Ahmed
    url: "https://kazi-sher.github.io/"
    affiliations:
      name: ""

toc:
  - name: Motivation
  - name: Setup
  - name: Results
  - name: Next steps

# Placeholder-box style; delete together with the placeholder boxes below.
_styles: >
  .placeholder {
    background: #e9ecef;
    border: 1px dashed #adb5bd;
    padding: 3rem 1rem;
    text-align: center;
    color: #6c757d;
    font-family: monospace;
    margin-bottom: 12px;
  }
---

<!-- DRAFT: this file lives in _drafts/, so it is NOT published even if committed.
     To publish: move it to _posts/YYYY-MM-DD-<slug>.md -->

_Exploratory note, not peer-reviewed. It builds on [paper title, venue, year](https://doi.org/...)._

## Motivation

[2–3 sentences: which question the paper left open, and what this note looks at.]

## Setup

[Model / simulation / test-rig description. Equations work with $inline$ and $$display$$ math.]

## Results

<div class="l-page placeholder">wide figure or animation goes here (.l-page)</div>
<div class="caption">[Caption: what the reader should see.]</div>

{% comment %}
Examples, delete when no longer needed. Put media in assets/img/posts/<slug>/ and assets/video/posts/<slug>/.

Looping animation (MP4, H.264, muted):
<div class="l-page">
  {% include video.liquid path="assets/video/posts/<slug>/orbit.mp4" class="img-fluid rounded" autoplay=true loop=true muted=true %}
</div>

Static figure (click to zoom):
<div class="l-body-outset">
  {% include figure.liquid path="assets/img/posts/<slug>/fig1.png" class="img-fluid rounded" zoomable=true %}
</div>
{% endcomment %}

## Next steps

[What comes next. Link the code here once it is in a repository.]
