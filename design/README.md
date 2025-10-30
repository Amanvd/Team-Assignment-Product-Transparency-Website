# Design Assets & Documentation

This folder contains all design-related deliverables for the Product Transparency Website.

## 📐 Figma Designs

### 1. Landing Page
- Hero section with clear value proposition
- Feature highlights
- Call-to-action buttons
- Social proof elements

### 2. Multi-Step Submission Form
- Progress indicator
- Dynamic question rendering
- Input validation feedback
- Mobile-responsive layout
- Accessibility features (ARIA labels, keyboard navigation)

### 3. Report Preview & Download
- Transparency score visualization
- Score breakdown charts
- Recommendations section
- PDF export functionality

## 🎨 Style Guide

### Color Palette

**Primary Colors:**
- Primary Blue: `#0ea5e9` (primary-500)
- Primary Dark: `#0369a1` (primary-700)
- Primary Light: `#e0f2fe` (primary-100)

**Secondary Colors:**
- Gray: `#6b7280` (gray-500)
- Success Green: `#10b981`
- Warning Orange: `#f59e0b`
- Error Red: `#ef4444`

**Neutral Colors:**
- White: `#ffffff`
- Gray 50: `#f9fafb`
- Gray 800: `#1f2937`
- Gray 900: `#111827`

### Typography

**Font Family:**
- Primary: Inter, system-ui, sans-serif
- Monospace: 'Fira Code', monospace

**Font Sizes:**
- Heading 1: 48px / 3rem (font-bold)
- Heading 2: 36px / 2.25rem (font-bold)
- Heading 3: 24px / 1.5rem (font-semibold)
- Body: 16px / 1rem (font-normal)
- Small: 14px / 0.875rem

### Spacing
- Base unit: 4px
- Common spacing: 8px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- Small: 4px
- Medium: 8px
- Large: 12px
- XL: 16px
- Full: 9999px (rounded-full)

## 🖼️ Component Library

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: #0ea5e9;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: #0ea5e9;
  border: 2px solid #0ea5e9;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
}
```

### Forms
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
}

.form-input:focus {
  outline: none;
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}
```

## ♿ Accessibility Guidelines

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Interactive elements have sufficient contrast

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states are clearly visible
- Logical tab order

### Screen Readers
- Proper ARIA labels for all interactive elements
- Semantic HTML structure
- Alt text for all images

### Form Accessibility
- Clear error messages
- Inline validation feedback
- Required field indicators
- Label associations

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
- Mobile: 0px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

/* Tailwind Breakpoints */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🎯 UX Requirements

### 1. Visual Feedback
- Loading states for all async operations
- Success/error messages after actions
- Hover states on all interactive elements
- Disabled states clearly indicated

### 2. Tooltips & Help Text
- Context-sensitive help icons
- Tooltips explain complex terms
- Examples for text inputs

### 3. Error Handling
- Friendly error messages
- Suggestions for fixing errors
- Never blame the user

### 4. Progressive Disclosure
- Show relevant information at the right time
- Hide complexity behind clear interactions
- Multi-step forms with progress indication

## 📦 Asset Exports

### Icons
- Format: SVG
- Size: 24x24px standard
- Stroke width: 2px
- Color: currentColor (inherits text color)

### Images
- Format: WebP (with PNG fallback)
- Optimization: Compressed for web
- Responsive: Multiple sizes for different viewports

### Logos
- Primary logo (full color)
- White version (for dark backgrounds)
- Icon only version
- Formats: SVG, PNG (multiple sizes)

## 🔗 Figma Links

**Main Design File:**
[Insert Figma link here]

**Prototype:**
[Insert Figma prototype link here]

**Component Library:**
[Insert component library link here]

---

**Design System Version:** 1.0.0
**Last Updated:** October 30, 2025
**Maintained by:** UI/UX Team
