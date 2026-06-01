# GitHub Pages Deployment Guide

Follow these steps to deploy your Foray Advisors website to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right and select **New repository**
3. Name it `foray-advisors-website`
4. Add a description: "Professional website for Foray Advisors"
5. Choose **Public** (required for GitHub Pages)
6. Click **Create repository**

## Step 2: Initialize Git and Push Code

Open a terminal/PowerShell in your project directory and run:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Foray Advisors website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/foray-advisors-website.git

# Push to GitHub (use main as default branch)
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under "Source", select **GitHub Actions** from the dropdown
5. The deployment workflow will run automatically

## Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. Watch the **Deploy to GitHub Pages** workflow
3. It should complete in ~2 minutes
4. Once complete, your site is live!

## Step 5: Access Your Site

Your website will be available at:
```
https://YOUR_USERNAME.github.io/foray-advisors-website/
```

## Next Steps: Customize Your Site

### Update Content

Edit the component files to match your company details:

- **Header/Footer**: Contact information, company name
- **Hero Section**: Headline and tagline
- **Services**: Your actual services
- **Contact Form**: Email configuration

### Set Up Contact Form Emails

**Important**: The contact form needs email configuration. Choose one:

#### Option 1: Formspree (Recommended - Free)
1. Visit [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Copy your form ID
4. In `components/ContactForm.tsx`, replace:
   ```typescript
   const response = await fetch('https://formspree.io/f/xdkqqzgl', {
   ```
   with your form ID

#### Option 2: Custom Backend
Replace the fetch URL with your own API endpoint

#### Option 3: Netlify Forms
If you deploy on Netlify instead:
1. Change form `method="POST"` and `netlify`
2. Reference Netlify docs for configuration

### Add Custom Domain

1. In GitHub Pages settings, enter your domain name
2. Update your domain's DNS records to:
   - **CNAME**: `YOUR_USERNAME.github.io`
3. Or follow GitHub's detailed instructions in the Pages settings

### Configure Environment Variables

For production features, create `.env.production.local`:
```
NEXT_PUBLIC_FORM_ENDPOINT=your_endpoint_here
```

## Update on New Changes

To update your site with new changes:

```bash
# Make your changes
git add .
git commit -m "Update: Your change description"
git push origin main
```

The GitHub Actions workflow will automatically redeploy your site.

## Troubleshooting

### Site not appearing after 5 minutes

1. Check the **Actions** tab for workflow errors
2. Verify you selected "GitHub Actions" as the source
3. Clear your browser cache and hard refresh (Ctrl+Shift+R)

### Contact form not working

1. Verify Formspree form ID is correct
2. Test directly on formspree.io
3. Check browser console for errors (F12 → Console tab)

### Workflow fails during build

1. Check the error message in Actions
2. Run locally: `npm run build`
3. Fix any errors in your code
4. Push the fix to GitHub

### Need to update to custom domain

1. Go to repository Settings → Pages
2. Enter your custom domain
3. Update DNS records at your domain provider
4. GitHub will automatically create SSL certificate

## Local Development

To test changes locally before pushing:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

## Getting Help

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [Formspree Documentation](https://formspree.io/help/)

---

**Your site is ready to deploy! 🚀**
