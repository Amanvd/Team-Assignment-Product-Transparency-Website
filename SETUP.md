# Product Transparency Website - Quick Start Guide

## 🚀 Quick Setup (All Services)

### Prerequisites Check
```powershell
# Check Node.js
node --version  # Should be 18+

# Check Python
python --version  # Should be 3.8+

# Check PostgreSQL
psql --version  # Should be 14+

# Check Git
git --version
```

### One-Command Setup (PowerShell)

Run this from the project root:

```powershell
# Install all dependencies and setup environment
.\setup.ps1
```

Or follow manual steps below:

---

## 📦 Manual Setup Steps

### 1. Frontend Setup

```powershell
cd frontend

# Install dependencies
npm install

# Create environment file
Copy-Item .env.example .env

# Edit .env with your configuration
notepad .env

# Start development server
npm run dev
```

Frontend will run on: **http://localhost:3000**

---

### 2. Backend Setup

```powershell
cd backend

# Install dependencies
npm install

# Create environment file
Copy-Item .env.example .env

# Edit .env file
notepad .env

# Create PostgreSQL database
createdb product_transparency

# Run migrations (after database setup)
npm run migrate

# Optional: Seed sample data
npm run seed

# Start development server
npm run dev
```

Backend will run on: **http://localhost:5000**

---

### 3. AI Service Setup

```powershell
cd ai-service

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows PowerShell:
.\venv\Scripts\Activate.ps1

# Or on CMD:
venv\Scripts\activate.bat

# Install dependencies
pip install -r requirements.txt

# Create environment file
Copy-Item .env.example .env

# Edit .env file (add OpenAI key if using GPT)
notepad .env

# Start service
python app.py

# Or with uvicorn
uvicorn app:app --reload --port 8000
```

AI Service will run on: **http://localhost:8000**

---

## 🗄️ Database Setup

### Create PostgreSQL Database

```powershell
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE product_transparency;

# Create user (optional)
CREATE USER pt_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE product_transparency TO pt_user;

# Exit psql
\q
```

### Run Schema

```powershell
cd backend
psql -U postgres -d product_transparency -f src/database/schema.sql
```

---

## ✅ Verify Setup

### Test Frontend
Open browser: http://localhost:3000

### Test Backend API
```powershell
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Product Transparency API is running"
}
```

### Test AI Service
```powershell
curl http://localhost:8000
```

Expected response:
```json
{
  "service": "Product Transparency AI Service",
  "version": "1.0.0",
  "status": "operational"
}
```

---

## 🔧 Common Issues & Solutions

### Port Already in Use

**Frontend (3000):**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

**Backend (5000):**
```powershell
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**AI Service (8000):**
```powershell
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### PostgreSQL Connection Issues

1. Check if PostgreSQL service is running:
```powershell
Get-Service postgresql*
```

2. Start service if stopped:
```powershell
Start-Service postgresql-x64-14  # Adjust version number
```

3. Verify connection string in `backend/.env`:
```
DATABASE_URL=postgresql://username:password@localhost:5432/product_transparency
```

### Python Virtual Environment Issues

If activation fails:
```powershell
# Set execution policy (run as Administrator)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then try activating again
.\venv\Scripts\Activate.ps1
```

### Node Modules Issues

```powershell
# Clear npm cache and reinstall
npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## 🧪 Running Tests

### Frontend Tests
```powershell
cd frontend
npm test
```

### Backend Tests
```powershell
cd backend
npm test
```

### AI Service Tests
```powershell
cd ai-service
pytest
```

---

## 🏗️ Build for Production

### Frontend
```powershell
cd frontend
npm run build
```
Output: `frontend/dist/`

### Backend
```powershell
cd backend
npm run build
```
Output: `backend/dist/`

---

## 📝 Development Workflow

1. **Start all services** in separate terminal windows:
   - Terminal 1: `cd frontend && npm run dev`
   - Terminal 2: `cd backend && npm run dev`
   - Terminal 3: `cd ai-service && python app.py`

2. **Make changes** to your code

3. **Services auto-reload** on file changes

4. **Test your changes** at http://localhost:3000

---

## 🌐 Environment Variables Reference

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
VITE_AI_SERVICE_URL=http://localhost:8000
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://postgres:password@localhost:5432/product_transparency
JWT_SECRET=your-secret-key-change-this
JWT_EXPIRES_IN=7d
AI_SERVICE_URL=http://localhost:8000
CORS_ORIGIN=http://localhost:3000
```

### AI Service (.env)
```env
PORT=8000
FLASK_ENV=development
OPENAI_API_KEY=sk-your-key-here
MODEL_NAME=gpt-3.5-turbo
USE_LOCAL_MODEL=false
CORS_ORIGIN=http://localhost:5000,http://localhost:3000
```

---

## 🆘 Getting Help

- Check the main **README.md** for detailed documentation
- Review **API documentation** in each service's README
- Check **design/README.md** for UI/UX guidelines
- Open an issue on the project repository

---

**Happy Coding! 🎉**
