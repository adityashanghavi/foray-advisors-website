# Quick Start Guide

## 🚀 Your Foray Advisors Website is Ready!

### What You Have
A modern, responsive landing page with:
- ✅ Professional design with Tailwind CSS
- ✅ Contact form with email integration
- ✅ Mobile-responsive layout
- ✅ Ready for GitHub Pages deployment
- ✅ TypeScript for code safety

### Essential Commands

```bash
# Start development server (local testing)
npm run dev

# Build for production
npm run build

# Deploy to GitHub
git push origin main
```

### Deployment Checklist

- [ ] Create a GitHub repository
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages (Settings → Pages → GitHub Actions)
- [ ] Wait for deployment (~2 minutes)
- [ ] Access your site at: `https://yourusername.github.io/foray-advisors-website/`

### What to Customize First

1. **Logo/Branding** - Update in `components/Header.tsx`
2. **Hero Title** - Edit headline in `components/Hero.tsx`
3. **Services** - Change in `components/Services.tsx`
4. **Contact Email** - Configure in `components/ContactForm.tsx`
5. **Footer Info** - Update contact details in `components/Footer.tsx`

### File Structure

```
/app              → Pages and layouts
/components       → Reusable React components
package.json      → Dependencies and scripts
next.config.js    → Next.js configuration
tailwind.config.ts → Styling configuration
```

### Contact Form Setup

The form currently uses a test endpoint. To receive real emails:

1. Go to [formspree.io](https://formspree.io)
2. Create a new form and get the ID
3. Update `components/ContactForm.tsx` line 28 with your ID

### Need Help?

- 📖 See `README.md` for detailed documentation
- 🚀 See `DEPLOYMENT_GUIDE.md` for GitHub Pages setup
- 💻 Run `npm run dev` to test locally
- 🔍 Check browser console (F12) for errors

### Next Steps

1. Test locally: `npm run dev` (visit http://localhost:3000)
2. Create GitHub repository
3. Push to GitHub: `git push origin main`
4. Enable GitHub Pages in repository settings
5. Access your live site in ~2 minutes!

---

**Happy coding! Questions? Check the README.md for more details.** 🎉
