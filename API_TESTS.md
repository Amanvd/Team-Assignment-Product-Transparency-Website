# API Testing Collection for Product Transparency Website

This folder contains API test examples using curl and other tools.

## Backend API Tests

### Health Check
```bash
curl http://localhost:5000/health
```

### Authentication

#### Register New User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "companyName": "Test Company",
    "email": "test@example.com",
    "password": "password123"
  }'
```

#### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Products

#### Create Product
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "product_name": "Organic Granola",
    "category": "Food",
    "description": "Healthy organic granola with nuts and honey"
  }'
```

#### Get Product
```bash
curl http://localhost:5000/api/products/1
```

#### Get All Products
```bash
curl http://localhost:5000/api/products
```

### Reports

#### Get Report
```bash
curl http://localhost:5000/api/reports/1
```

#### Download PDF Report
```bash
curl http://localhost:5000/api/reports/1/pdf \
  -o report.pdf
```

---

## AI Service Tests

### Health Check
```bash
curl http://localhost:8000
```

### Generate Questions
```bash
curl -X POST http://localhost:8000/generate-questions \
  -H "Content-Type: application/json" \
  -d '{
    "product_category": "food",
    "previous_answers": {
      "product_name": "Organic Granola",
      "type": "packaged food"
    }
  }'
```

### Calculate Transparency Score
```bash
curl -X POST http://localhost:8000/transparency-score \
  -H "Content-Type: application/json" \
  -d '{
    "product_data": {
      "ingredients_disclosed": true,
      "sourcing_info": true,
      "certifications": ["organic", "fair-trade"],
      "environmental_impact": "low"
    }
  }'
```

---

## PowerShell Examples

### Health Check
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/health" -Method Get
```

### Register User
```powershell
$body = @{
    companyName = "Test Company"
    email = "test@example.com"
    password = "password123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

### Create Product
```powershell
$token = "YOUR_TOKEN_HERE"
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

$body = @{
    product_name = "Organic Granola"
    category = "Food"
    description = "Healthy organic granola"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/products" `
  -Method Post `
  -Headers $headers `
  -Body $body
```

---

## Import to Postman

1. Create a new Postman collection
2. Add these requests as examples
3. Set up environment variables:
   - `BASE_URL`: http://localhost:5000
   - `AI_URL`: http://localhost:8000
   - `TOKEN`: (set after login)

---

## Expected Response Codes

- `200 OK`: Successful GET request
- `201 Created`: Successful POST request (resource created)
- `400 Bad Request`: Validation error
- `401 Unauthorized`: Authentication required or failed
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error
