# 🚀 Deploy to Vercel (FREE) - Complete Guide

## Why Vercel?
- ✅ **100% FREE** for personal projects
- ✅ Automatic HTTPS/SSL
- ✅ Automatic deployments from GitHub
- ✅ Supports Node.js backend
- ✅ Supports Python serverless functions
- ✅ Fast CDN for frontend
- ✅ Easy environment variables setup

---

## 📋 Prerequisites

- [x] Code uploaded to GitHub repository ✓
- [ ] Vercel account (we'll create this)
- [ ] Project configured for Vercel deployment

---

## Step 1: Prepare Your Project for Vercel

First, we need to create configuration files for Vercel.

### Create `vercel.json` in Root Directory

This file tells Vercel how to deploy your services.

---

## Step 2: Sign Up for Vercel

1. Go to **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Complete the sign-up process

---

## Step 3: Import Your Project

1. After signing in, click **"Add New..."** → **"Project"**
2. Find your `product-transparency-platform` repository
3. Click **"Import"**

---

## Step 4: Configure Your Deployments

Vercel will detect your project structure. You'll need to deploy **3 services**:

### 🎨 **Deploy 1: Frontend (Main Deployment)**

1. **Framework Preset**: Select **"Vite"**
2. **Root Directory**: `frontend`
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

**Environment Variables** (click "Add Environment Variable"):
```
VITE_API_URL = https://your-backend-url.vercel.app
VITE_AI_SERVICE_URL = https://your-ai-url.vercel.app
```
*(We'll update these after deploying backend and AI service)*

6. Click **"Deploy"**
7. ⏳ Wait 2-3 minutes
8. **Copy your frontend URL** (e.g., `https://product-transparency-platform.vercel.app`)

---

### 🔧 **Deploy 2: Backend API**

1. Go back to Vercel Dashboard
2. Click **"Add New..."** → **"Project"**
3. Select your repository again
4. **Framework Preset**: Select **"Other"**
5. **Root Directory**: `backend`
6. **Build Command**: `npm install && npm run build`
7. **Output Directory**: Leave empty
8. **Install Command**: `npm install`

**Environment Variables**:
```
JWT_SECRET = your-super-secret-key-minimum-32-characters-long-change-this
NODE_ENV = production
PORT = 3000
```

9. Click **"Deploy"**
10. ⏳ Wait 2-3 minutes
11. **Copy your backend URL** (e.g., `https://product-transparency-backend.vercel.app`)

---

### 🤖 **Deploy 3: AI Service (Python)**

Vercel supports Python serverless functions! We need to restructure slightly.

1. Go back to Vercel Dashboard
2. Click **"Add New..."** → **"Project"**
3. Select your repository again
4. **Framework Preset**: Select **"Other"**
5. **Root Directory**: `ai-service`

**Environment Variables**:
```
PORT = 8000
```

6. Click **"Deploy"**
7. ⏳ Wait 2-3 minutes
8. **Copy your AI service URL** (e.g., `https://product-transparency-ai.vercel.app`)

---

## Step 5: Update Environment Variables

Now that all services are deployed, update the URLs:

### Update Frontend Environment Variables:

1. Go to your **Frontend project** in Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Update:
   ```
   VITE_API_URL = https://product-transparency-backend.vercel.app
   VITE_AI_SERVICE_URL = https://product-transparency-ai.vercel.app
   ```
   *(Use YOUR actual URLs from steps above)*
4. Click **"Save"**
5. Go to **"Deployments"** tab → Click **"..."** → **"Redeploy"**

---

## Step 6: Update CORS Settings

### Update Backend CORS:

1. Open your project in VS Code
2. Edit `backend/src/index.ts`
3. Update CORS origins:

```typescript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://product-transparency-platform.vercel.app',  // Add your frontend URL
    'https://*.vercel.app'  // Allow all Vercel preview deployments
  ],
  credentials: true
}));
```

### Update AI Service CORS:

1. Edit `ai-service/app.py`
2. Update origins:

```python
origins = [
    "http://localhost:3000",
    "http://localhost:5000",
    "https://product-transparency-backend.vercel.app",  # Add your backend URL
    "https://product-transparency-platform.vercel.app",  # Add your frontend URL
    "https://*.vercel.app"  # Allow all Vercel deployments
]
```

### Commit and Push Changes:

1. Open **GitHub Desktop**
2. You'll see the changed files
3. **Summary**: `Update CORS for Vercel deployment`
4. Click **"Commit to main"**
5. Click **"Push origin"**

⏳ Vercel will **automatically redeploy** all services (2-3 minutes)

---

## Step 7: Set Up Database (FREE PostgreSQL)

Vercel integrates with **Neon** (free PostgreSQL):

1. In Vercel, go to your **Backend project**
2. Click **"Storage"** tab
3. Click **"Create Database"**
4. Select **"Postgres"** (Powered by Neon)
5. Click **"Continue"**
6. Database will be created and environment variables automatically added
7. Click **"Continue to Dashboard"**

### Initialize Database Schema:

1. In Vercel, click on your database
2. Click **"Query"** tab
3. Copy the contents of `backend/src/database/schema.sql`
4. Paste and click **"Run Query"**

---

## Step 8: Test Your Live Website! 🎉

1. Visit your frontend URL: `https://product-transparency-platform.vercel.app`
2. Test all features:
   - ✅ Register a new user
   - ✅ Login
   - ✅ Add a product
   - ✅ Generate a report
   - ✅ View AI insights

---

## 🎯 Your Live URLs

After deployment, you'll have:

- **Frontend**: `https://product-transparency-platform.vercel.app`
- **Backend API**: `https://product-transparency-backend.vercel.app`
- **AI Service**: `https://product-transparency-ai.vercel.app`
- **GitHub Repo**: `https://github.com/YOUR_USERNAME/product-transparency-platform`

---

## 📊 Vercel FREE Tier Limits

- **Bandwidth**: 100 GB/month
- **Build Time**: 6000 minutes/month
- **Serverless Functions**: 100 GB-hours/month
- **Deployments**: Unlimited
- **Custom Domain**: 1 domain (optional)
- **Team Members**: 1 (you)

This is **MORE than enough** for a portfolio/demo project! 🚀

---

## 🔧 Managing Your Deployment

### View Logs:
1. Go to Vercel Dashboard
2. Select your project
3. Click **"Deployments"**
4. Click on any deployment
5. View **"Build Logs"** or **"Function Logs"**

### Rollback Deployment:
1. Go to **"Deployments"**
2. Find a previous successful deployment
3. Click **"..."** → **"Promote to Production"**

### Environment Variables:
1. Go to **"Settings"** → **"Environment Variables"**
2. Add/Edit/Delete variables
3. **Important**: After changing, go to "Deployments" and redeploy

---

## 🌐 Add Custom Domain (Optional)

If you have a domain:

1. Go to project **"Settings"** → **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `myproduct.com`)
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

---

## 🚨 Troubleshooting

### "Cannot connect to backend"
- Check that `VITE_API_URL` is set correctly in frontend
- Check CORS settings include Vercel URLs
- View backend logs in Vercel dashboard

### "Build failed"
- Check build logs in Vercel
- Ensure all dependencies in `package.json`
- Verify Node.js version compatibility

### "Function timeout"
- Vercel free tier has 10-second timeout for serverless functions
- Optimize slow API endpoints
- Consider upgrading to Pro if needed

### "CORS errors"
- Verify CORS origins include your Vercel URLs
- Check that credentials: true is set
- Ensure protocol (https://) is correct

### "Database connection failed"
- Verify DATABASE_URL environment variable is set
- Check database is running in Vercel Storage
- Ensure schema is initialized

---

## 📱 Preview Deployments

Every time you push to GitHub:
- Vercel automatically creates a **preview deployment**
- Test changes before merging to production
- Share preview URLs with others

To view:
1. Go to **"Deployments"** in Vercel
2. Each commit gets its own URL
3. Click to view/test

---

## 🎓 Alternative: Render.com (Also Free)

If Vercel doesn't work well for your backend/AI service:

### Render.com offers:
- Free PostgreSQL database (90 days)
- Free web services (with some limitations)
- Better for long-running processes

See `GITHUB_DEPLOYMENT_GUIDE.md` for Render instructions.

---

## ✅ Deployment Checklist

- [ ] Vercel account created
- [ ] Frontend deployed and accessible
- [ ] Backend deployed and accessible
- [ ] AI service deployed and accessible
- [ ] Environment variables configured for all services
- [ ] CORS updated with Vercel URLs
- [ ] Changes committed and pushed to GitHub
- [ ] Database created and schema initialized
- [ ] All services tested and working
- [ ] Custom domain added (optional)

---

## 🎉 Congratulations!

Your Product Transparency Platform is now **LIVE** on the internet!

**Share your project**:
- Frontend URL: `https://product-transparency-platform.vercel.app`
- GitHub Repo: `https://github.com/YOUR_USERNAME/product-transparency-platform`

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

---

**Pro Tip**: ⭐ Star your own repository on GitHub to make it easier to find!
