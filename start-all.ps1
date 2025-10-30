# Product Transparency Website - Start All Services
Write-Host "🚀 Starting Product Transparency Website..." -ForegroundColor Cyan
Write-Host ""

# Function to check if port is available
function Test-Port {
    param($Port)
    $connection = Test-NetConnection -ComputerName localhost -Port $Port -WarningAction SilentlyContinue
    return $connection.TcpTestSucceeded
}

# Kill existing processes on ports
Write-Host "🧹 Cleaning up existing processes..." -ForegroundColor Yellow
$ports = @(3000, 5000, 8000)
foreach ($port in $ports) {
    $process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
    if ($process) {
        Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
        Write-Host "  ✓ Stopped process on port $port" -ForegroundColor Green
    }
}
Start-Sleep -Seconds 2

# Start AI Service
Write-Host ""
Write-Host "🤖 Starting AI Service (Port 8000)..." -ForegroundColor Magenta
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\ai-service'; .\venv\Scripts\Activate.ps1; python app.py"
Start-Sleep -Seconds 3

# Start Backend
Write-Host "⚙️  Starting Backend (Port 5000)..." -ForegroundColor Blue
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; npm run dev"
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "🎨 Starting Frontend (Port 3000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; npm run dev"
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "✅ All services started!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Access your application at:" -ForegroundColor Cyan
Write-Host "   Frontend:  http://localhost:3000" -ForegroundColor White
Write-Host "   Backend:   http://localhost:5000" -ForegroundColor White
Write-Host "   AI Service: http://localhost:8000" -ForegroundColor White
Write-Host ""
Write-Host "🛑 To stop all services, close all PowerShell windows" -ForegroundColor Yellow
Write-Host ""
