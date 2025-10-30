# 🌿 Product Transparency Platform

A full-stack web application that empowers consumers to make informed purchasing decisions through comprehensive product sustainability and sourcing transparency.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://product-transparency-platform.vercel.app)
[![GitHub](https://img.shields.io/badge/github-repository-blue.svg)](https://github.com/YOUR_USERNAME/product-transparency-platform)

---

## 📋 Quick Navigation

- [Features](#-features)
- [Setup Instructions](#-setup-instructions)
- [AI Service](#-ai-service-documentation)
- [Sample Product](#-sample-product-example)
- [Reflection](#-development-reflection)

---


## ✨ Features

### 🔐 User Authentication
- Secure registration and login with JWT tokens
- Password hashing with bcrypt
- Protected routes and session management

### 📦 Product Management
- Add products with detailed information
- View all products in organized dashboard
- Search and filter capabilities
- Real-time updates

### 📊 Transparency Reports
- Generate comprehensive sustainability reports
- Visual analytics and score breakdowns
- PDF export functionality
- Shareable report links

### 🤖 AI-Powered Analysis
- Smart question generation based on product category
- Automated sustainability scoring across 4 dimensions:
  - Environmental Impact (25%)
  - Supply Chain Transparency (25%)
  - Ethical Practices (25%)
  - Certifications & Compliance (25%)
- AI-generated insights and recommendations

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interfaces
- Fast loading with optimized assets

### 🔒 Security
- Input validation (client + server side)
- XSS and CORS protection
- Request size limits and timeouts
- Error sanitization

---


## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))
- Python 3.9+ ([Download](https://python.org/))
- PostgreSQL 14+ ([Download](https://postgresql.org/))
- Git ([Download](https://git-scm.com/))

### Quick Start

**1. Clone Repository**
```bash
git clone https://github.com/YOUR_USERNAME/product-transparency-platform.git
cd product-transparency-platform
```

**2. Setup Backend**
```bash
cd backend
npm install
npm run build

# Create .env file:
# DATABASE_URL=postgresql://user:password@localhost:5432/transparency_db
# JWT_SECRET=your-secret-key-min-32-chars
# PORT=5000

npm start  # Runs on http://localhost:5000
```

**3. Setup Database**
```bash
createdb transparency_db
psql -d transparency_db -f backend/src/database/schema.sql
```

**4. Setup AI Service**
```bash
cd ai-service
python -m venv venv
.\venv\Scripts\Activate.ps1  # Windows
# source venv/bin/activate    # Mac/Linux

pip install -r requirements.txt

# Create .env file:
# PORT=8000

python app.py  # Runs on http://localhost:8000
```

**5. Setup Frontend**
```bash
cd frontend
npm install

# Create .env file:
# VITE_API_URL=http://localhost:5000
# VITE_AI_SERVICE_URL=http://localhost:8000

npm run dev  # Runs on http://localhost:3001
```

**6. Quick Start All Services (Windows)**
```powershell
.\start-all.ps1  # Starts all 3 services in separate windows
```

### Verify Installation
- Frontend: http://localhost:3001
- Backend: http://localhost:5000/health
- AI Service: http://localhost:8000

---


## 🤖 AI Service Documentation

### Overview
FastAPI-based microservice that provides intelligent product analysis and sustainability scoring using rule-based algorithms.

### API Endpoints

#### 1. Health Check
```http
GET /
Response: {"service": "Product Transparency AI Service", "status": "operational"}
```

#### 2. Generate Questions
```http
POST /generate-questions
Content-Type: application/json

Request:
{
  "category": "Electronics",
  "productName": "Smartphone X"
}

Response:
{
  "questions": [
    "What is the energy efficiency rating?",
    "What materials are used in manufacturing?",
    "What is your e-waste management policy?",
    "Do you have any environmental certifications?",
    "What is the product's carbon footprint?"
  ]
}
```

**Supported Categories:** Electronics, Food & Beverages, Clothing, Beauty & Personal Care, Home & Garden, Automotive, Other

#### 3. Calculate Transparency Score
```http
POST /calculate-score
Content-Type: application/json

Request:
{
  "answers": {
    "environment": "We use 80% renewable energy",
    "supply_chain": "Fully transparent tier 1-3 suppliers",
    "ethics": "Fair Trade certified",
    "certifications": "ISO 14001, B Corp"
  }
}

Response:
{
  "overall_score": 85,
  "breakdown": {
    "environment": 22,
    "supply_chain": 21,
    "ethics": 23,
    "certifications": 19
  },
  "grade": "B+",
  "insights": [
    "Strong environmental practices with renewable energy use",
    "Excellent supply chain transparency",
    "Outstanding ethical practices with Fair Trade certification"
  ]
}
```

### Scoring Methodology

Each category scored out of 25 points:

1. **Environmental Impact (25%)**: Energy efficiency, renewable energy, carbon footprint, waste management
2. **Supply Chain Transparency (25%)**: Supplier disclosure, traceability, sourcing practices
3. **Ethical Practices (25%)**: Labor conditions, Fair Trade, community impact
4. **Certifications (25%)**: Industry certifications, sustainability standards, third-party audits

**Grading Scale:**
- A+ (95-100): Exceptional | A (90-94): Outstanding
- B+ (85-89): Very Good | B (80-84): Good
- C+ (75-79): Satisfactory | C (70-74): Adequate
- D (60-69): Limited | F (<60): Poor

### Algorithm
- **Rule-Based Question Generation**: Category-specific questions
- **Keyword-Based Scoring**: Analyzes text for sustainability indicators
- **Insight Generation**: Identifies strengths and provides recommendations

---


## 📦 Sample Product Example

### Product: EcoSmart LED Bulb

**Basic Information:**
- Category: Electronics
- Manufacturer: GreenTech Solutions
- Description: Energy-efficient LED bulb with 80% less energy consumption, made from 60% recycled materials, 15-year lifespan

**Transparency Data:**

```json
{
  "sourcing": {
    "origin": "Netherlands",
    "materials": ["Recycled aluminum (60%)", "LED chips (Taiwan)", "Glass components"],
    "suppliers": [
      {"name": "Dutch Metal Recyclers", "location": "Amsterdam", "cert": "ISO 14001"},
      {"name": "Taiwan LED Tech", "location": "Taipei", "cert": "RoHS Compliant"}
    ]
  },
  "sustainability": {
    "carbon_footprint": "2.5 kg CO2e per unit",
    "energy_rating": "A++",
    "renewable_energy": "100% manufacturing",
    "recyclability": "95%",
    "lifespan": "15,000 hours"
  },
  "ethics": {
    "labor": "Fair Trade Certified",
    "standards": "ILO compliant",
    "community": "3% profits to renewable education"
  },
  "certifications": ["Energy Star", "ISO 14001", "Fair Trade", "B Corp", "RoHS"]
}
```

### Generated Transparency Report

**Overall Score: 92/100 (Grade A)**

**Score Breakdown:**
- 🌍 Environmental Impact: 24/25 ⭐⭐⭐⭐⭐
- 🔗 Supply Chain: 23/25 ⭐⭐⭐⭐⭐
- 🤝 Ethical Practices: 23/25 ⭐⭐⭐⭐⭐
- 📜 Certifications: 22/25 ⭐⭐⭐⭐⭐

**AI Insights:**

✅ **Strengths:**
- Outstanding A++ energy rating (top 10% in category)
- 100% renewable energy in manufacturing
- Comprehensive supplier transparency
- Strong certifications including B Corp status

⚠️ **Improvement Areas:**
- Consider publishing Scope 3 emissions data
- Expand supplier audits to tier 2-3
- Add water usage metrics
- Implement product take-back program

---


## 💭 Development Reflection

### How We Used AI Tools in Development

AI tools (GitHub Copilot and ChatGPT) significantly accelerated our development process. We used AI for code generation, particularly for repetitive patterns like API routes, database schemas, and React components, which allowed us to focus on business logic rather than boilerplate. AI proved invaluable for debugging, helping us quickly resolve TypeScript errors, CORS issues, and JWT token handling problems. Security best practices were suggested by AI, including input validation with Zod schemas, bcrypt password hashing, and proper CORS configurations. AI also assisted in generating comprehensive documentation and implementing responsive design with Tailwind CSS breakpoints. Rather than replacing development skills, AI acted as an intelligent pair programmer, offering suggestions that we evaluated and customized for our specific needs.

### Architecture & Design Principles

Our architecture follows a **microservices-inspired design** with three independent services (Frontend, Backend, AI Service), enabling independent scaling and technology flexibility. We adopted a **security-first approach**, implementing JWT authentication, input validation at multiple layers, and CORS protection from the start. The **user-centric design** principle guided our product transparency logic, breaking complex data entry into a multi-step form and providing clear visual score breakdowns with actionable insights. Our **transparency scoring system** is built on four equally-weighted pillars (Environmental Impact, Supply Chain, Ethics, Certifications) because we believe true transparency requires balance across all dimensions. We designed for **scalability** using stateless services, async operations, and optimized database queries. Finally, the **progressive enhancement** principle ensures core functionality remains available even if one service is down, with appropriate fallbacks and error handling throughout the system.

---

## 🌐 Quick Deploy to Vercel (FREE)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com/signup) → Sign in with GitHub
3. Import your repository
4. Configure:
   - **Frontend**: Root=`frontend`, Build=`npm run build`, Output=`dist`
   - **Backend**: Root=`backend`, Build=`npm run build`
   - **AI Service**: Root=`ai-service`, Build=`pip install -r requirements.txt`
5. Add environment variables (see `QUICK_DEPLOY.md`)
6. Deploy! 🚀

---

## 📄 Tech Stack

**Frontend:** React 18 + TypeScript + Vite + Tailwind CSS  
**Backend:** Node.js + Express + TypeScript + PostgreSQL + JWT  
**AI Service:** Python + FastAPI + Uvicorn  
**Deployment:** Vercel (Free tier)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

---

##  Support

- **Issues**: [GitHub Issues](https://github.com/YOUR_USERNAME/product-transparency-platform/issues)
- **Documentation**: See `QUICK_DEPLOY.md`, `VERCEL_DEPLOYMENT.md`, `SECURITY.md`

---

<div align="center">

**Made with ❤️ for a more transparent world**

⭐ Star this repo if you find it helpful! ⭐

[Live Demo](https://product-transparency-platform.vercel.app) • [GitHub](https://github.com/YOUR_USERNAME/product-transparency-platform)

</div>
