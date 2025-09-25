# SettleFlow Landing Page

A professional landing page for SettleFlow - a natural gas settlement and reconciliation platform designed for commodity trading firms.

## 🎯 Overview

This landing page showcases SettleFlow's automated settlement platform, featuring:
- Clean, professional design inspired by Harvey.ai and Wealthsimple
- Interactive demo request form with backend integration
- SOC2 compliance and privacy messaging
- Responsive design optimized for all devices

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **JSON file storage** - Simple data persistence

## 🏗️ Architecture

```
settlement_landing/
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles + Tailwind
├── server/
│   ├── server.js        # Express backend
│   ├── package.json     # Backend dependencies
│   └── demo-requests.json # Data storage (auto-created)
├── public/              # Static assets
├── package.json         # Frontend dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite + proxy configuration
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation & Setup

1. **Clone and navigate to the project**
   ```bash
   cd settlement_landing
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   Backend runs on http://localhost:3001

5. **Start the frontend (in a new terminal)**
   ```bash
   npm run dev
   ```
   Frontend runs on http://localhost:5173

## 📋 Features

### Landing Page Sections

1. **Hero Section**
   - Clean typography with light/medium font weights
   - Primary CTA: "Request Demo" (opens form modal)
   - Secondary CTA: "Contact Us"

2. **Platform Demo**
   - Video placeholder with play button
   - Professional design with subtle shadows

3. **Core Capabilities**
   - 6 feature cards in responsive grid
   - Icons from Heroicons
   - Focus on automation and compliance

4. **Measurable Impact**
   - Statistics display (95% error reduction, etc.)
   - Side-by-side layout with benefits list

5. **Call-to-Action**
   - Dark section with contrast
   - Dual CTA buttons

6. **Footer**
   - Clean white footer
   - Organized links and contact info

### Demo Request Form

**Fields:**
- Full Name (required)
- Email Address (required, validated)
- Company (required)
- Phone Number (optional)
- Settlement Operations Message (optional)

**Features:**
- Real-time validation
- Loading states
- Success/error feedback
- Professional modal design
- Form data saved to backend

## 🎨 Design System

### Colors
- **Primary**: Neutral blacks/grays for professional look
- **Backgrounds**: White and neutral-25 (#fcfcfc)
- **Text**: Hierarchical neutral tones (900, 500, 400)
- **Accents**: Minimal use of semantic colors

### Typography
- **Font**: System font stack (clean, readable)
- **Hero**: text-5xl/6xl, font-light with font-medium accents
- **Sections**: text-3xl, font-light
- **Body**: text-lg, leading-relaxed
- **Cards**: text-lg, font-medium

### Components
- **Buttons**: Rounded, subtle shadows, smooth transitions
- **Cards**: White background, border-neutral-100, minimal shadows
- **Form**: Clean inputs with focus states
- **Modal**: Overlay with backdrop blur

### Responsive Breakpoints
- Mobile: Default (< 640px)
- Tablet: md: (768px+)
- Desktop: lg: (1024px+)
- Large: xl: (1280px+)

## 🔧 API Endpoints

### Backend Server (Port 3001)

#### POST `/api/demo-request`
Submit a new demo request
```json
{
  "name": "John Smith",
  "email": "john@company.com",
  "company": "Trading Corp",
  "phone": "+1-555-0123",
  "message": "We process 500 invoices monthly..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Demo request submitted successfully",
  "id": 1640995200000
}
```

#### GET `/api/demo-requests`
Retrieve all demo requests
```json
{
  "success": true,
  "count": 5,
  "requests": [
    {
      "id": 1640995200000,
      "timestamp": "2024-01-01T12:00:00.000Z",
      "name": "John Smith",
      "email": "john@company.com",
      "company": "Trading Corp",
      "phone": "+1-555-0123",
      "message": "We process 500 invoices monthly..."
    }
  ]
}
```

#### GET `/health`
Health check endpoint
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 📁 Data Storage

Demo requests are stored in `server/demo-requests.json`:
- Auto-created on first request
- JSON array format
- Includes timestamp and unique ID
- Sorted by most recent first

## 🔒 Security Features

### Data Validation
- Required field validation
- Email format validation
- Input sanitization (trim, lowercase email)

### Error Handling
- Try/catch blocks
- Proper HTTP status codes
- User-friendly error messages
- Server error logging

## 🚀 Deployment

### Frontend (Vite Build)
```bash
npm run build
# Outputs to dist/ folder
```

### Backend (Node.js)
```bash
cd server
npm start
# Or with PM2 for production:
pm2 start server.js --name settleflow-api
```

### Environment Variables
```bash
# Backend
PORT=3001

# Frontend (for production)
VITE_API_URL=https://your-api-domain.com
```

## 🧪 Development

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start with nodemon (auto-reload)

### Code Style
- Clean, readable components
- Semantic HTML structure
- Accessible form labels
- Professional error handling

## 📊 Performance

### Optimization Features
- Vite's fast hot module replacement
- Tailwind CSS purging (production)
- Minimal JavaScript bundle
- Optimized images and assets
- Proper semantic HTML

### Loading Performance
- Fast initial page load
- Smooth form interactions
- Optimized re-renders with React hooks

## 🤝 Contributing

1. Follow existing code style
2. Test form submissions thoroughly
3. Ensure responsive design works
4. Update documentation for new features

## 📄 License

Private - SettleFlow Landing Page
© 2024 SettleFlow. All rights reserved.

## 📞 Support

For technical questions or issues:
- Check the `/health` endpoint for backend status
- Review browser console for frontend errors
- Verify API proxy configuration in `vite.config.js`

---

**Built with ❤️ for commodity trading professionals**