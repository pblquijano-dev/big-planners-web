# Big Planners Web App

This is a modern, responsive Single Page Application (SPA) designed for **Big Planners**, a travel agency providing tailor-made experiences to destinations around the globe.

## Core Features

- **Fully Responsive**: Styled with Tailwind CSS for mobile, tablet, and desktop views.
- **Material Design 3 (M3) Inspired**: Custom color tokens, rounded corners, and shadow elevations mimicking Google's latest design guidelines.
- **Internationalization (i18n)**: Fully translated structure supporting English and Spanish, using `react-i18next`. The user can dynamically switch between languages directly from the navigation bar.
- **Scroll Reveal Animations**: Dynamic staggered entrance animations (`fade-up`, `zoom-in`) applied to page headers and card grids using a custom, GPU-accelerated `<ScrollReveal />` wrapper component.
- **Premium Loading Screen**: Localized welcome loader overlay (`Loader`) featuring dynamic spinning rings, branding, and automatic scrolling prevention during initial loading.
- **Modular Components**: Includes dynamic sections such as Hero (with slow pan/zoom background transitions), Featured Packages, Testimonials, FAQ (accordion), and an integrated WhatsApp Floating Action Button (FAB).
- **Husky Hooks & Lint-Staged**: Quality checks enforced before every commit using ESLint and Prettier.

## Tech Stack

- **React 19**: Core UI library.
- **Webpack 5**: Custom bundling and dev server setup, compiled via Babel.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI styling.
- **React-i18next**: Ecosystem for full text extraction and translations management.
- **Vitest & React Testing Library**: Blazing fast testing suite for React DOM unit testing.
- **ESLint & Prettier**: Automated code standardization and formatting rules.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory.
2. Install the necessary dependencies:

```bash
npm install
```

### Useful Scripts

To streamline development, the `package.json` includes the following commands:

- **`npm run dev`**: Starts the Webpack dev server, opens the app in your primary browser, and provides hot module replacement (HMR).
- **`npm run build`**: Compiles the application down to static files in production mode, minimizing assets.
- **`npm run test`**: Runs the entire test suite once using Vitest.
- **`npm run test:watch`**: Starts the test runner in watch mode to automatically re-run tests on file changes.
- **`npm run format`**: Automatically fixes style, indentations, and whitespace across your project via Prettier.
- **`npm run lint:fix`**: Automatically detects and fixes code-quality issues in the Javascript codebase utilizing ESLint.
- **`npm run prepare`**: Sets up Husky's git hooks. (Usually executed automatically post-install).

## Folder Structure

```text
big-planners-web/
├── public/                 # Static HTML template
├── src/
│   ├── assets/             # Images and local binary assets
│   ├── components/         # Reusable presentation and layout components
│   ├── locales/            # JSON translation mapping for (es, en)
│   ├── i18n.js             # Initializer and configuration for i18next
│   ├── index.js            # Entry point for React
│   └── index.css           # Global definitions and Tailwind injections
├── .prettierrc             # Custom rules for code formatting
├── eslint.config.js        # Next-gen ESLint configuration constraints
├── tailwind.config.cjs     # Design system, extensions, custom colors
└── webpack.config.cjs      # Bundling, loaders, and Webpack Dev Server definitions
```

## Contributing

When making changes, commit directly with standard `git commit` processes. `lint-staged` will automatically step in via Husky and ensure everything is formatted before you deploy or share your changes.
