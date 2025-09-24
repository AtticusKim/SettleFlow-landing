# Landing Page Design Brief

## Natural Gas Settlement Platform

### Design System Overview

Create a professional, modern landing page using our established design system from the frontend application.

### Technology Stack

- **Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Heroicons React 2.2.0
- **Utilities**: class-variance-authority, clsx

### Color Palette

#### Primary Brand Colors

- **Primary Blue**: `bg-brand-primary-600` (#2563eb) for CTAs
- **Primary Hover**: `bg-brand-primary-700` (#1d4ed8)
- **Primary Light**: `bg-brand-primary-50` (#eff6ff) for backgrounds

#### Neutral Grays

- **Text Primary**: `text-neutral-900` (#0a0a0a)
- **Text Secondary**: `text-neutral-600` (#404040)
- **Background**: `bg-neutral-50` (#fafafa)
- **Borders**: `border-neutral-200` (#e5e5e5)

#### Status Colors (for trust badges/features)

- **Success Green**: `bg-semantic-success-500` (#22c55e)
- **Info Blue**: `bg-semantic-info-500` (#3b82f6)

### Typography Scale

- **Hero Heading**: `text-4xl` (2.25rem) `font-bold`
- **Section Headings**: `text-2xl` (1.5rem) `font-bold`
- **Subheadings**: `text-xl` (1.25rem) `font-medium`
- **Body Text**: `text-base` (1rem) `font-normal`
- **Small Text**: `text-sm` (0.875rem)

### Layout & Spacing

- **Container**: `max-w-dashboard mx-auto` (1600px max)
- **Section Padding**: `py-16` or `py-20`
- **Content Padding**: `px-4` or `px-6`
- **Gap System**: Use `gap-4`, `gap-6`, `gap-8`, `gap-12`

### Components to Include

#### 1. Header/Navigation

```jsx
className = "bg-white border-b border-neutral-200 shadow-sm";
```

- Logo with ⚡ icon: `text-brand-primary-600`
- Navigation links: `text-neutral-600 hover:text-neutral-900`

#### 2. Hero Section

- Large headline with `text-4xl font-bold text-neutral-900`
- Subheading with `text-xl text-neutral-600`
- Primary CTA button: `btn-primary` class
- Hero background: `bg-gradient-to-br from-brand-primary-50 to-neutral-50`

#### 3. Feature Cards

```jsx
className = "card"; // Custom class: bg-white rounded-card shadow-card border
```

- Use `grid grid-cols-1 md:grid-cols-3 gap-6`
- Icons from Heroicons in `text-brand-primary-600`

#### 4. Trust/Stats Section

- Large numbers in `text-metric` (1.125rem, font-700)
- Status indicators using finance colors:
  - `status-reconciled` for success metrics
  - `bg-semantic-success-50` for backgrounds

#### 5. CTA Section

- Primary button: `btn-primary`
- Secondary button: `btn-secondary`

### Button Styles (Pre-defined)

```jsx
// Primary Button
className = "btn-primary";
// Renders: bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium py-2.5 px-4 rounded-button

// Secondary Button
className = "btn-secondary";
// Renders: bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium py-2.5 px-4 rounded-button
```

### Shadow System

- **Cards**: `shadow-card`
- **Hover Effects**: `shadow-card-hover`
- **Sections**: `shadow-sm`

### Brand Voice & Messaging

- **Industry**: Commodity Trading & Energy Finance
- **Tone**: Professional, Trustworthy, Efficient
- **Target**: Back-office settlement analysts, trading firms
- **Key Benefits**: Automation, Accuracy, Compliance

### Content Suggestions

- **Headline**: "Automate Natural Gas Settlement & Reconciliation"
- **Subheading**: "Transform manual invoice processing into streamlined, exception-based workflows"
- **Key Features**:
  - Automated Invoice Ingestion (OCR/AI-powered)
  - Intelligent Break Detection
  - Straight-Through Processing
  - Audit-Ready Documentation
  - 60% Time Reduction

### Responsive Breakpoints

- **Mobile**: `sm:` (640px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large**: `xl:` (1280px+)

### Animation Classes

- **Transitions**: `transition-colors duration-200`
- **Hover Effects**: `hover:shadow-card-hover`
- **Focus States**: `focus:outline-none focus:ring-2 focus:ring-brand-primary-500`

### Sample Component Structure

```jsx
// Hero Section Example
<section className="bg-gradient-to-br from-brand-primary-50 to-neutral-50 py-20">
  <div className="max-w-dashboard mx-auto px-6">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-neutral-900 mb-4">
        Automate Natural Gas Settlement
      </h1>
      <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
        Transform manual reconciliation into streamlined workflows
      </p>
      <button className="btn-primary">Get Started</button>
    </div>
  </div>
</section>
```

This design system ensures consistency with your existing application while creating a professional landing page that resonates with commodity trading professionals.
