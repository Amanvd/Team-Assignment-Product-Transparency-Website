#!/usr/bin/env pwsh
# Quick Service Status Check

Write-Host "`n🔍 Checking Service Status...`n" -ForegroundColor Cyan

function Test-ServicePort {
    param($Port, $Name)
    try {
        $connection = Test-NetConnection -ComputerName localhost -Port $Port -WarningAction SilentlyContinue -InformationLevel Quiet
        if ($connection) {
            Write-Host "✅ $Name is running on port $Port" -ForegroundColor Green
            return $true
        } else {
            Write-Host "❌ $Name is NOT running on port $Port" -ForegroundColor Red
            return $false
        }
    } catch {
        Write-Host "❌ $Name is NOT running on port $Port" -ForegroundColor Red
        return $false
    }
}

$frontend = Test-ServicePort 3001 "Frontend (Vite)"
$backend = Test-ServicePort 5000 "Backend (Express)"
$ai = Test-ServicePort 8000 "AI Service (FastAPI)"

Write-Host "`n📊 Service URLs:" -ForegroundColor Cyan
if ($frontend) { Write-Host "   🎨 Frontend:  http://localhost:3001" -ForegroundColor White }
if ($backend) { Write-Host "   ⚙️  Backend:   http://localhost:5000/health" -ForegroundColor White }
if ($ai) { Write-Host "   🤖 AI Service: http://localhost:8000" -ForegroundColor White }

Write-Host ""

if ($frontend -and $backend -and $ai) {
    Write-Host "🎉 All services are running!" -ForegroundColor Green
    Write-Host "`n🌐 Open your browser and visit: http://localhost:3001`n" -ForegroundColor Cyan
} else {
    Write-Host "⚠️  Some services are not running. Please check the logs.`n" -ForegroundColor Yellow
}
