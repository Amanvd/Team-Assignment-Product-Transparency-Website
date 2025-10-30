# Automated Setup Script for Product Transparency Website
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Product Transparency Website - Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check prerequisites
Write-Host "Checking prerequisites..." -ForegroundColor Yellow

# Check Node.js
try {
    $nodeVersion = node --version 2>$null
    Write-Host "Node.js installed: $nodeVersion" -ForegroundColor Green
}
catch {
    Write-Host "Node.js not found" -ForegroundColor Red
    exit 1
}

# Check Python
try {
    $pythonVersion = python --version 2>$null
    Write-Host "Python installed: $pythonVersion" -ForegroundColor Green
}
catch {
    Write-Host "Python not found" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Setting up Frontend..." -ForegroundColor Cyan

Set-Location frontend

if (Test-Path ".env") {
    Write-Host "Frontend .env file already exists" -ForegroundColor Green
}
else {
    Copy-Item .env.example .env
    Write-Host "Created frontend .env file" -ForegroundColor Green
}

Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
npm install

Set-Location ..

Write-Host ""
Write-Host "Setting up Backend..." -ForegroundColor Cyan

Set-Location backend

if (Test-Path ".env") {
    Write-Host "Backend .env file already exists" -ForegroundColor Green
}
else {
    Copy-Item .env.example .env
    Write-Host "Created backend .env file" -ForegroundColor Green
}

Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
npm install

Set-Location ..

Write-Host ""
Write-Host "Setting up AI Service..." -ForegroundColor Cyan

Set-Location ai-service

if (Test-Path ".env") {
    Write-Host "AI Service .env file already exists" -ForegroundColor Green
}
else {
    Copy-Item .env.example .env
    Write-Host "Created AI Service .env file" -ForegroundColor Green
}

Write-Host "Creating Python virtual environment..." -ForegroundColor Yellow
python -m venv venv

if (Test-Path "venv\Scripts\Activate.ps1") {
    Write-Host "Virtual environment created" -ForegroundColor Green
    
    Write-Host "Installing Python dependencies..." -ForegroundColor Yellow
    & venv\Scripts\python.exe -m pip install --upgrade pip
    & venv\Scripts\pip.exe install -r requirements.txt
}

Set-Location ..

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Start services in 3 terminals:" -ForegroundColor White
Write-Host "   cd frontend; npm run dev" -ForegroundColor Gray
Write-Host "   cd backend; npm run dev" -ForegroundColor Gray
Write-Host "   cd ai-service; .\venv\Scripts\Activate.ps1; python app.py" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Open http://localhost:3000" -ForegroundColor White
Write-Host ""
