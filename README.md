# My Portfolio

A website where I showcase my skills & experience. It's also a medium where I do any new tech exploration.

## 🚀 About Me

Passionate tech enthusiast and skilled mobile developer with a knack for creating innovative and user-friendly mobile
applications. Strong problem-solving abilities and an aptitude for working collaboratively with cross-functional teams.
Committed to staying up-to-date with the latest mobile development trends and technologies to deliver cutting-edge
solutions.

## Tech Stack

**Framework:** [Next.js](https://nextjs.org/) 13 (React 18), Angular, Ionic, Cordova, Capacitor

**Language:** TypeScript, JavaScript

**Styling:** Tailwind CSS, MUI (Material UI), styled-components, Sass

**Tooling:** ESLint, Prettier, Stylelint, Yarn (Berry)

## Prerequisites

- **Node.js** 18 LTS or newer ([download](https://nodejs.org/)) — npm ships with it, no separate install needed.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/MuhammadHakeem/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   This first type-checks the project (`npm run compile`) and then starts Next.js in dev mode. Open
   [http://localhost:3000](http://localhost:3000) in your browser to view it.

No environment variables are required to run the project locally.

## Available Scripts

| Script             | Description                                                        |
| ------------------- | --------------------------------------------------------------------- |
| `npm run dev`      | Type-checks and starts the app in development mode with hot reload |
| `npm run build`    | Type-checks and creates an optimized production build              |
| `npm start`        | Serves the production build created by `npm run build`             |
| `npm run compile`  | Runs the TypeScript compiler to type-check the project             |
| `npm run lint`     | Lints and auto-fixes source files with ESLint                      |
| `npm run sitemap`  | Generates `sitemap.xml`/`robots.txt` via `next-sitemap`            |
| `npm run clean`    | Removes build output (`build-tsc`, `.next`)                        |

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── components/   # Reusable UI and page section components
├── data/         # Static content/config powering the sections (data.tsx)
├── hooks/        # Custom React hooks
├── pages/        # Next.js pages (routes)
└── services/     # API client/service layer
```
