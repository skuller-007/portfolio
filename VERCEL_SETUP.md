# 🚀 Vercel Deployment Setup Guide

## 📋 Quick Setup Steps

### 1. **Connect GitHub to Vercel** (Recommended - Easiest Method)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository: `skuller-007/portfolio`
4. Vercel will auto-detect it's a Vite project
5. Click **"Deploy"** - That's it! 🎉

**Your site will be live at**: `https://portfolio-skuller-007.vercel.app`

### 2. **Set Custom Domain** (Optional)

1. In Vercel dashboard, go to your project
2. Go to **Settings > Domains**
3. Add custom domain: `manufx.vercel.app`
4. Follow DNS configuration instructions

### 3. **Configure Environment Variables**

In Vercel dashboard, go to **Settings > Environment Variables**:

| Variable | Value | Environment |
|----------|-------|-------------|
| `VITE_SITE_URL` | `https://manufx.vercel.app` | Production |
| `VITE_FORMSPREE_ENDPOINT` | `xzzanvdl` | Production |
| `VITE_CONTACT_EMAIL` | `ajithsrikanth.f@northeastern.edu` | Production |
| `NODE_ENV` | `production` | Production |

---

## 🔧 **Advanced Setup with GitHub Actions** (Optional)

If you want automatic deployment via GitHub Actions, follow these steps:

### Step 1: Get Vercel Tokens

1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Create a new token with these scopes:
   - `read:user`
   - `read:project`
   - `write:project`
   - `deploy:project`

### Step 2: Get Project IDs

1. In Vercel dashboard, go to your project
2. Go to **Settings > General**
3. Copy:
   - **Project ID** (from Project ID section)
   - **Team ID** (from Team ID section, this is your Org ID)

### Step 3: Add GitHub Secrets

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Your Vercel token from Step 1 |
| `VERCEL_ORG_ID` | Your Team ID from Step 2 |
| `VERCEL_PROJECT_ID` | Your Project ID from Step 2 |

---

## 🎯 **Current Status**

✅ **GitHub Repository**: Ready  
✅ **Code**: Clean and linted  
✅ **Build**: Working  
✅ **ManuFX Branding**: Integrated  
✅ **Formspree**: Configured  
✅ **GitHub Actions**: Ready (will work once secrets are added)

---

## 🚀 **Deployment Options**

### **Option 1: Vercel Dashboard (Recommended)**
- **Pros**: Easiest, automatic deployments, built-in analytics
- **Cons**: Manual trigger for updates
- **Best for**: Quick setup, immediate deployment

### **Option 2: GitHub Actions + Vercel**
- **Pros**: Automatic deployments on push, full CI/CD
- **Cons**: Requires secret setup
- **Best for**: Advanced users, team workflows

---

## 📊 **After Deployment**

### **Test Your Site**
1. Visit your live URL
2. Test all pages and features
3. Verify contact form works
4. Check mobile responsiveness
5. Test dark/light mode toggle

### **Monitor Performance**
- Check Vercel dashboard for analytics
- Monitor build logs for any issues
- Set up custom domain if needed

---

## 🔧 **Troubleshooting**

### **Build Fails**
- Check Vercel build logs
- Verify all dependencies are in `package.json`
- Ensure TypeScript compilation passes

### **Environment Variables Not Working**
- Verify variables are set in Vercel dashboard
- Check variable names match exactly
- Ensure variables are prefixed with `VITE_`

### **Formspree Not Working**
- Verify `VITE_FORMSPREE_ENDPOINT` is set correctly
- Check Formspree dashboard for submissions
- Test form locally first

---

## 📞 **Need Help?**

If you encounter any issues:

1. **Check Vercel Logs**: Go to your project dashboard > Functions tab
2. **Check GitHub Actions**: Go to your repo > Actions tab
3. **Review this guide**: Make sure all steps are completed
4. **Contact**: ajithsrikanth.f@northeastern.edu

---

**Ready to deploy? Choose Option 1 for the quickest setup! 🚀**
