# Project Title

Testnet

## Prerequisites

* Node.js (v14 or later)
* npm (v6 or later) or Yarn (v1.22 or later)

## Getting Started

Follow these steps to install dependencies, run the development server, and build for production.

### 1. Clone the repository

```bash
git clone https://github.com/Grigary1/Testnet.git
cd your-repo
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

### 3. Run the development server

This will start Vite's dev server, typically on `http://localhost:5173/`.

Using npm:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

### 4. Open in Browser

Navigate to `http://localhost:5173/` to see your app in action. The server supports hot module replacement (HMR), so changes reflect instantly.

### 5. Build for Production

To generate optimized, minified assets for production:

Using npm:

```bash
npm run build
```

Or using Yarn:

```bash
yarn build
```

This creates a `dist` folder with your compiled app.

### 6. Preview the Production Build

After building, you can preview the production bundle locally:

Using npm:

```bash
npm run serve
```

Or using Yarn:

```bash
yarn serve
```

This serves the contents of `dist` at `http://localhost:4173/` (or another available port).

## Additional Scripts

* **Linting**: `npm run lint` or `yarn lint`
* **Format code**: `npm run format` or `yarn format`

## Project Structure

```
├── public/           # Static assets
├── src/              # Source files
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page-level components
│   ├── App.tsx       # Root component
│   └── main.tsx      # Entry point
├── index.html        # HTML template
├── tsconfig.json     # TypeScript configuration
├── vite.config.ts    # Vite configuration
├── package.json      # npm scripts & dependencies
└── README.md         # Project documentation
```

## Customization

* Tailwind CSS: configure in `tailwind.config.js`
* Environment variables: add to `.env` files

