
# Sev Charles | Portfolio Website (Redesign)

This repository contains the source code for the redesign of Romsev's personal portfolio website. It is a modern, interactive single-page application built to showcase my software engineering projects, journey, and skills. The site features a space-themed design with 3D elements, smooth animations, and a responsive UI.

## Tech Stack

This project leverages a modern frontend ecosystem to deliver a high-performance experience:

  * **Core Framework:** [React](https://react.dev/) (v18) with [TypeScript](https://www.typescriptlang.org/)
  * **Build Tool:** [Vite](https://vitejs.dev/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  * **Animations:**
      * [Framer Motion](https://www.framer.com/motion/) (Page transitions & UI interactions)
      * [Lottie React](https://lottiefiles.com/) (Vector animations)
  * **3D Graphics:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei) (Interactive solar system background)
  * **UI Components:** Built using [Shadcn UI](https://ui.shadcn.com/) and [Magic UI](https://magicui.design/) patterns, utilizing Radix UI primitives.
  * **Routing:** [React Router](https://reactrouter.com/) (HashRouter implementation for GitHub Pages compatibility)

## Key Features

  * **Immersive 3D Background:** A fully interactive, procedurally generated solar system using Three.js that persists and changes perspective as you navigate.
  * **Smooth Transitions:** Custom exit and entry animations between pages.
  * **Responsive Design:** Fully responsive layouts with a mobile-friendly navigation system.
  * **Project Showcases:** Detailed case study pages for projects like the *RASSOR TeleOperation Console*, *Lemon Drop*, and *ResearchBuddy*.
  * **Image Lightbox:** Custom context-based lightbox for viewing project images in high detail.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/vesmor/vesmorRedesign.git
    cd vesmorRedesign
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Development

To start the local development server:

```bash
npm run dev
```

  * By default, the app will run at `http://localhost:5173`.
  * **Network Access:** To expose the server to your local network, use `npm run host`.

## Building and Deployment

This project is configured for deployment on **GitHub Pages**.

### Build

To create a production build (transpiles TypeScript and bundles assets):

```bash
npm run build
```

### Deploy

To deploy the latest build to the `gh-pages` branch:

```bash
npm run deploy
```

*Note: This command automatically runs the build script before deploying.*

## Project Structure

```text
src/
├── animation/       # Framer Motion variants (Page transitions, etc.)
├── components/      # Reusable UI components (Buttons, Header, SideBar)
│   ├── ui/          # Base primitives (Shadcn/Radix components)
│   ├── ProjectCards # Project gallery cards
│   └── ...
├── context/         # React Context providers (Lightbox state)
├── pages/           # Main page views
│   ├── Landing      # Home page with 3D solar system
│   ├── About        # Biography and timeline
│   └── Projects     # Project listing and individual case studies
└── lib/             # Utilities (Tailwind class merger, etc.)
```

## Notes

  * **Routing:** This project uses `HashRouter` instead of `BrowserRouter`. This is a necessary configuration for hosting on GitHub Pages to prevent 404 errors on refresh, as GitHub Pages does not support client-side routing history out of the box.
  * **Vite vs CRA:** This project was initialized with Vite to support newer tooling requirements for component libraries like Shadcn UI and to provide faster build times compared to Create-React-App.

## Author

**Sev Charles**

  * [GitHub](https://github.com/vesmor)
  * [LinkedIn](https://www.linkedin.com/in/sev-charles/)
