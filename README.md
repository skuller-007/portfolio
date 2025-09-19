# Ajith Srikanth - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design, dark/light mode, and content-driven architecture.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive**: Mobile-first design that works on all devices
- **Content-Driven**: Markdown-based content management for projects and writing
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for speed with code splitting and lazy loading
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Search**: Global search functionality (Ctrl+K)
- **Contact Form**: Netlify Forms integration with validation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: Markdown with MDX support
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── pages/            # Page components
│   ├── data/             # Static data (profile, skills, timeline)
│   ├── utils/            # Utility functions
│   ├── context/          # React context providers
│   └── App.tsx           # Main app component
├── content/
│   ├── projects/         # Project markdown files
│   ├── writing/          # Blog post markdown files
│   ├── resume/           # Resume PDF
│   └── media/            # Images and assets
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ajith-srikanth-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Content Authoring Guide

### Adding a New Project

1. Create a new markdown file in `content/projects/`
2. Use the following frontmatter structure:

```yaml
---
title: "Project Title"
slug: "project-slug"
year: 2024
role: "Lead Engineer"
tech: ["React", "TypeScript", "Node.js"]
summary: "Brief project description"
links:
  demo: "https://demo-url.com"
  repo: "https://github.com/username/repo"
images: ["/content/media/project-1.jpg"]
---
```

3. Write your project content in markdown below the frontmatter

### Adding a New Blog Post

1. Create a new markdown file in `content/writing/`
2. Use the following frontmatter structure:

```yaml
---
title: "Article Title"
slug: "article-slug"
date: "2024-01-15"
summary: "Brief article description"
tags: ["Technology", "Engineering", "AI"]
---
```

3. Write your article content in markdown below the frontmatter

### Updating Profile Information

Edit `src/data/profile.ts` to update:
- Personal information
- Social media links
- Contact details
- Bio and tagline

### Updating Skills

Edit `src/data/skills.ts` to modify:
- Skill categories
- Individual skills with proficiency levels
- Skill descriptions

### Updating Timeline

Edit `src/data/timeline.ts` to update:
- Work experience
- Education history
- Achievements and responsibilities

## 🎨 Customization

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize primary colors
  }
}
```

### Typography

Font settings are in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

### Animations

Custom animations are defined in `tailwind.config.js` and can be extended as needed.

## 📦 Build and Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific settings:

```env
VITE_SITE_URL=https://your-domain.com
VITE_ANALYTICS_ID=your-analytics-id
```

### SEO Configuration

Update meta tags in `index.html` and individual page components for better SEO.

## 🧪 Testing

### Run TypeScript Check

```bash
npm run typecheck
```

### Run Linting

```bash
npm run lint
```

### Build Analysis

```bash
npm run build:analyze
```

## 📊 Performance

The site is optimized for performance with:
- Code splitting and lazy loading
- Optimized images with lazy loading
- Minimal bundle size
- Efficient routing

## 🔒 Security

- No sensitive data in client-side code
- Secure form handling with Netlify Forms
- HTTPS enforcement in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact:
- Email: ajith.srikanth@example.com
- LinkedIn: [Ajith Srikanth](https://linkedin.com/in/ajithsrikanth)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [Vite](https://vitejs.dev/) for the build tool

---

Built with ❤️ by Ajith Srikanth


