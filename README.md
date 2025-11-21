# Bledowski Canada Website

Website for Bledowski Canada property booking.

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS 4** - Utility-first CSS framework
- **Vite 7** - Fast build tool and dev server
- **Node.js** - JavaScript runtime

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/k-gerner/bledowski-website.git
cd bledowski-website
```

2. Install dependencies:
```bash
npm install
```

## Development

To run the application in development mode with hot reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Building for Production

To create a production build:

```bash
npm run build
```

This will:
1. Run TypeScript compiler to check for type errors
2. Build the application using Vite
3. Output the production-ready files to the `dist/` directory

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/).

### Deploying to Vercel

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy using one of these methods:

   **Option A: Using Vercel CLI**
   ```bash
   vercel
   ```

   **Option B: Using Vercel Dashboard**
   - Push your code to GitHub
   - Import the repository in your Vercel dashboard
   - Vercel will automatically detect the configuration from `vercel.json`

The project includes a `vercel.json` configuration file that specifies:
- Build command: `npm run build`
- Output directory: `dist`
- Development command: `npm run dev`

## Project Structure

```
bledowski-website/
├── public/              # Static assets
├── src/                 # Source code
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind directives
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # TailwindCSS configuration
├── postcss.config.js   # PostCSS configuration
└── vercel.json         # Vercel deployment configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

ISC

