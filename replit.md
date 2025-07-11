# Flow AI Landing Page

## Overview

This is a full-stack web application built with React 18, Vite, TypeScript, and Express.js. The application features a modern landing page for Flow AI with a comprehensive UI component library based on shadcn/ui and Radix UI primitives. The project uses Tailwind CSS for styling and implements a PostgreSQL database with Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui components based on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **API Structure**: RESTful API endpoints with `/api` prefix

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Type Safety**: Full TypeScript support across client and server
- **Code Organization**: Monorepo structure with shared types and utilities

## Key Components

### Frontend Components
1. **Landing Page**: Modern, responsive landing page with animated sections
2. **Navigation**: Fixed navbar with smooth scrolling to sections
3. **Theme System**: Light/dark mode toggle with CSS variables
4. **UI Library**: Comprehensive component library including:
   - Buttons, Cards, Forms, Dialogs
   - Data Tables, Charts, Carousels
   - Navigation menus, Tooltips, Toasts
   - Layout components (Sheets, Sidebars, Resizable panels)

### Backend Components
1. **Express Server**: RESTful API with middleware for logging and error handling
2. **Database Layer**: Drizzle ORM with PostgreSQL schema definitions
3. **Storage Interface**: Abstract storage interface with in-memory implementation
4. **Development Tools**: Vite integration for seamless development experience

### Shared Components
- **Schema Definitions**: Shared database schema with Zod validation
- **Type Definitions**: Common types used across client and server
- **Utilities**: Shared utility functions and helpers

## Data Flow

### Client-Side Flow
1. React components use TanStack Query for data fetching
2. API requests are made to Express server endpoints
3. Server responses are cached and managed by Query Client
4. UI updates reactively based on server state changes

### Server-Side Flow
1. Express routes handle API requests
2. Storage interface abstracts database operations
3. Drizzle ORM manages database queries and migrations
4. Responses are formatted and sent back to client

### Authentication Flow
- Session-based authentication using PostgreSQL session store
- User authentication state managed through secure HTTP cookies
- Protected routes and middleware for authorization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Minimal routing library

### UI Dependencies
- **@radix-ui/***: Primitive UI components
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging utility

### Development Dependencies
- **typescript**: Static type checking
- **vite**: Build tool and dev server
- **esbuild**: Fast JavaScript bundler
- **drizzle-kit**: Database migration tools

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds optimized static assets to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Configuration**: Secure session management in production

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Static file serving capability
- Environment variable support

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
- July 08, 2025. Added PostgreSQL database integration with Drizzle ORM
- July 08, 2025. Implemented waitlist modal with email capture functionality
- July 08, 2025. Enhanced hero section readability with improved Co-Pilot styling
- July 08, 2025. Simplified navbar to essential elements: logo, dark mode toggle, join waitlist button
- July 08, 2025. Removed all navigation links (Features, Pricing, About, Contact) and secondary CTAs
- July 08, 2025. Removed pricing and testimonial sections for cleaner, focused landing page
- July 08, 2025. Applied comprehensive design polish with improved gradients, typography, spacing, and modern glassmorphism effects
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```