# Foray Advisors Website

A modern, responsive landing page for Foray Advisors built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design
- 🎨 Tailwind CSS styling
- 📱 Mobile-friendly interface
- 📝 Contact form with email integration
- ⚡ Fast performance with Next.js
- 🚀 Ready for GitHub Pages deployment
- 🔒 TypeScript for type safety

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **Formspree** - Form submissions (free tier available)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/foray-advisors-website.git
cd foray-advisors-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── ContactForm.tsx     # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Configuration

### Setting Up the Contact Form

The contact form is configured to use Formspree (free service). To enable email submissions:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Replace the form endpoint in `components/ContactForm.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ...
})
```

Alternatively, use services like:
- **Netlify Forms** (if deploying on Netlify)
- **AWS Lambda** for a custom backend
- **Your own API endpoint**

## Development

### Build for Production

```bash
npm run build
```

### Export as Static HTML

```bash
npm run export
```

The built files will be in the `out` directory.

## Deployment on GitHub Pages

### 1. Create a GitHub Repository

1. Create a new repository named `foray-advisors-website`
2. Push your code to the repository

### 2. Configure GitHub Pages

1. Go to your repository settings
2. Navigate to **Settings > Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will automatically deploy on push

### 3. First Deployment

Push to the `main` branch to trigger the workflow:

```bash
git push origin main
```

Your site will be available at: `https://yourusername.github.io/foray-advisors-website/`

### Custom Domain (Optional)

1. In GitHub Pages settings, add your custom domain
2. Update your domain's DNS records to point to GitHub Pages
3. GitHub will handle the SSL certificate automatically

## Customization

### Update Company Information

Edit the following files to customize content:

- **Header**: `components/Header.tsx`
- **Hero Section**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **Footer**: `components/Footer.tsx`

### Colors

Update Tailwind theme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1e40af',
  secondary: '#0369a1',
}
```

### Metadata

Update site metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Company Name',
  description: 'Your description',
}
```

## Folder Structure Details

### `/app`
- **page.tsx**: Main landing page component that imports all sections
- **layout.tsx**: Root layout with metadata and global HTML structure
- **globals.css**: Global styles and Tailwind directives

### `/components`
- Reusable React components for different sections
- All components are Client Components ('use client') for interactivity

## Performance Tips

- Images are set to unoptimized in `next.config.js` for GitHub Pages compatibility
- Consider using the `Image` component for production optimizations
- Tailwind CSS is purged automatically for production builds

## Troubleshooting

### Site not showing at GitHub Pages URL

1. Ensure the GitHub Actions workflow completed successfully
2. Check repository settings - Pages source should be "GitHub Actions"
3. Clear browser cache

### Contact form not working

1. Verify the Formspree form ID is correct
2. Check the browser console for errors
3. Test the form submission on Formspree dashboard

### Styling not applied

1. Rebuild the project: `npm run build`
2. Clear Next.js cache: `rm -rf .next`
3. Reinstall dependencies: `npm install`

## License

MIT License - feel free to use this template for your projects.

## Support

For issues or questions, please create an issue in the repository.

---

**Happy coding! 🚀**
