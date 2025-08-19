# AB-Peinture Pro - Painting Services Website

## Overview

AB-Peinture Pro is a professional painting services website for "Les Murs de Augustin" based in Quebec. This is a full-stack web application that showcases painting services, displays project galleries, and allows customers to request quotes through a contact form. The application features a modern, responsive design with a focus on user experience and professional presentation of painting and renovation services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, Services, About, Gallery, and Contact
- **UI Framework**: Shadcn/UI components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Styling**: Tailwind CSS with custom color scheme and typography (Poppins, Inter fonts)

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submissions and data retrieval
- **Development Setup**: Development server with Vite integration for hot module replacement
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Development Storage**: In-memory storage fallback for development environments
- **Schema**: Contact management with fields for customer inquiries including name, email, phone, service type, and message

### External Dependencies
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Image Hosting**: Unsplash for portfolio and stock images
- **Font Loading**: Google Fonts (Poppins, Inter, DM Sans, Fira Code, Geist Mono)
- **Development Tools**: Replit integration with development banner and cartographer plugin
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **UI Components**: Extensive Radix UI component library for accessible, customizable interface elements

The application follows a monorepo structure with shared schema definitions between frontend and backend, ensuring type safety across the full stack. The design emphasizes performance with proper code splitting, lazy loading, and optimized asset delivery.