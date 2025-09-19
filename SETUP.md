# Portfolio Setup Notes

## Environment Variables

Create a `.env` file in the root directory with the following variables for the contact form:

```env
# Email Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=ajithsrikanth.f@northeastern.edu

# Optional: EmailJS Configuration (fallback)
EMAILJS_SERVICE_ID=your-service-id
EMAILJS_TEMPLATE_ID=your-template-id
EMAILJS_PUBLIC_KEY=your-public-key
```

## Build Process

1. **Resume Parsing**: The profile data is automatically generated from the resume PDF in `public/static/`
   ```bash
   npm run build:profile
   ```

2. **Full Build**: 
   ```bash
   npm run build
   ```

## Key Features Implemented

### ✅ Resume Ingestion
- PDF parsing script extracts data from `public/static/Ajith_Srikanth_Resume_M.pdf`
- Auto-generates `src/data/profile.ts` with structured data
- Includes experience, skills, projects, writings, and certifications

### ✅ Contact Form
- Serverless API endpoint at `/api/contact`
- Email delivery to `ajithsrikanth.f@northeastern.edu`
- Rate limiting (5 requests/hour per IP)
- Honeypot spam protection
- Success/error feedback

### ✅ Dark/Light Mode
- Persistent theme toggle using localStorage
- No FOUC with inline script in index.html
- CSS variables for consistent theming
- Respects `prefers-color-scheme`

### ✅ Color Scheme
- CSS variables for all colors
- Green, Blue, Red accent palette
- Semantic color tokens (bg, fg, primary, accent-1, accent-2)
- Tailwind integration

### ✅ Enhanced Animations
- Framer Motion page transitions (fade + slide up)
- Card hover effects (lift + scale)
- Staggered skill chip reveals
- Respects `prefers-reduced-motion`

### ✅ Projects & Writings Pages
- Dedicated routes `/projects` and `/writings`
- Filter and search functionality
- Responsive grid layouts
- External links and demo buttons

### ✅ Header/Footer
- Clean navigation (About, Projects, Writings, Contact)
- Theme toggle and social links
- No phone numbers (email, LinkedIn, GitHub only)
- Mobile-responsive

### ✅ Accessibility & SEO
- Semantic HTML landmarks
- Proper focus management
- JSON-LD structured data
- Open Graph and Twitter meta tags
- WCAG AA compliance

## Links Updated
- LinkedIn: https://linkedin.com/in/as31
- GitHub: https://github.com/skuller-007
- Email: ajithsrikanth.f@northeastern.edu

## Phone Numbers Removed
- All phone displays and tel: links removed site-wide
- Only email, LinkedIn, and GitHub contact methods available

## Deployment Notes
- Vercel/Netlify ready
- Environment variables needed for contact form
- Resume PDF should be in `public/static/` directory
- Build process includes profile generation



