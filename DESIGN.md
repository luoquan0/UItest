---
name: Qinglang Digital Intelligence 2.0
status: proposed
colors:
  backgroundDark: "#08111E"
  navDark: "#0A1423"
  panelDark: "#101E31"
  textDark: "#EDF5FF"
  backgroundLight: "#F3F7FD"
  surfaceLight: "#FFFFFF"
  textLight: "#17253D"
  blueDark: "#578CFF"
  blueLight: "#3266D9"
  cyanDark: "#52DEDB"
  cyanLight: "#139BB1"
  successDark: "#36D9A5"
typography:
  family: '"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", sans-serif'
  body: "14px"
  display: "clamp(28px, 3.2vw, 39px)"
rounded:
  small: "9px"
  medium: "12px"
  large: "16px"
spacing:
  unit: "4px"
motion:
  micro: "180ms cubic-bezier(.2,0,0,1)"
  card: "220ms cubic-bezier(.16,1,.3,1)"
  route: "330ms cubic-bezier(.16,1,.3,1)"
components:
  buttonPrimary:
    height: "43px"
    background: "linear-gradient(135deg, #4387FF, #3767CF)"
  sidebar:
    width: "244px"
    collapsedWidth: "76px"
---

# Overview

**Design intent:** Upgrade Qinglang Government AI Workspace to an editorial, futuristic, but legible interface. This is an interactive visual preview for design feedback, not an authorized government system.

**Status:** All values above are proposed tokens for the V2 preview, not measurements of an existing deployed government product.

## Colors

Deep navy canvas, refined surface layers, azure primary actions and ice-cyan statuses. Light mode uses a restrained pearl-blue background with a dark blue text system. Status colors must be paired with words; never rely on color alone.

## Typography

System font stack ensures the preview does not require remote assets. Body 14 px; feature labels 10–12 px; large welcome title 28–39 px.

## Layout

Desktop: 244 px primary navigation, 232 px conversation list, flexible chat center, 256 px context panel. At 1150 px and below, context panel automatically hides; at 640 px and below, conversation list opens as a sheet. Sidebar can shrink to 76 px.

## Elevation & Depth

Use translucent but readable panels, 1 px low-contrast borders, quiet shadows, subtle azure edge illumination. Avoid heavy animated blur layers. Ambient accents are decorative and nonessential.

## Shapes

Radius 9–16 px. Stroke icons, generally 18 px, with coherent line weights. The orbit motif is a decorative brand symbol and does not encode system status.

## Motion & Micro-interaction

- Hover: 180–220 ms with small translateY, subtle border and background changes.
- Page changes: 330 ms opacity/translateY, no blocking transition.
- Chat message entry: 260 ms.
- Ambient orbit: very slow motion; the UI remains usable without it.
- System respects prefers-reduced-motion and offers an explicit motion toggle.

## Voice & Content Strategy

Formal but approachable Chinese. Demo indicators remain visible for models, documents, API keys and metrics. Warn against uploading secret or sensitive information; actual security depends on future authenticated backend controls.

## Components

Primary/secondary buttons, navigation, conversation rows, welcome hero, dynamic AI orbit, quick prompts, messages, composer, model management, data tables, status pills, monitoring chart, command palette, dialogs and toasts.

## Do's and Don'ts

Do preserve keyboard accessibility and readable contrast, keep animations optional, and retain user tasks. Don't imply the mock interface is a real AI or a government-certified secure system. Do not load remote scripts, fonts or tracking pixels.
