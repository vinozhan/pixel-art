# PixelArt - Custom Hand-Drawn Artwork Platform

A modern, visually engaging single-page website focused on showcasing hand-drawn artwork and allowing customers to request custom drawings.

## Overview

PixelArt is designed to highlight the beauty of traditional hand-drawn art, featuring a curated gallery of artworks, the artist's creative process, and a seamless way for customers to commission custom drawings. The site emphasizes artistic storytelling, smooth user experience, and elegant transitions.

## Features

- **Hero Section** - Captivating landing with featured artwork and call-to-action buttons
- **Gallery Section** - Curated collection of hand-drawn artworks with hover animations
- **About Section** - Artist story and creative process showcase
- **Contact Section** - Commission request form for custom artwork
- **Smooth Animations** - Page-load, scroll-reveal, and hover animations using Framer Motion
- **Scroll Spy Navigation** - Active nav link highlighting based on current section
- **Responsive Design** - Fully responsive across all device sizes
- **Mobile Menu** - Animated hamburger menu for mobile navigation

## Tech Stack

- **React 19** - Frontend library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Project Structure

```
src/
├── assets/
│   └── images/          # Artwork and logo images
├── components/
│   ├── About.jsx        # Artist story section
│   ├── ArtworkCard.jsx  # Gallery artwork card
│   ├── Contact.jsx      # Commission form section
│   ├── Footer.jsx       # Site footer
│   ├── Gallery.jsx      # Artwork gallery section
│   ├── Hero.jsx         # Hero/landing section
│   ├── Logo.jsx         # Reusable logo component
│   ├── Navbar.jsx       # Navigation bar
│   ├── NavLink.jsx      # Navigation link with active state
│   ├── ProcessCard.jsx  # Creative process step card
│   └── Section.jsx      # Reusable section wrapper
├── data/
│   ├── artworks.js      # Gallery artwork data
│   ├── commisionFeatures.js
│   ├── contactInfo.js
│   ├── Links.js         # Navigation and footer links
│   └── processSteps.js
├── hooks/
│   └── useActiveSection.js  # Scroll spy hook
├── pages/
│   └── Home.jsx         # Main homepage
├── App.jsx              # Root component
├── index.css            # Global styles and Tailwind imports
└── main.jsx             # Entry point
```

## Getting Started
Live Site: https://pixel-art-portfolio.netlify.app/

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/pixelart.git
   cd pixelart
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Design Philosophy

- **Clean & Artistic** - Minimal design with soft neutrals and artistic accents
- **Storytelling Focus** - Content emphasizes emotional connection and craftsmanship
- **Subtle Animations** - Animations enhance usability without distraction
- **Premium Feel** - Calm, sophisticated aesthetic befitting handcrafted artwork

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#FAF8F5` | Background |
| Charcoal | `#2C2C2C` | Primary text |
| Warm Gray | `#8B8680` | Secondary text |
| Soft Brown | `#A89F91` | Tertiary elements |
| Accent | `#C4A77D` | CTAs, highlights |

## License

This project is licensed under the MIT License.

---

Made with love by Vinozhan
