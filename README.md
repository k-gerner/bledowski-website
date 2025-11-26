# Chalet La Falaise Website

A modern vacation rental website built with [Next.js](https://nextjs.org) for a luxury property in Mont Tremblant, Quebec.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/k-gerner/bledowski-website.git
cd bledowski-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files. Main pages and components are located in:
- `app/page.tsx` - Home page
- `app/layout.tsx` - Root layout with metadata
- `components/` - Reusable React components

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Test the production build locally:

```bash
npm run start
```

This will start a production server at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
bledowski-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── ImageCarousel.tsx
│   ├── PropertyDescription.tsx
│   ├── Amenities.tsx
│   ├── AvailabilityCalendar.tsx
│   └── ... (other components)
├── public/                # Static assets
│   ├── calendar-custom.css
│   └── carousel/          # Image assets
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Vercel

## 📦 Key Features

- Server-side rendering (SSR) and static site generation (SSG)
- Responsive design with Tailwind CSS
- Interactive image carousel
- Embedded availability calendar
- Contact form
- Property details and amenities showcase
- SEO optimized with Next.js metadata

## 🔧 Configuration

### Tailwind CSS

This project uses Tailwind CSS v4 with the `@tailwindcss/postcss` plugin. Configuration is in `tailwind.config.js`.

### Calendar Custom Styling

The availability calendar uses custom CSS located at `public/calendar-custom.css`. In development, it loads from `localhost:5173`, and in production from the Vercel deployment URL.

## 🚢 Deployment

This project is configured for seamless deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. **Important**: Do not add a `vercel.json` file - let Vercel auto-detect the framework
5. In Vercel dashboard settings:
   - Framework Preset: Next.js
   - Leave Build Command, Output Directory, and Install Command **blank**

### Environment Variables

No environment variables are currently required for this project.

## 📝 Development Notes

- The availability calendar iframe loads from `availabilitycalendar.com`
- Custom calendar styles are applied via the `css` parameter in the iframe URL
- Images use Next.js Image component for optimization
- Remote images from Unsplash are configured in `next.config.ts`

## 🤝 Contributing

This is a private project for Chalet La Falaise. For any issues or suggestions, please contact the repository owner.

## 📄 License

Private - All rights reserved.
