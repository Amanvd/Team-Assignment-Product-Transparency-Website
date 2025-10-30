# 🏗️ Product Transparency Website - Complete Project Structure

```
Team Assignment Product Transparency Website/
│
├── 📄 README.md                    # Main project documentation
├── 📄 SETUP.md                     # Detailed setup instructions
├── 📄 API_TESTS.md                 # API testing examples
├── 📄 LICENSE                      # MIT License
├── 📄 .gitignore                   # Git ignore rules
├── 📜 setup.ps1                    # Automated setup script (PowerShell)
│
├── 📁 frontend/                    # React + TypeScript Frontend
│   ├── 📁 public/                  # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/          # Reusable components
│   │   │   ├── Layout.tsx          # Main layout wrapper
│   │   │   ├── Header.tsx          # Navigation header
│   │   │   └── Footer.tsx          # Footer component
│   │   │
│   │   ├── 📁 pages/               # Page components
│   │   │   ├── LandingPage.tsx     # Home page
│   │   │   ├── ProductForm.tsx     # Multi-step form
│   │   │   ├── ReportView.tsx      # Report display
│   │   │   ├── Dashboard.tsx       # User dashboard
│   │   │   ├── Login.tsx           # Login page
│   │   │   └── Register.tsx        # Registration page
│   │   │
│   │   ├── 📁 services/            # API service layer (to be added)
│   │   ├── 📁 hooks/               # Custom React hooks (to be added)
│   │   ├── 📁 utils/               # Utility functions (to be added)
│   │   ├── 📁 types/               # TypeScript types (to be added)
│   │   ├── App.tsx                 # Main app component
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Global styles
│   │
│   ├── 📄 package.json             # Dependencies & scripts
│   ├── 📄 tsconfig.json            # TypeScript config
│   ├── 📄 vite.config.ts           # Vite configuration
│   ├── 📄 tailwind.config.js       # Tailwind CSS config
│   ├── 📄 postcss.config.js        # PostCSS config
│   ├── 📄 index.html               # HTML template
│   ├── 📄 .env.example             # Environment template
│   └── 📄 .env                     # Environment variables (created on setup)
│
├── 📁 backend/                     # Node.js + Express Backend
│   ├── 📁 src/
│   │   ├── 📁 routes/              # API routes
│   │   │   ├── auth.ts             # Authentication routes
│   │   │   ├── products.ts         # Product CRUD routes
│   │   │   └── reports.ts          # Report generation routes
│   │   │
│   │   ├── 📁 controllers/         # Business logic (to be added)
│   │   ├── 📁 models/              # Data models (to be added)
│   │   ├── 📁 middleware/          # Express middleware (to be added)
│   │   ├── 📁 utils/               # Helper functions (to be added)
│   │   │
│   │   ├── 📁 database/            # Database files
│   │   │   ├── schema.sql          # Database schema
│   │   │   ├── migrate.ts          # Migration script (to be added)
│   │   │   └── seed.ts             # Seed data (to be added)
│   │   │
│   │   └── index.ts                # Server entry point
│   │
│   ├── 📄 package.json             # Dependencies & scripts
│   ├── 📄 tsconfig.json            # TypeScript config
│   ├── 📄 .env.example             # Environment template
│   └── 📄 .env                     # Environment variables (created on setup)
│
├── 📁 ai-service/                  # Flask/FastAPI AI Microservice
│   ├── 📁 models/                  # ML model files (to be added)
│   ├── 📁 services/                # AI service logic (to be added)
│   ├── 📁 utils/                   # Helper functions (to be added)
│   ├── 📁 tests/                   # Unit tests (to be added)
│   ├── 📁 venv/                    # Python virtual environment (created on setup)
│   ├── 📄 app.py                   # FastAPI application
│   ├── 📄 requirements.txt         # Python dependencies
│   ├── 📄 README.md                # AI service documentation
│   ├── 📄 .env.example             # Environment template
│   └── 📄 .env                     # Environment variables (created on setup)
│
└── 📁 design/                      # Design assets & documentation
    ├── 📁 figma/                   # Figma design files (to be added)
    ├── 📁 assets/                  # Design assets (to be added)
    │   ├── 📁 icons/               # Icon files
    │   ├── 📁 images/              # Image files
    │   └── 📁 logos/               # Logo files
    ├── 📁 prototypes/              # Interactive prototypes (to be added)
    └── 📄 README.md                # Design system documentation
```

---

## 📊 Component Overview

### Frontend (React + TypeScript)
- **Framework**: Vite + React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod
- **HTTP**: Axios

**Key Features:**
- Dynamic multi-step form with progress tracking
- Real-time form validation
- PDF report preview and download
- Responsive design (mobile-first)
- Authentication flow (login/register)

### Backend (Node.js + Express)
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT
- **PDF Generation**: PDFKit

**Key APIs:**
- `/api/auth/*` - Authentication endpoints
- `/api/products/*` - Product CRUD operations
- `/api/reports/*` - Report generation & PDF export

### AI Service (Python + FastAPI)
- **Framework**: FastAPI
- **Models**: BERT, T5, GPT (configurable)
- **Libraries**: Transformers, OpenAI SDK

**Key Features:**
- Dynamic question generation based on context
- Transparency score calculation
- Intelligent recommendations
- Multi-category support

### Database (PostgreSQL)
**Tables:**
- `users` - Company/user accounts
- `products` - Product information
- `questions` - Question bank
- `answers` - User responses
- `reports` - Generated reports

---

## 🔄 Data Flow

```
User (Browser)
    ↓
Frontend (React)
    ↓
Backend API (Express)
    ↓
    ├─→ PostgreSQL (Data Storage)
    └─→ AI Service (FastAPI)
            ↓
        NLP/LLM Models
```

---

## 🚀 Development Workflow

1. **Start Services** (3 terminals):
   ```powershell
   # Terminal 1: Frontend
   cd frontend
   npm run dev
   
   # Terminal 2: Backend
   cd backend
   npm run dev
   
   # Terminal 3: AI Service
   cd ai-service
   .\venv\Scripts\Activate.ps1
   python app.py
   ```

2. **Access Applications**:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000
   - AI Service: http://localhost:8000

3. **Make Changes**:
   - All services support hot-reload
   - Changes reflect immediately

---

## 📦 Tech Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React + TypeScript | User interface |
| Styling | Tailwind CSS | Responsive design |
| Backend | Node.js + Express | REST API |
| AI Service | Python + FastAPI | ML/NLP processing |
| Database | PostgreSQL | Data persistence |
| Auth | JWT | Secure authentication |
| PDF | PDFKit | Report generation |
| NLP | BERT/T5/GPT | Question generation |

---

## 🎯 Next Steps for Team

### Full Stack Developers
1. ✅ Complete database integration
2. ✅ Implement authentication middleware
3. ✅ Add data validation layers
4. ✅ Connect frontend to backend APIs
5. ✅ Implement error handling
6. ✅ Add loading states

### AI/ML Developers
1. ✅ Integrate actual LLM models
2. ✅ Fine-tune question generation
3. ✅ Implement scoring algorithms
4. ✅ Add model caching
5. ✅ Optimize response times

### UI/UX Designers
1. ✅ Create Figma designs
2. ✅ Export design assets
3. ✅ Document component library
4. ✅ Conduct usability testing
5. ✅ Refine user flows

---

## 📚 Additional Resources

- **Setup Guide**: See `SETUP.md`
- **API Documentation**: See `API_TESTS.md`
- **Design System**: See `design/README.md`
- **AI Service Docs**: See `ai-service/README.md`

---

**Project Status**: 🟢 Setup Complete - Ready for Development

**Version**: 1.0.0  
**Last Updated**: October 30, 2025  
**Team**: Altibbe | Hedamo
