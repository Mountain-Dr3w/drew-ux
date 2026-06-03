# Portfolio Redesign Session Log
**Date:** December 30, 2024

## What Was Done

### 1. Complete Visual Redesign
Transformed the portfolio from a generic AI-generated look to a distinctive, editorial designer aesthetic.

**New Design System:**
- Typography: Space Grotesk (sans) + Instrument Serif (italic accents)
- Color: Monochromatic with warm orange accent (`hsl(15, 90%, 55%)`)
- Custom cursor that grows on hover (desktop only)
- Subtle noise texture overlay
- Scroll-triggered reveal animations

**Files Changed:**
- `src/index.css` - Complete overhaul of styles, colors, animations
- `src/tailwind.config.ts` - New fonts, animations, timing functions
- `src/components/CustomCursor.tsx` - New component
- `src/components/Hero.tsx` - Bold editorial hero with staggered typography
- `src/components/Navbar.tsx` - Minimal nav with live clock
- `src/components/About.tsx` - Two-column layout with skills/experience
- `src/components/Projects.tsx` - Large cards with numbered index
- `src/components/Contact.tsx` - Clean CTA section
- `src/pages/Index.tsx` - Updated layout with cursor
- `src/pages/Portfolio.tsx` - Archive page redesign

### 2. Complete Case Study Rewrites
All four case studies were rewritten to address hiring manager feedback.

**Structural Changes (all case studies):**
- Added "My Role" section at top with timeline, team size, responsibilities
- Consistent section naming: My Role → Background → The Problem → Research & Approach → The Solution → Results
- Added "What I'd do differently" sections for self-reflection
- Replaced vague metrics with before/after numbers ("2.5 hrs → 45 min")

**Voice & Tone Changes:**
- Changed "we" to "I" to show ownership
- Removed AI-isms (em dashes, "comprehensive," "leveraging")
- Added real user quotes with specific titles
- Added tension/conflict stories showing challenges overcome

**Files Changed:**

**Forward Edge (DefTech):**
- `src/components/deftech/DefTechIntroSection.tsx`
- `src/components/deftech/DefTechChallengesSection.tsx`
- `src/components/deftech/DefTechApproachSection.tsx`
- `src/components/deftech/DefTechResearchSection.tsx`
- `src/components/deftech/DefTechSolutionSection.tsx`
- `src/components/deftech/DefTechResultsSection.tsx`

**Debrief:**
- `src/components/debrief/DebriefIntroSection.tsx`
- `src/components/debrief/DebriefChallengesSection.tsx`
- `src/components/debrief/DebriefApproachSection.tsx`
- `src/components/debrief/DebriefSolutionSection.tsx`
- `src/components/debrief/DebriefResultsSection.tsx`

**Veriflux:**
- `src/components/case-study/BackgroundSection.tsx`
- `src/components/case-study/ChallengesSection.tsx`
- `src/components/case-study/ApproachSection.tsx`
- `src/components/case-study/SolutionsSection.tsx`
- `src/components/case-study/ResultsSection.tsx`

**Jigsaw:**
- `src/components/jigsaw/JigsawIntroSection.tsx`
- `src/components/jigsaw/JigsawChallengesSection.tsx`
- `src/components/jigsaw/JigsawApproachSection.tsx`
- `src/components/jigsaw/JigsawMapPlanningSection.tsx`
- `src/components/jigsaw/JigsawResultsSection.tsx`

### 3. Key Story Additions per Case Study

| Project | Key Narrative Added |
|---------|---------------------|
| **Forward Edge** | Pushed back on "dashboard" brief, proposed "decision support system" instead. Convinced stakeholders with 2 weeks of conversations. |
| **Debrief** | Project was about to be cancelled. Turned it around in 4 months. Became a model for other military software teams. |
| **Veriflux** | Won over skeptical founders by shipping quick CSS accessibility fixes in week 2. Built trust before proposing bigger changes. |
| **Jigsaw** | Fought for "connected highlighting" feature. Ran error study showing 42% reduction in scheduling mistakes to convince engineering. |

### 4. Name Correction
Updated from "Drew Johnson" to "Drew McFarland" and initials from "DJ" to "DM" in:
- `src/components/Navbar.tsx`
- `src/components/Contact.tsx`

## Running the Project
```bash
npm install
npm run dev
```
Opens at http://localhost:8080

### 5. Session 2 Updates (December 30, 2024)

**New FORGE Case Study:**
- Created complete case study for Space Force DevSecOps platform
- Added 6 section components in `src/components/forge/`
- Copied images from `forge-case-study/` folder to `public/lovable-uploads/`
- Route: `/case-study/forge`

**Homepage Changes:**
- Changed location from Boston, MA to Nashville, TN
- Changed hero text from "products" to "experiences"
- Changed subheader to "Product / Service Designer"
- Aligned "Based in Nashville, TN" with subheader row
- Increased hero top padding for breathing room
- Replaced project cards with FORGE featured card
- Removed scroll indicator

**Portfolio Page Updates:**
- Grouped projects into "Service Design" and "Product Design" sections
- Service Design first (FORGE)
- Product Design second (Jigsaw, Debrief, Veriflux)
- Hidden Forward Edge case study
- Updated descriptions to lead with metrics

**Custom Cursor:**
- Added `<CustomCursor />` to all 4 case study pages

**About Section:**
- Updated experience from resume: Rise8 (2025), Kessel Run Design Ops (2022-2025), Kessel Run Product Designer (2017-2022), DrewUX Consultant (2016-Present)
- Updated skills: Service Blueprinting, Journey Mapping, User Research, Stakeholder Alignment, Accessibility, Prototyping

**Cleanup:**
- Removed em dashes from About.tsx and Contact.tsx
- Fixed missing `experiences` array that was causing blank page

## Next Steps to Consider
1. Add actual project images/screenshots where possible
2. Review the specific numbers in case studies for accuracy
3. Consider adding a "process" or "approach" page
4. Mobile testing and refinement
5. SEO meta tags and social sharing images

### 6. Session 3 — FORGE impact + problem framing (June 3, 2026)

**Goal:** Make the FORGE case study match the house standard the other four already hit — concrete user outcomes and before→after numbers — and sharpen the core problem statement.

**Plan:**
1. **Synthesis (`ForgeSynthesisSection.tsx`)** — name the unifying problem above Visibility/Discoverability/Ownership: *there was no centralized way to onboard your app and then manage it.* Those three become facets of that one gap.
2. **Impact (`ForgeResultsSection.tsx`)** — rewrite from capability statements ("Reduced Ambiguity") to explicit *user outcomes enabled* ("a tenant can self-serve onboarding status without pinging a human"), each paired with a real before→after number. Mirrors the before-state stats in Background (6–7% self-service, months vs. 1-week target). Portal is shipped & in use → present tense / real-adoption claims are fair.
3. Verify with `npm run build` (and visual check at /case-study/forge).

**Done (verified via `npm run build`):**
- **Synthesis** — added the core-problem statement ("no single place to onboard your app and then manage it") as a callout above the three facets (Visibility / Discoverability / Ownership).
- **Impact** — replaced the four qualitative cards with: a headline mission outcome (new capability reaches users in **under 30 days, on avg**), a 4-up before→after number band, and four user-outcome cards ("Know exactly where you stand", etc.).

**Real metrics used (provided by Drew):** self-service onboarding 6-7% → **90%**; time to first deploy months → **4.5 days** (beat 1-week target); onboarding support tickets **~80%** reduction; **8** apps onboarded; headline: capability reaches users in **<30 days avg**. Portal is shipped & in use → present-tense claims retained.

**Optional follow-ups not done:** surface the 90% / <30-day headline in the hero or Background for scanability; add a real tenant/platform-lead quote (other four case studies have one, FORGE still doesn't).

### 7. Session 4 — deploy via Velveteen/infra CI pipeline (June 3, 2026)

**Goal:** Deploy drew-ux to `drewux.velveteen.sh` through the same headless infra CI path velveteen/oscc use (GitHub Actions → SecRel scan → GHCR → VPS via Caddy), instead of Lovable.

**Findings (empirical):** Lovable git-sync broke because the GitHub account was renamed `DrewUXDesign → Mountain-Dr3w`. VPS is `5.78.201.14`. SSH from this machine is denied (`publickey`), drew-ux has no deploy secrets, and adding a new Caddy subdomain needs root — so a *first* deploy can't be 100% headless on my end; the SecRel pipeline can.

**Plan / artifacts:**
- **drew-ux:** `Dockerfile` (multi-stage: node build → `caddy:2-alpine` serving `dist/` with SPA fallback), `Caddyfile.docker`, `.dockerignore`, `.trivyignore`, `.github/workflows/ci.yml` (calls `infra/secrel.yml`; deploy job gated behind `vars.DEPLOY_ENABLED` so the pipeline is green until provisioned).
- **infra:** `compose/drew-ux/docker-compose.yml` (static site, 127.0.0.1:8082→8080, 128m), Caddy route `drewux.{$DOMAIN} → localhost:8082`, runbook entry.
- **Verify:** build+run image locally; push both repos; watch SecRel run to green; confirm image in GHCR.

**Handoff (needs Drew — credential/root):** set drew-ux secrets `VPS_HOST=5.78.201.14`, `VPS_USER=deploy`, `DEPLOY_SSH_KEY=<key>`; one-time on VPS as root: `cd /opt/infra && git pull && cp compose/caddy/Caddyfile /etc/caddy/Caddyfile && caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy`; then set repo var `DEPLOY_ENABLED=true` and re-run. DNS for drewux.velveteen.sh is covered by the existing `*.velveteen.sh` wildcard.
