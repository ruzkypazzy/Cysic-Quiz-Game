# Cysic Knowledge Challenge Quiz Application

## Overview

This is a web-based interactive quiz application focused on testing users' knowledge about Cysic, zero-knowledge hardware acceleration, and ComputeFi technology. The application presents users with randomized multiple-choice questions and provides immediate visual feedback, scoring, and results.

The project is built as a full-stack TypeScript application with a React frontend and Express backend, designed to run on the Replit platform with built-in development tooling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**UI Component System**: shadcn/ui component library built on Radix UI primitives
- Provides accessible, customizable components (buttons, cards, dialogs, etc.)
- Styled with Tailwind CSS using a custom design system
- Component aliases configured for clean imports (`@/components`, `@/lib`, etc.)

**Routing**: wouter - lightweight client-side routing library
- Single-page application with route-based navigation
- Currently implements a single quiz page route

**State Management**: 
- React Query (@tanstack/react-query) for server state management
- Local React state (useState, useEffect) for quiz interaction logic
- Custom hooks for responsive behavior (useIsMobile, useToast)

**Styling Strategy**:
- Tailwind CSS with custom configuration
- Design system inspired by cyberpunk/tech aesthetics (Orbitron, Inter, JetBrains Mono fonts)
- Dark mode support with CSS variables for theming
- Custom color palette for blockchain/tech visual language
- Glassmorphic design patterns for cards and overlays

**Quiz Logic Design**:
- Question pool of 20 questions stored in-memory
- 5 questions randomly selected per quiz session
- Immediate answer validation with visual feedback
- Score tracking and results display
- Canvas-based badge/certificate generation (referenced but implementation incomplete)

### Backend Architecture

**Runtime**: Node.js with TypeScript

**Server Framework**: Express.js
- RESTful API structure (routes prefixed with `/api`)
- JSON request/response handling
- Request logging middleware with response capture
- Development mode with Vite integration for HMR

**Data Layer Design**:
- Storage abstraction interface (IStorage) for CRUD operations
- In-memory storage implementation (MemStorage) for development
- Database schema defined with Drizzle ORM for future PostgreSQL integration
- User model with username/password fields (authentication not yet implemented)

**Development Server**:
- Vite dev server integrated in middleware mode
- Hot module replacement (HMR) support
- Static file serving for production builds
- Custom error handling and logging

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Map
- User data stored in memory (volatile, resets on restart)
- Suitable for development and prototyping

**Planned Database**: PostgreSQL via Neon serverless
- Drizzle ORM configured for type-safe database operations
- Connection string expected via `DATABASE_URL` environment variable
- Schema defines users table with UUID primary keys
- Migration system configured in `drizzle.config.ts`

**Schema Design**:
```typescript
users {
  id: UUID (auto-generated)
  username: text (unique, required)
  password: text (required)
}
```

Note: Quiz questions are currently hardcoded in the frontend; no database persistence exists for quiz data, scores, or attempts.

### Authentication and Authorization

**Current State**: No authentication implemented
- User schema exists but no registration/login endpoints
- No session management or JWT tokens
- Password storage mechanism undefined (no hashing)

**Planned Approach** (based on dependencies):
- Session-based authentication using `connect-pg-simple` for PostgreSQL session storage
- Express session middleware (dependency present but not configured)
- Password hashing should be implemented before production use

### External Dependencies

**UI & Styling**:
- Radix UI - Accessible component primitives (@radix-ui/*)
- Tailwind CSS - Utility-first styling framework
- class-variance-authority - Component variant management
- Google Fonts - Orbitron, Inter, JetBrains Mono

**Data & API**:
- Drizzle ORM - Type-safe database toolkit
- @neondatabase/serverless - Neon PostgreSQL serverless driver
- Zod - Schema validation (via drizzle-zod)

**Development Tools**:
- Vite - Frontend build tool and dev server
- tsx - TypeScript execution for Node.js
- esbuild - Production bundling for server code
- @replit/vite-plugin-* - Replit platform integration plugins

**State & Forms**:
- TanStack Query (React Query) - Server state management
- React Hook Form - Form handling (@hookform/resolvers)
- date-fns - Date manipulation utilities

**Routing & Navigation**:
- wouter - Lightweight React router
- embla-carousel-react - Carousel/slider component

**Icons & Assets**:
- lucide-react - Icon library
- Custom Cysic logo asset stored in `attached_assets/`

**Third-Party Services**:
- None currently integrated
- Design references Ethereum.org and Solana for visual inspiration
- No external APIs, analytics, or payment processing