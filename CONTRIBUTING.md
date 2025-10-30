# 🤝 Contributing to Product Transparency Website

Welcome to the team! This guide will help you get started with contributing to the project.

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Code Standards](#code-standards)
4. [Commit Guidelines](#commit-guidelines)
5. [Pull Request Process](#pull-request-process)
6. [Team Roles](#team-roles)

---

## 🚀 Getting Started

### Initial Setup

1. **Clone the repository**:
```bash
git clone <repository-url>
cd "Team Assignment Product Transparency Website"
```

2. **Run setup script**:
```powershell
.\setup.ps1
```

3. **Configure environment variables** in:
   - `frontend/.env`
   - `backend/.env`
   - `ai-service/.env`

4. **Create the database**:
```bash
createdb product_transparency
cd backend
npm run migrate
```

5. **Start development servers** (see SETUP.md)

---

## 🔄 Development Workflow

### Branch Strategy

```
main
  ├── develop
  │   ├── feature/user-authentication
  │   ├── feature/product-form
  │   ├── feature/ai-question-generation
  │   └── feature/pdf-reports
  └── hotfix/critical-bug
```

### Creating a Feature Branch

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/your-feature-name

# Example branches:
# feature/add-login-page
# feature/implement-scoring
# feature/dashboard-ui
# bugfix/fix-form-validation
```

### Working on Your Feature

1. **Make changes** to your code
2. **Test locally** - ensure all services run
3. **Commit frequently** with clear messages
4. **Push to remote** regularly

```bash
git add .
git commit -m "feat: add user authentication"
git push origin feature/your-feature-name
```

---

## 📝 Code Standards

### TypeScript/JavaScript (Frontend & Backend)

#### Naming Conventions
```typescript
// Components: PascalCase
const UserProfile = () => { }

// Functions: camelCase
const calculateScore = () => { }

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = "http://localhost:5000"

// Interfaces: PascalCase with 'I' prefix (optional)
interface IUser {
  id: string
  name: string
}
```

#### Code Style
- Use **TypeScript** for type safety
- Prefer **const** over let
- Use **arrow functions** for callbacks
- Add **JSDoc comments** for complex functions

```typescript
/**
 * Calculates transparency score based on product data
 * @param data - Product information object
 * @returns Transparency score (0-100)
 */
const calculateTransparencyScore = (data: ProductData): number => {
  // Implementation
}
```

### Python (AI Service)

#### Naming Conventions
```python
# Classes: PascalCase
class QuestionGenerator:
    pass

# Functions: snake_case
def generate_questions():
    pass

# Constants: UPPER_SNAKE_CASE
MAX_QUESTIONS = 10
```

#### Code Style
- Follow **PEP 8** style guide
- Use **type hints** for function parameters
- Add **docstrings** for all functions/classes

```python
def calculate_score(product_data: Dict[str, Any]) -> int:
    """
    Calculate transparency score for a product.
    
    Args:
        product_data: Dictionary containing product information
        
    Returns:
        Integer score between 0 and 100
    """
    # Implementation
```

### React Components

#### Component Structure
```typescript
import { FC } from 'react'

interface ButtonProps {
  text: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  )
}

export default Button
```

### CSS/Tailwind

- Use **Tailwind utility classes** first
- Create custom classes only when needed
- Follow **mobile-first** approach
- Use **semantic color names** from theme

```typescript
// ✅ Good
<div className="flex items-center justify-between p-4 bg-primary-600 text-white rounded-lg">

// ❌ Avoid
<div style={{ display: 'flex', padding: '16px', backgroundColor: '#0ea5e9' }}>
```

---

## 📦 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(auth): add JWT authentication

- Implement login endpoint
- Add token validation middleware
- Create refresh token logic

Closes #123

---

fix(form): resolve validation error on submit

The form was not properly validating email format

Fixes #456

---

docs(readme): update setup instructions

Add PostgreSQL installation steps for Windows

---

style(frontend): format code with prettier

---

refactor(ai): optimize question generation logic

Reduce API calls by 50%
```

### Commit Best Practices

- **One logical change per commit**
- **Present tense** ("add feature" not "added feature")
- **Imperative mood** ("move cursor to..." not "moves cursor to...")
- **Keep subject line under 50 characters**
- **Wrap body at 72 characters**
- **Reference issues** in footer

---

## 🔀 Pull Request Process

### Before Creating PR

1. ✅ **Update from develop**:
```bash
git checkout develop
git pull origin develop
git checkout your-feature-branch
git merge develop
```

2. ✅ **Test everything**:
```bash
# Frontend
cd frontend
npm test
npm run build

# Backend
cd backend
npm test
npm run build

# AI Service
cd ai-service
pytest
```

3. ✅ **Run linter**:
```bash
npm run lint
```

4. ✅ **Check for conflicts**

### Creating Pull Request

1. **Push your branch**:
```bash
git push origin feature/your-feature-name
```

2. **Open PR on GitHub/GitLab**

3. **Fill in PR template**:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing Done
- [ ] Tested locally
- [ ] Added unit tests
- [ ] Tested on multiple browsers
- [ ] Tested mobile responsive

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests
```

4. **Request reviewers**

5. **Address feedback**

6. **Wait for approval** (minimum 1 reviewer)

### PR Review Checklist

Reviewers should check:
- [ ] Code quality and readability
- [ ] Follows project conventions
- [ ] No security vulnerabilities
- [ ] Proper error handling
- [ ] Performance considerations
- [ ] Documentation updated
- [ ] Tests included

---

## 👥 Team Roles

### Full Stack Developers

**Focus Areas:**
- Frontend components and pages
- Backend API development
- Database integration
- Authentication system
- Testing and debugging

**Getting Started:**
1. Review `frontend/src/` structure
2. Check `backend/src/routes/` for API endpoints
3. Understand database schema in `backend/src/database/schema.sql`
4. Read API_TESTS.md for testing

### AI/ML Developers

**Focus Areas:**
- Question generation logic
- Transparency scoring algorithm
- Model integration (BERT/T5/GPT)
- AI service optimization

**Getting Started:**
1. Review `ai-service/app.py`
2. Read AI service README
3. Understand question generation flow
4. Plan model integration strategy

### UI/UX Designers

**Focus Areas:**
- Figma design creation
- Component design system
- User experience flows
- Accessibility compliance
- Asset creation

**Getting Started:**
1. Review `design/README.md`
2. Check existing components in `frontend/src/components/`
3. Review color palette and typography
4. Create Figma designs following style guide

---

## 🐛 Reporting Issues

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Node version: [e.g., 18.0.0]

**Additional context**
Any other context about the problem.
```

---

## 💡 Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Any other context or screenshots.
```

---

## 📞 Getting Help

- **Technical Questions**: Open a GitHub issue
- **Design Questions**: Tag UI/UX team members
- **AI/ML Questions**: Tag AI/ML team members
- **General Questions**: Post in team chat

---

## 🎉 Recognition

Contributors will be acknowledged in:
- README.md contributors section
- Project documentation
- Release notes

---

**Thank you for contributing to Product Transparency! 🙏**

Together, we're building a platform that promotes ethical, health-first decision-making through transparency.

---

**Document Version**: 1.0.0  
**Last Updated**: October 30, 2025  
**Maintained by**: Team Altibbe | Hedamo
