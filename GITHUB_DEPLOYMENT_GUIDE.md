# GitHub Deployment Guide

## Step 1: Install Git (if not already installed)

1. Download Git from: https://git-scm.com/download/win
2. Run the installer and use default settings
3. Restart VS Code after installation

## Step 2: Create GitHub Repository

1. Go to https://github.com
2. Sign in to your GitHub account
3. Click the **"+"** icon in the top right → **"New repository"**
4. Fill in the repository details:
   - **Repository name**: `product-transparency-platform`
   - **Description**: `Full-stack product transparency platform with AI-powered sustainability scoring`
   - **Visibility**: Choose **Public** or **Private**
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 3: Initialize Git and Push to GitHub

After creating the repository on GitHub, run these commands in VS Code terminal:

```powershell
# Navigate to project directory
cd "C:\Users\Aman chandra\OneDrive\Desktop\Team Assignment Product Transparency Website"

# Initialize Git repository
git init

# Add all files to Git
git add .

# Create initial commit
git commit -m "Initial commit: Product Transparency Platform with AI service"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/product-transparency-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Set Up GitHub Pages (for frontend hosting)

### Option A: Using GitHub Pages (Free, Static Sites Only)

**Note**: GitHub Pages only hosts static sites. Your backend and AI service will need separate hosting.

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **"Deploy from a branch"**
4. Choose branch: **main** and folder: **/ (root)**
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/product-transparency-platform/`

**Important**: You'll need to build your frontend first:
```powershell
cd frontend
npm run build
```
Then commit and push the `dist` folder.

### Option B: Full Stack Deployment (Recommended)

Since your project has a backend and AI service, you'll need a platform that supports full-stack apps:

#### 🚀 Recommended: Render.com (Free Tier Available)

**Benefits**: 
- Free tier available
- Supports Node.js backend, Python AI service, and static frontend
- Auto-deploys from GitHub
- Built-in PostgreSQL database

**Setup Steps**:

1. Go to https://render.com and sign up with GitHub
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Create 3 services:

**Service 1: Backend API**
   - **Name**: `product-transparency-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment Variables**:
     ```
     JWT_SECRET=your-super-secret-jwt-key-change-this
     DATABASE_URL=postgres://your_db_url
     PORT=5000
     ```

**Service 2: AI Service**
   - **Name**: `product-transparency-ai`
   - **Environment**: `Python 3`
   - **Build Command**: `cd ai-service && pip install -r requirements.txt`
   - **Start Command**: `cd ai-service && uvicorn app:app --host 0.0.0.0 --port 8000`
   - **Environment Variables**:
     ```
     PORT=8000
     ```

**Service 3: Frontend**
   - **Name**: `product-transparency-frontend`
   - **Environment**: `Static Site`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`

4. Update CORS settings in backend and AI service to allow your Render URLs

#### 🌐 Alternative: Vercel + Railway

**Vercel** (Frontend):
- Free tier: Unlimited bandwidth
- Auto-deploys from GitHub
- Perfect for React/Vite apps

**Railway** (Backend + AI + Database):
- $5/month credit (free tier)
- Supports Node.js, Python, PostgreSQL
- Simple deployment from GitHub

#### ☁️ Alternative: AWS Free Tier

- **EC2**: Free t2.micro instance for 12 months
- **RDS**: Free PostgreSQL database for 12 months
- More complex setup but most flexible

## Step 5: Update Environment Variables

After deployment, you'll need to update your environment variables with production values:

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://user:password@host:5432/database
JWT_SECRET=generate-a-strong-random-secret-at-least-32-characters
JWT_EXPIRES_IN=7d
CORS_ORIGIN=https://your-frontend-url.com
AI_SERVICE_URL=https://your-ai-service-url.com
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.com
VITE_AI_SERVICE_URL=https://your-ai-service-url.com
```

### AI Service (.env)
```env
PORT=8000
ALLOWED_ORIGINS=https://your-frontend-url.com,https://your-backend-url.com
```

## Step 6: Database Setup

1. Create a PostgreSQL database (most platforms offer this)
2. Run the schema:
   ```sql
   -- Copy the contents from backend/src/database/schema.sql
   -- Execute in your database management tool
   ```

## Step 7: Test Your Deployment

1. Test Backend API:
   ```bash
   curl https://your-backend-url.com/health
   ```

2. Test AI Service:
   ```bash
   curl https://your-ai-service-url.com/
   ```

3. Test Frontend:
   - Open `https://your-frontend-url.com` in browser
   - Try registering a user
   - Try adding a product
   - Try generating a report

## Quick Deployment Checklist

- [ ] Git installed
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Hosting platform chosen (Render/Vercel/AWS)
- [ ] Backend deployed with database
- [ ] AI service deployed
- [ ] Frontend deployed
- [ ] Environment variables configured
- [ ] CORS updated with production URLs
- [ ] Database schema initialized
- [ ] All services tested
- [ ] Domain connected (optional)

## Security Reminders for Production

1. **Change JWT_SECRET** to a strong random value
2. **Use HTTPS** for all services
3. **Enable rate limiting** in backend
4. **Set up monitoring** and error tracking
5. **Regular backups** of database
6. **Keep dependencies updated**
7. **Never commit .env files**

## Support Resources

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **GitHub Pages**: https://pages.github.com

---

## Need Help?

If you encounter issues:
1. Check service logs on your hosting platform
2. Verify environment variables are set correctly
3. Check CORS settings
4. Verify database connection string
5. Test API endpoints individually

---

**Ready to deploy?** Follow Step 1 to install Git, then proceed through the steps! 🚀
