# Design Spec — 3D Portfolio Website

## Theme
Dark futuristic — black base with neon accent highlights. Should feel sleek, high-tech, and slightly cinematic.

## Color Palette
- **Background:** `#0A0A0F` (near-black, slightly cool undertone)
- **Primary text:** `#F5F5F7` (off-white)
- **Secondary text / muted:** `#8A8A99`
- **Accent 1 (primary neon):** `#7F5AF0` (electric purple)
- **Accent 2 (secondary neon):** `#2CB67D` (neon green) — used sparingly for highlights/hover states
- **Accent 3 (optional glow):** `#00E5FF` (electric cyan) — for 3D object glow / gradients

## Typography
- **Headings:** A modern geometric sans-serif (e.g. "Space Grotesk", "Sora", or "Clash Display")
- **Body text:** Clean sans-serif (e.g. "Inter" or "Manrope")
- Large, bold hero heading (48–72px desktop); generous line spacing throughout

## 3D Centerpiece (Hero Section)
- Abstract floating 3D object — options: distorted sphere, low-poly geometric shape, or torus knot
- Material: glass/metallic shader with subtle neon glow (purple-to-cyan gradient)
- Motion: slow continuous rotation + gentle floating (up/down) animation
- Interaction: object subtly tilts/follows cursor position (parallax-style, not full drag control)
- Should not distract from the headline text — keep it behind or beside the text, semi-transparent if needed

## Grain / Noise Hover Effect
- Applies to: buttons, project cards, images, and key interactive elements
- On hover: a subtle animated film-grain/noise texture overlays the element
- Effect should feel like a "static" or "TV grain" texture, animated (not a static image)
- Keep opacity low (10–20%) so it adds texture without hurting readability
- Combine with a slight scale-up (1.02–1.05x) and border glow on hover for extra polish

## Scroll Animations
- **Fade + slide-up:** default reveal animation for section headings and text blocks as they enter viewport
- **Staggered reveal:** project cards and skill items animate in one-by-one with slight delay between each
- **Parallax depth:** background elements (glows, particles, the 3D object) move slower than foreground content while scrolling
- **Smooth scroll:** enable inertia-based smooth scrolling site-wide (not default browser scroll snap)
- Keep animation duration short (400–700ms) with easing (e.g. `easeOutCubic`) — avoid slow/sluggish transitions

## Layout Notes
- Generous whitespace (blackspace) between sections
- Section transitions should feel intentional — subtle divider glows or gradient fades between dark sections
- Buttons: pill-shaped or slightly rounded, neon border with fill-on-hover effect
- Cards (projects/testimonials): dark glass/blurred background (glassmorphism) with a thin neon border

## Responsiveness
- 3D object should scale down or simplify on mobile (avoid performance issues)
- Grain hover effect can convert to a tap/press effect on mobile
- Stack all multi-column sections into single column below 768px width
