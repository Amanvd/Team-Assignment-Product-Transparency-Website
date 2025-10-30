# 📦 GitHub Desktop Upload Guide

## Upload Your Project to GitHub (Easy Method!)

Since you have GitHub Desktop, follow these simple steps:

---

## **Step 1: Open GitHub Desktop**

1. Open **GitHub Desktop** application
2. Make sure you're **signed in** to your GitHub account
   - If not signed in: Go to **File → Options → Accounts → Sign in**

---

## **Step 2: Add Your Project to GitHub Desktop**

1. In GitHub Desktop, click **File → Add Local Repository**
2. Click **Choose...** button
3. Navigate to and select this folder:
   ```
   C:\Users\Aman chandra\OneDrive\Desktop\Team Assignment Product Transparency Website
   ```
4. Click **Add Repository**

**If you see "This directory does not appear to be a Git repository":**
   - Click **"create a repository"** link
   - Repository name: `product-transparency-platform`
   - Description: `Full-stack product transparency platform with AI-powered sustainability scoring`
   - ✅ Check "Initialize this repository with a README" (NO - uncheck this!)
   - Click **Create Repository**

---

## **Step 3: Review Your Files**

1. You should see all your project files in the **Changes** tab
2. GitHub Desktop will automatically select all files
3. Review the files to make sure everything looks correct

**Files that should be included:**
- ✅ All `.tsx`, `.ts`, `.py` files
- ✅ `package.json` files
- ✅ Configuration files (`tailwind.config.js`, `vite.config.ts`, etc.)
- ✅ Documentation files (README.md, etc.)

**Files that should NOT be included (automatically ignored):**
- ❌ `node_modules/` folders
- ❌ `venv/` folder
- ❌ `.env` files
- ❌ `dist/` or `build/` folders

---

## **Step 4: Make Your First Commit**

1. At the bottom left, you'll see:
   - **Summary** field (required)
   - **Description** field (optional)

2. Enter commit message:
   - **Summary**: `Initial commit: Product Transparency Platform`
   - **Description**: 
     ```
     - Full-stack application with React frontend
     - Node.js/Express backend with JWT authentication
     - Python FastAPI AI service for sustainability scoring
     - Responsive design for mobile, tablet, and desktop
     - Comprehensive security measures implemented
     ```

3. Click the blue **"Commit to main"** button

---

## **Step 5: Publish to GitHub**

1. After committing, you'll see a **"Publish repository"** button at the top
2. Click **"Publish repository"**
3. A dialog will appear:
   - **Name**: `product-transparency-platform` (you can change this)
   - **Description**: `Full-stack product transparency platform with AI-powered sustainability scoring`
   - **Keep this code private**: Choose whether you want it Public or Private
   - ⚠️ **IMPORTANT**: Make sure "Keep this code private" is UNCHECKED if you want it public
4. Click **"Publish Repository"**

---

## **Step 6: Verify Upload**

1. GitHub Desktop will show "Repository published successfully!"
2. Click **"View on GitHub"** button to open your repository in the browser
3. You should see all your files on GitHub!

---

## 🎯 **Next Steps: Make Your Website Live**

Now that your code is on GitHub, let's deploy it to the web!

### **Recommended: Render.com** (Free tier available)

1. **Go to https://render.com**
2. **Sign up with GitHub** (click "Sign in with GitHub")
3. **Authorize Render** to access your repositories
4. **Create 3 services** (instructions below)

---

## **Deploy Service 1: Backend API**

1. Click **"New +"** → **"Web Service"**
2. Select your `product-transparency-platform` repository
3. **Settings**:
   - **Name**: `product-transparency-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

4. **Add Environment Variables** (click "Advanced" then "Add Environment Variable"):
   ```
   JWT_SECRET = your-super-secret-key-minimum-32-characters-long
   PORT = 5000
   NODE_ENV = production
   ```

5. Click **"Create Web Service"**
6. ⏳ Wait for deployment (5-10 minutes)
7. **Copy the URL** (e.g., `https://product-transparency-backend.onrender.com`)

---

## **Deploy Service 2: AI Service**

1. Click **"New +"** → **"Web Service"**
2. Select your `product-transparency-platform` repository
3. **Settings**:
   - **Name**: `product-transparency-ai`
   - **Root Directory**: `ai-service`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app:app --host 0.0.0.0 --port 8000`
   - **Instance Type**: Free

4. **Add Environment Variables**:
   ```
   PORT = 8000
   ```

5. Click **"Create Web Service"**
6. ⏳ Wait for deployment (5-10 minutes)
7. **Copy the URL** (e.g., `https://product-transparency-ai.onrender.com`)

---

## **Deploy Service 3: Frontend**

1. Click **"New +"** → **"Static Site"**
2. Select your `product-transparency-platform` repository
3. **Settings**:
   - **Name**: `product-transparency-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

4. **Add Environment Variables**:
   ```
   VITE_API_URL = https://product-transparency-backend.onrender.com
   VITE_AI_SERVICE_URL = https://product-transparency-ai.onrender.com
   ```
   (Replace with YOUR actual backend and AI service URLs from above)

5. Click **"Create Static Site"**
6. ⏳ Wait for deployment (5-10 minutes)
7. **Copy the URL** (e.g., `https://product-transparency-frontend.onrender.com`)

---

## **Step 7: Update CORS Settings**

Now that your services are deployed, update CORS to allow communication:

### **Update Backend CORS** (`backend/src/index.ts`):

In GitHub Desktop:
1. Open the file `backend/src/index.ts`
2. Find the CORS configuration
3. Update to include your Render URLs:
   ```typescript
   app.use(cors({
     origin: [
       'http://localhost:3000',
       'http://localhost:3001',
       'https://product-transparency-frontend.onrender.com'  // Add this
     ],
     credentials: true
   }));
   ```

### **Update AI Service CORS** (`ai-service/app.py`):

1. Open the file `ai-service/app.py`
2. Find the CORS configuration
3. Update origins array:
   ```python
   origins = [
       "http://localhost:3000",
       "http://localhost:5000",
       "https://product-transparency-backend.onrender.com",  # Add this
       "https://product-transparency-frontend.onrender.com"  # Add this
   ]
   ```

### **Commit and Push Changes**:

1. In GitHub Desktop, you'll see the changed files
2. **Summary**: `Update CORS for production URLs`
3. Click **"Commit to main"**
4. Click **"Push origin"** button at the top

⏳ **Wait 2-3 minutes** for Render to automatically redeploy with the new changes

---

## **Step 8: Create Database**

1. In Render Dashboard, click **"New +"** → **"PostgreSQL"**
2. **Settings**:
   - **Name**: `product-transparency-db`
   - **Database**: `transparency_db`
   - **User**: (leave default)
   - **Instance Type**: Free
3. Click **"Create Database"**
4. **Copy the Internal Database URL**

### **Add Database to Backend**:

1. Go to your Backend service in Render
2. Click **"Environment"** tab
3. Add new environment variable:
   ```
   DATABASE_URL = [paste the Internal Database URL]
   ```
4. Click **"Save Changes"**
5. Service will automatically redeploy

### **Initialize Database Schema**:

1. In Render, go to your PostgreSQL database
2. Click **"Connect"** → **"External Connection"**
3. Use a database client (like DBeaver, pgAdmin, or online tool)
4. Run the SQL from `backend/src/database/schema.sql`

---

## 🎉 **Your Website is LIVE!**

Visit your frontend URL: `https://product-transparency-frontend.onrender.com`

### **Test Everything**:

✅ Homepage loads  
✅ Register a new user  
✅ Login works  
✅ Dashboard displays  
✅ Add a new product  
✅ Generate transparency report  
✅ View report with AI insights  

---

## 📱 **Share Your Project**

Your live website URL: `https://product-transparency-frontend.onrender.com`  
Your GitHub repository: `https://github.com/YOUR_USERNAME/product-transparency-platform`

---

## 🔧 **Troubleshooting**

### **Frontend shows "Cannot connect to server"**
- Check that backend URL in frontend environment variables is correct
- Verify backend service is deployed and running on Render

### **Backend API errors**
- Check environment variables are set correctly
- Verify database connection string
- Check Render logs for errors

### **CORS errors in browser console**
- Make sure you updated CORS settings in both backend and AI service
- Verify you committed and pushed the changes
- Wait for Render to redeploy (2-3 minutes)

### **AI Service not responding**
- Check Render logs for Python errors
- Verify dependencies installed correctly
- Test the AI service URL directly in browser

---

## 📊 **Monitor Your Services**

- **Render Dashboard**: https://dashboard.render.com
- View logs for each service
- Monitor deployment status
- Check resource usage

---

## 🚀 **Future Updates**

When you make changes to your code:

1. Make changes in VS Code
2. Open GitHub Desktop
3. It will automatically detect changes
4. Write commit message
5. Click **"Commit to main"**
6. Click **"Push origin"**
7. Render will automatically redeploy! ✨

---

## 💡 **Pro Tips**

- **Free Tier Limitations**: Render free tier services sleep after 15 minutes of inactivity. First request after sleep takes 30-60 seconds.
- **Custom Domain**: You can connect a custom domain in Render settings
- **HTTPS**: All Render deployments automatically have HTTPS
- **Monitoring**: Set up Render's monitoring and get email alerts for failures

---

**Need more help?** Check out:
- Render Documentation: https://render.com/docs
- GitHub Desktop Documentation: https://docs.github.com/en/desktop

---

Good luck with your deployment! 🎉
