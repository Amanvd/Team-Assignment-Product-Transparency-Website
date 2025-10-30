from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, List, Optional, Any
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Product Transparency AI Service")

# CORS configuration - Security: Only allow specific origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5000"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "Accept"],
    max_age=3600,
)

# Request/Response models
class QuestionGenerationRequest(BaseModel):
    product_category: str
    previous_answers: Dict[str, Any] = {}

class Question(BaseModel):
    id: str
    text: str
    type: str
    options: Optional[List[str]] = None
    required: bool = True

class QuestionGenerationResponse(BaseModel):
    questions: List[Question]

class TransparencyScoreRequest(BaseModel):
    product_data: Dict[str, Any]

class TransparencyScoreResponse(BaseModel):
    score: int
    breakdown: Dict[str, int]
    recommendations: List[str]


@app.get("/")
async def root():
    return {
        "service": "Product Transparency AI Service",
        "version": "1.0.0",
        "status": "operational"
    }


@app.post("/generate-questions", response_model=QuestionGenerationResponse)
async def generate_questions(request: QuestionGenerationRequest):
    """
    Generate dynamic follow-up questions based on product category and previous answers.
    Uses NLP/LLM to create contextually relevant questions.
    """
    try:
        # Input validation
        if not request.product_category or len(request.product_category) > 100:
            raise HTTPException(status_code=400, detail="Invalid product category")
        
        category = request.product_category.lower().strip()
        
        # TODO: Implement actual NLP/LLM-based question generation
        # This is a placeholder implementation
        questions = get_category_questions(category, request.previous_answers)
        
        return QuestionGenerationResponse(questions=questions)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to generate questions")


@app.post("/transparency-score", response_model=TransparencyScoreResponse)
async def calculate_transparency_score(request: TransparencyScoreRequest):
    """
    Calculate transparency score based on provided product data.
    """
    try:
        # Input validation
        if not request.product_data:
            raise HTTPException(status_code=400, detail="Product data is required")
        
        product_data = request.product_data
        
        # Calculate scores for different categories
        breakdown = {
            "ingredients": calculate_ingredient_score(product_data),
            "sourcing": calculate_sourcing_score(product_data),
            "certifications": calculate_certification_score(product_data),
            "environmental": calculate_environmental_score(product_data)
        }
        
        # Calculate total score (max 100)
        total_score = min(100, sum(breakdown.values()))
        
        # Generate recommendations
        recommendations = generate_recommendations(product_data, breakdown)
        
        return TransparencyScoreResponse(
            score=total_score,
            breakdown=breakdown,
            recommendations=recommendations
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to calculate transparency score")


def get_category_questions(category: str, previous_answers: Dict) -> List[Question]:
    """
    Generate questions based on product category.
    TODO: Replace with actual LLM-based question generation.
    """
    base_questions = []
    
    if category == "food":
        base_questions = [
            Question(
                id="ingredients",
                text="Please list all ingredients in your product",
                type="textarea",
                required=True
            ),
            Question(
                id="allergens",
                text="Does your product contain any allergens?",
                type="multi-select",
                options=["Nuts", "Dairy", "Gluten", "Soy", "Eggs", "Fish", "Shellfish"],
                required=True
            ),
            Question(
                id="certifications",
                text="What certifications does your product have?",
                type="multi-select",
                options=["Organic", "Fair Trade", "Non-GMO", "Kosher", "Halal"],
                required=False
            ),
            Question(
                id="sourcing",
                text="Where are your main ingredients sourced from?",
                type="textarea",
                required=True
            )
        ]
    elif category == "cosmetics":
        base_questions = [
            Question(
                id="ingredients",
                text="List all active and inactive ingredients",
                type="textarea",
                required=True
            ),
            Question(
                id="animal_testing",
                text="Is this product tested on animals?",
                type="select",
                options=["Yes", "No", "Not Sure"],
                required=True
            ),
            Question(
                id="vegan",
                text="Is this product vegan?",
                type="select",
                options=["Yes", "No", "Contains some animal-derived ingredients"],
                required=True
            )
        ]
    else:
        base_questions = [
            Question(
                id="materials",
                text="What materials is your product made from?",
                type="textarea",
                required=True
            ),
            Question(
                id="manufacturing",
                text="Where is your product manufactured?",
                type="text",
                required=True
            ),
            Question(
                id="sustainability",
                text="What sustainability practices do you follow?",
                type="textarea",
                required=False
            )
        ]
    
    return base_questions


def calculate_ingredient_score(data: Dict) -> int:
    """Calculate score for ingredient disclosure."""
    score = 0
    if data.get("ingredients_disclosed"):
        score += 20
    return score


def calculate_sourcing_score(data: Dict) -> int:
    """Calculate score for sourcing information."""
    score = 0
    if data.get("sourcing_info"):
        score += 25
    return score


def calculate_certification_score(data: Dict) -> int:
    """Calculate score for certifications."""
    certifications = data.get("certifications", [])
    return min(len(certifications) * 5, 20)


def calculate_environmental_score(data: Dict) -> int:
    """Calculate score for environmental impact."""
    impact = data.get("environmental_impact", "unknown")
    if impact == "low":
        return 20
    elif impact == "medium":
        return 10
    return 0


def generate_recommendations(data: Dict, breakdown: Dict[str, int]) -> List[str]:
    """Generate recommendations for improving transparency."""
    recommendations = []
    
    if breakdown["ingredients"] < 15:
        recommendations.append("Provide more detailed ingredient information")
    
    if breakdown["sourcing"] < 20:
        recommendations.append("Add supply chain transparency information")
    
    if breakdown["certifications"] < 15:
        recommendations.append("Consider obtaining relevant certifications")
    
    if breakdown["environmental"] < 15:
        recommendations.append("Include environmental impact data and carbon footprint")
    
    return recommendations


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
