# Mohd Valeed — Developer Portfolio

A modern, responsive, and animated personal developer portfolio built with **React 19** and **Vite**. Showcases technical skills, projects, experience, achievements, certifications, and contact information with smooth scroll-based animations and a custom interactive cursor.

## Features

- **Single-page responsive layout** with smooth scroll-driven reveal animations
- **Skills Explorer** — categorized stack with per-technology logos, search, category filters, and detail panel
- **Projects grid** — 13 projects with image previews, tech stacks, expandable details, status badges, and featured highlights
- **Experience timeline** — professional journey with roles, companies, and contributions
- **Achievements & Certifications** — hackathon wins, competitions, and recognized credentials
- **Contact form** — functional email-sending contact form with success feedback
- **Custom cursor** — animated interactive cursor for a premium feel
- **Mobile-friendly** — responsive design across desktop, tablet, and mobile

## Tech Stack

**Frontend**
- [React 19](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool and dev server
- [react-icons](https://react-icons.github.io/react-icons/) — icon library
- [three.js](https://threejs.org/) + [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) — 3D visual elements
- [ESLint](https://eslint.org/) — linting

**Styling**
- Custom CSS (`index.css`, `App.css`) — utility and component styles

## Project Structure

```
frontend/
├── index.html              # Entry HTML
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
├── eslint.config.js        # ESLint rules
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── icons.svg
│   └── assets/
│       ├── images/
│       │   ├── skills/     # Technology logos (SVG/PNG)
│       │   ├── projects/   # Project preview images
│       │   ├── certs/      # Certification images
│       │   └── logo.png
│       └── Final Resume.pdf
└── src/
    ├── main.jsx            # React entry point
    ├── index.css           # Global styles
    ├── App.css             # Component styles
    ├── App.jsx             # App shell with route-like sections
    ├── pages/
    │   └── Home.jsx
    └── components/
        ├── Navbar.jsx      # Navigation bar
        ├── Hero.jsx        # Hero section
        ├── Stats.jsx       # Key metrics section
        ├── About.jsx       # About me section
        ├── Skills.jsx      # Skills explorer with filters & detail panel
        ├── Projects.jsx    # Projects grid with filters
        ├── Experience.jsx  # Experience timeline
        ├── Achievements.jsx# Achievements showcase
        ├── Certifications.jsx# Certifications gallery
        ├── Contact.jsx     # Contact form
        ├── Footer.jsx      # Footer
        └── CustomCursor.jsx# Animated custom cursor
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/mohdvaleed129/portfolio.git
cd portfolio/Frontend

# Install dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with hot module replacement |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Deployment

The project is a static Vite build and can be deployed to any static host:

```bash
npm run build
```

## Customization

- **Personal info**: Update name, bio, contact details, and social links in the respective component files under `src/components/`.
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx` to add or modify projects.
- **Skills**: Update the `SKILLS` array in `src/components/Skills.jsx` to reflect your current tech stack.
- **Resume**: Replace `public/assets/images/Final Resume.pdf` with your own resume PDF.
- **Branding**: Update colors in `src/index.css` (CSS variables) to match your personal brand.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by **Mohd Valeed**