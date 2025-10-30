# Prepare Project for GitHub Upload
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Product Transparency Platform      " -ForegroundColor Cyan
Write-Host "   GitHub Preparation Script          " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "Success: Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "Error: Git is NOT installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git first:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://git-scm.com/download/win"
    Write-Host "2. Run installer with default settings"
    Write-Host "3. Restart VS Code"
    Write-Host "4. Run this script again"
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "To upload to GitHub, follow these steps:" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Step 1: Create GitHub Repository" -ForegroundColor Green
Write-Host "  1. Go to https://github.com/new"
Write-Host "  2. Repository name: product-transparency-platform"
Write-Host "  3. Description: Full-stack product transparency platform"
Write-Host "  4. Choose Public or Private"
Write-Host "  5. DO NOT initialize with README"
Write-Host "  6. Click 'Create repository'"
Write-Host ""
Write-Host "Step 2: Run these commands:" -ForegroundColor Green
Write-Host "  git init"
Write-Host "  git add ."
Write-Host '  git commit -m "Initial commit"'
Write-Host "  git branch -M main"
Write-Host "  git remote add origin YOUR_REPO_URL"
Write-Host "  git push -u origin main"
Write-Host ""
Write-Host "Replace YOUR_REPO_URL with the URL from GitHub" -ForegroundColor Yellow
Write-Host ""
