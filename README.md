# Tasflow SaaS Landing Page

A modern, responsive SaaS landing page for **Tasflow**, an AI-powered task management platform. The project is built with React, Vite, and Tailwind CSS, and includes a polished marketing layout with hero content, feature cards, testimonials, pricing, FAQ, email capture, and footer navigation.

## Live Preview:
https://amangupta-05002.github.io/SaaS-Landing-Page/

## Features

- Responsive landing page design
- Sticky navigation bar
- Hero section with product messaging and metrics
- Feature highlights for SaaS product benefits
- Interactive testimonial switcher
- Pricing cards with billing toggle
- Expandable FAQ section
- Email validation form

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- ESLint

## Project Structure

```text
Saas-Landing-Page/
|-- public/
|-- src/
|   |-- components/
|   |   |-- AnimatedCounter.jsx
|   |   |-- CTA.jsx
|   |   |-- EmailForm.jsx
|   |   |-- FAQ.jsx
|   |   |-- Features.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Pricing.jsx
|   |   `-- Testimonials.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
`-- README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Available Scripts

Run the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Customization

Most of the page content is stored in reusable React components inside `src/components`. Update these files to change copy, pricing, FAQ content, testimonials, and call-to-action sections.

Global styling and Tailwind setup are handled in:

```text
src/index.css
vite.config.js
```

## License

This project is available for personal and educational use.
