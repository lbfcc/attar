# Attar Tyres — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^15.0 | Framework (App Router) |
| react | ^19.0 | UI library |
| react-dom | ^19.0 | React DOM renderer |
| typescript | ^5.0 | Type safety |
| tailwindcss | ^4.0 | Utility-first CSS |
| @tailwindcss/postcss | ^4.0 | PostCSS integration for Tailwind |
| gsap | ^3.12 | Animation engine (ScrollTrigger, SplitText plugins) |
| lenis | ^1.1 | Smooth scroll with inertia |
| clsx | ^2.0 | Conditional className utility |
| tailwind-merge | ^2.0 | Tailwind class deduplication |

**Dev dependencies:**
| Package | Version | Purpose |
|---------|---------|---------|
| @types/node | ^22.0 | Node.js type definitions |
| @types/react | ^19.0 | React type definitions |
| @types/react-dom | ^19.0 | React DOM type definitions |

---

## Component Inventory

### Layout

| Component | Source | Reuse | Notes |
|-----------|--------|-------|-------|
| Header | Custom | Global | Fixed nav with transparent → glassmorphic scroll transition |
| Footer | Custom | Global | 4-column layout, responsive to 1-col on mobile |
| CustomCursor | Custom | Global | Desktop-only, lerp-following cursor dot/circle |

### Sections (page-level, used once each)

| Component | Notes |
|-----------|-------|
| HeroSection | Full-screen video bg, diagonal split, headline clip-path reveal |
| CarConfiguratorSection | Tabbed tire selection (by size / by car), cascading dropdowns |
| PopularProductsSection | 4-column product grid with 3D hover tire cards |
| WhyAttarSection | 3-column features on light background |
| ExtendedWarrantySection | Split layout: image left, warranty details right |
| FactorySection | Factory info + stats + aerial image |
| StoreLocatorSection | City search + store cards + map placeholder |

### Reusable Components

| Component | Source | Used By | Notes |
|-----------|--------|---------|-------|
| SpeedLines | Custom (SVG) | HeroSection | Decorative pulsing SVG lines, continuous opacity animation |
| GlassCard | Custom | CarConfiguratorSection | Glassmorphism wrapper: `rgba(255,255,255,0.05)` + backdrop-blur + border |
| ProductCard | Custom | PopularProductsSection | Tire image with rotateY hover, specs row, warranty badge |
| TireSpecsRow | Custom | ProductCard | Icon + text row for size/rating/index |
| WarrantyBadge | Custom | PopularProductsSection, ExtendedWarrantySection | Green checkmark + "Расширенная гарантия" text |
| FeatureCard | Custom | WhyAttarSection | Icon circle + title + description |
| StoreCard | Custom | StoreLocatorSection | Store info card with orange hover border |
| DarkDropdown | Custom | CarConfiguratorSection, StoreLocatorSection | Dark-themed select with orange focus, animated open/close |
| CTAButton | Custom | Multiple sections | Gradient orange variant + outlined white variant |
| ScrollReveal | Custom | Multiple sections | Wrapper for GSAP ScrollTrigger fade+translateY entrance |
| VideoModal | Custom | HeroSection | Overlay modal for video playback |
| SectionTitle | Custom | Multiple sections | Standardized uppercase heading with letter-spacing |
| DiagonalClipSection | Custom | Multiple sections | Wrapper applying diagonal clip-path transitions between dark/light sections |

### Hooks

| Hook | Purpose |
|------|---------|
| useScrollHeader | Manages header transparent ↔ glassmorphic state based on scroll position (100px threshold) |
| useCustomCursor | Mouse position tracking with lerp interpolation for custom cursor |
| useMediaQuery | Responsive breakpoint detection (cursor, hover effects desktop-only) |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero headline clip-path reveal | GSAP + SplitText | Split headline into lines, staggered clip-path polygon animation from left | **High** 🔒 |
| Hero staggered entrance sequence | GSAP Timeline | Chained timeline: subtitle → headline lines → description → CTAs → speed lines, with specific delays | Medium |
| Speed lines pulse | CSS @keyframes | Infinite opacity oscillation (0.3 ↔ 0.8), 3s ease-in-out | Low |
| Scroll indicator bounce | CSS @keyframes | translateY(0→8px→0), 1.5s infinite | Low |
| Scroll-triggered reveals (standard) | GSAP ScrollTrigger | Reusable ScrollReveal component: opacity + translateY(40px→0), triggered at 85% viewport | Low |
| Scroll-triggered reveals (diagonal) | GSAP ScrollTrigger | Directional translate from diagonal angles per component | Medium |
| Product cards stagger | GSAP ScrollTrigger | Batch stagger: 150ms between cards, translateY(50px→0) | Low |
| Feature cards stagger | GSAP ScrollTrigger | Batch stagger: 200ms between cards, translateY(40px→0) | Low |
| Warranty image clip-path reveal | GSAP ScrollTrigger | clip-path polygon wipe from left + translateX(-40px→0) | Medium |
| Warranty features list stagger | GSAP ScrollTrigger | translateX(20px→0), 100ms stagger per item | Low |
| Factory image slide-in | GSAP ScrollTrigger | translateX(40px→0), 800ms | Low |
| Factory stats counter | GSAP ScrollTrigger | Count-up animation from 0 to target value, 1500ms | Medium |
| Store cards stagger | GSAP ScrollTrigger | translateY(30px→0), 100ms stagger | Low |
| **Custom cursor** | GSAP | Lerp-based position tracking (factor 0.15), scale transitions on interactive hover, click scale-down | **High** 🔒 |
| Header scroll transition | CSS + hook | backdrop-filter + background-color transition, 300ms | Low |
| Tab switching cross-fade | CSS | opacity transition on content swap, 200ms | Low |
| Dropdown open/close | CSS | height + opacity transition, 200ms | Low |
| Button hover glow | CSS | box-shadow transition to orange glow, scale(1.02) | Low |
| Card hover lift | CSS | translateY(-4px) + box-shadow increase, 300ms | Low |
| Tire image rotateY hover | CSS | transform rotateY(-15deg) on parent hover, 400ms | Low |
| Nav link color transition | CSS | color transition to orange, 200ms | Low |
| Video modal open/close | GSAP | Overlay fade (300ms) + modal scale-up with bounce easing | Medium |
| Form shake on validation error | GSAP | translateX oscillation (±10px, 3 cycles), 300ms total | Low |
| Scroll-smooth | Lenis | Global smooth scroll instance, integrated with GSAP ScrollTrigger | Low |

---

## State & Logic Plan

### Car Configurator Cascading Dropdowns

Four dropdowns (Brand → Model → Year → Modification) with strict hierarchical dependencies. Each selection triggers a data fetch that populates the next dropdown. Requires:
- State shape: `{ brand: string \| null, model: string \| null, year: string \| null, modification: string \| null }`
- Derived state: `isModelDisabled = !brand`, `isYearDisabled = !model`, `isModificationDisabled = !year`
- Loading states per dropdown while fetching dependent data
- Reset cascade: selecting a parent clears all downstream selections
- Two modes: "by size" (3 independent dropdowns) and "by car" (4 dependent dropdowns), toggled via tab state

### Custom Cursor — Dual Coordinate System

The custom cursor runs on a raf loop decoupled from React render cycle. The cursor element uses `transform: translate3d()` for GPU-composited positioning. Mousemove events update a ref (not state) to avoid re-renders. The raf loop reads the ref and applies lerp interpolation directly to the DOM element. Hover detection uses event delegation — interactive elements trigger cursor state changes (small dot ↔ expanded circle).

### Header Scroll State Machine

Three states: `transparent` (at top), `glassmorphic` (scrolled down past 100px), `hidden` (optional future enhancement). Transition triggered by scroll position check on scroll event (throttled). The scroll direction matters for visual state: scrolling down adds blur, scrolling up at hero returns to transparent.

---

## Other Key Decisions

### GSAP Plugin Registration

All GSAP plugins (ScrollTrigger, SplitText) must be registered once at app initialization (in a client-side layout component or global provider). ScrollTrigger instances are created within section components and must be cleaned up on unmount to prevent memory leaks.

### Lenis + ScrollTrigger Integration

Lenis smooth scroll and GSAP ScrollTrigger require explicit synchronization. Lenis scroll events must proxy to ScrollTrigger.update(). This is done by connecting Lenis's `scroll` event to `ScrollTrigger.update()` in the Lenis initialization hook.

### Video Strategy

Two videos on the page: hero background video (autoplay, muted, loop, paused when out of viewport via IntersectionObserver) and configurator promo video (user-triggered play). Both use the HTML5 `<video>` element with custom dark-styled controls for the promo video. Hero video uses `object-fit: cover` with a static fallback image.
