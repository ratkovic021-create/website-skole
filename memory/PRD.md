# Language First — Škola stranih jezika

## Problem Statement (original)
Marketing landing page for "Language First — Škola stranih jezika", a 5.0-rated (27 reviews) language school in Novi Sad, Serbia.
- Address: Petra Drapšina 32, Novi Sad 21000
- Phone: 064 1140600
- Hours: Mon–Fri 10:00–21:00, Sat 10:00–16:00, Sun closed
- Services: Group, Advanced, Private, Adult, Beginner, Intermediate, English, German, Online, Russian, Serbian for foreigners

## User Choices
- Content language: Serbian (Latinica) — strict
- No prices anywhere
- Focus on phone + location (call-to-action everywhere)

## Architecture
- Pure frontend marketing site (React + Tailwind + Framer Motion + react-fast-marquee)
- Backend untouched (default FastAPI + Mongo template, no app-specific endpoints)
- Single-page anchor navigation (#jezici, #casovi, #o-nama, #lokacija)

## Design System
- Aesthetic: Warm Editorial (light theme)
- Fonts: Cormorant Garamond (headings), Manrope (body)
- Palette: paper #FBF9F6 / ink #1C211F / brand terracotta #B84A39 / forest #2B4C3B
- Sharp/minimal radius, 1px borders, grain texture, no purple gradients

## Implemented Sections (Dec 2025)
- Sticky Navbar (logo, anchor links, phone CTA, mobile menu)
- Hero (editorial headline, 5.0 rating block, phone CTA, address link, image with caption card)
- Languages Marquee (scrolling 4 languages, serif italic)
- About (image, headline, rating stats grid, pull quote)
- Languages cards (EN/DE/RU/SR bento with hover invert + level chips)
- Services bento (4 class types) + 3-level strip + inline phone CTA
- Location (dark section: address, phone, Google Maps iframe, weekly hours, call CTA)
- Footer (logo, phone, address links)
- Sticky mobile call button (full-width, brand color)

## Test Status
- Iteration 1: 17/17 passed (100%) — see /app/test_reports/iteration_1.json
- No backend tests required

## Backlog / Next Tasks
- P2: Light Serbian contact form (name/phone/desired language) writing to MongoDB
- P2: Animated testimonials carousel pulling real Google reviews snippets
- P2: Press/partners ribbon (companies the school has trained)
- P3: Blog/news section for SEO
- P3: Add favicon and OG image branded for the school
