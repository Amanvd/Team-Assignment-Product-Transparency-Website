# AI Service - Advanced Question Generation

This module contains the AI/ML logic for dynamic question generation using NLP/LLM models.

## Implemented Features

### 1. Dynamic Question Generation
Currently uses rule-based approach. To upgrade to LLM:

```python
# Example: Using OpenAI GPT
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_questions_with_gpt(category, previous_answers):
    prompt = f"""
    Generate 3-5 follow-up questions for a {category} product.
    Previous answers: {previous_answers}
    
    Return questions in JSON format:
    [
        {{"id": "q1", "text": "question text", "type": "text|select|multi-select", "required": true}}
    ]
    """
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    
    return parse_questions(response.choices[0].message.content)
```

### 2. Transparency Score Calculation
Multi-factor scoring based on:
- Ingredient disclosure (0-20 points)
- Sourcing information (0-25 points)
- Certifications (0-20 points)
- Environmental impact (0-20 points)

### 3. Intelligent Recommendations
Context-aware suggestions for improving transparency scores.

## Future Enhancements

1. **BERT/T5 Integration**: For semantic understanding of answers
2. **Fine-tuned Models**: Train on domain-specific product data
3. **Multi-language Support**: Questions in multiple languages
4. **Advanced Scoring**: ML-based scoring models

## Usage

```bash
# Install dependencies
pip install -r requirements.txt

# Run service
python app.py

# Or with uvicorn
uvicorn app:app --reload --port 8000
```

## API Endpoints

### POST /generate-questions
Generate dynamic follow-up questions

**Request:**
```json
{
  "product_category": "food",
  "previous_answers": {
    "product_name": "Organic Granola"
  }
}
```

### POST /transparency-score
Calculate transparency score

**Request:**
```json
{
  "product_data": {
    "ingredients_disclosed": true,
    "sourcing_info": true,
    "certifications": ["organic"],
    "environmental_impact": "low"
  }
}
```
