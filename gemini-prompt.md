# Gemini Prompt — AganbiGare Personal Website Scaffold

You are a senior product designer and full-stack architect. Create a production-quality website scaffold for a personal portfolio + blog platform representing **Aganbi Gare** — a multidimensional individual spanning engineering, technology, faith, and entrepreneurship.

---

## Role & Constraints

- Act as architect and product designer — generate the full project structure, component hierarchy, and key page layouts.
- Do NOT write placeholder components with only comments inside — every component should have real JSX structure with mock data.
- Code will be handed off to a senior engineer (Claude Code) for refinement, so prioritize clean architecture and clear separation of concerns over pixel-perfection.
- Choose the tech stack you think is best for a portfolio + blog site with SEO, performance, and easy content management in mind. For reference, the developer is experienced with Next.js, React, Tailwind CSS, TypeScript, and deploys to Vercel.

---

## Goal

Design a visually stunning, modern, and interactive website that presents different facets of Aganbi Gare's identity through a card-based UI system. Each card is clickable and routes to a detailed section or dedicated page.

---

## Design Direction

**Aesthetic:** Clean, elegant, premium — inspired by the intersection of modern portfolio sites and startup landing pages. Think Linear, Vercel, or Stripe's design language but warmer and more personal.

**Layout:** Card-based grid system with smooth animations and hover effects. Cards should feel tactile — subtle shadows, scale transforms, gradient borders on hover.

**Responsiveness:** Mobile-first. Cards stack vertically on mobile, 2-column on tablet, 3-4 column on desktop.

**Microinteractions:** Smooth page transitions, staggered card entrance animations, hover states with depth. Use Framer Motion.

**Color Palette:** Professional and warm with a slightly futuristic edge. Suggest a specific palette with:
- Primary, secondary, and accent colors
- Background and surface colors for both light and dark modes
- Semantic colors (success, warning, etc.)

**Typography:** Use a combination of:
- **DM Serif Display** — for headings and hero text (elegant, editorial feel)
- **Outfit** — for body text and UI elements (modern, geometric, highly readable)
- **JetBrains Mono** — for any code snippets or technical content

These are fonts the developer already uses and prefers.

---

## Site Structure

### Homepage

- **Hero Section:** Full-viewport introduction with name "Aganbi Gare", animated tagline that cycles through identities: "Controls Engineer. Builder. Author. Entrepreneur." Background with subtle animated gradient or mesh.
- **Card Grid:** Main navigation — 4 interactive cards representing the core sections below. Each card has an icon, title, short description, and visual accent.
- **Footer:** Minimal — social links (GitHub: geezzzyy, LinkedIn, YouTube), copyright, theme toggle.

### Section 1: Engineering (Controls & Instrumentation)

Professional, CV-style section with a structured layout:
- **Summary** — brief professional overview
- **Skills** — categorized (instrumentation, control systems, PLC/SCADA, process engineering, etc.)
- **Experience** — timeline or list format with role, company, duration, key achievements
- **Interests** — areas of focus within controls and instrumentation
- **CV Download** — prominent button to download PDF resume
- Design tone: precise, structured, corporate-professional

### Section 2: Technology & Innovation

Showcase of technical depth and product building:
- **Education** — Executive MSc in Information Systems & E-business Management (ISEM)
- **Expertise areas** — Business Intelligence, Data Analytics, Full-Stack Development
- **Project Cards** — each project gets its own card with description, tech stack, status, and links:
  - **Lonia Telemedicine** — A full-stack telemedicine platform with hospital website (loniahospital.com), admin portal, mobile app (React Native/Expo), and NestJS API. Features video consultations (Agora), payments (Paystack), cloud storage (Cloudinary). Deployed on Vercel + Railway.
  - **Philio** — A matchmaking/relationship platform (mobile app). Currently in development.
  - **Investment & Personal Finance Platform** — Planned product for personal finance allocation and investment tracking.
- Design tone: innovative, tech-forward, showcase-oriented

### Section 3: Faith

A reflective, contemplative section — distinct in mood from the rest of the site:
- **Books** — authored works, displayed as book cover cards with links to purchase/read
- **YouTube Sermons** — embedded or linked video grid
- **Faith Blog** — preview of recent posts with read-more links
- **Personal Psalms** — curated collection, presented in elegant typography
- Design tone: calm, reverent, warm. Muted colors, more whitespace, serif typography emphasis. This section should feel like stepping into a quieter room.

### Section 4: Entrepreneurship

Business ventures and commercial endeavors:
- **Ongar Nig LTD** — Nigerian cocoa export business. Include brief description, scope, and any relevant metrics or milestones.
- **Tech Ventures** — Lonia and Philio (cross-reference with Tech section but focus on the business angle: market, vision, growth)
- **Future Ventures** — optional teaser section for upcoming projects
- Design tone: bold, ambitious, business-professional

### Blog

- Blog listing page with filterable categories (Tech, Faith, Business, Personal)
- Individual blog post template
- Support for MDX content (code blocks, embedded media, custom components)
- Reading time estimate, publish date, category tags

---

## Technical Requirements

- Component-based architecture with clear folder structure
- Reusable `Card` component with variants (project card, blog card, book card, etc.)
- Shared layout with consistent header/navigation and footer
- Dark/light mode toggle with system preference detection
- Smooth scrolling navigation
- SEO: meta tags, Open Graph, structured data for each page
- Image optimization setup
- Contact or "Get in Touch" section with email link and social links

---

## Output Format

Provide the complete scaffold:
1. **Project structure** — full file/folder tree
2. **Configuration files** — package.json, tailwind config with the design tokens (colors, fonts, spacing), tsconfig if applicable
3. **Layout and navigation** — header, footer, theme provider, page layout wrapper
4. **All page files** — homepage + each section page + blog listing + blog post template
5. **Core components** — Card, Hero, ProjectCard, BookCard, BlogPostCard, Timeline, SectionHeader, ThemeToggle
6. **Mock data file** — structured JSON/TS with all placeholder content (projects, skills, experience, blog posts, books, etc.)
7. **Global styles** — CSS/Tailwind setup with the design system (colors, typography scale, spacing)

Ensure the project runs with a single `npm install && npm run dev` (or equivalent).
