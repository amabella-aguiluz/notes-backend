# Find Your Pages
Backend API for a horror-themed notes application, providing secure authentication, note management, and protected routes.

# Features
- JWT-based user authentication with middleware-based route protection
- Rate-limited API endpoints to prevent abuse
- CRUD operations for notes
- RESTful API structure for client-server communication
- USed Prisma ORM for type-safe database access

# Tech Stack
- **Node.js** – Backend runtime
- **Express** - API framework
- **TypeScript** - Type-safe Javascript
- **MySQL** – Database management
- **Prisma** - ORM for MySQL queries
- **Aiven** - Database hosting
- **Docker** - Containerization

## Why I Built This
This project was built to implement a backend API with authentication, design a RESTful API, and manage relational data in MySQL with Prisma ORM.

## API Overview
- POST /auth/register
- POST /auth/login

- GET /notes/:note_id
- POST /notes
- PUT /notes/:note_id
- DELETE /notes/:note_id

# Setup
### Environment variables
Set up environment variables as needed in .env

### Runtime commands
```
npm install
npx prisma generate
npm run dev
```

# Notes
- 'Reset password' function is currently a work in progress
- Database must be running and accessible

# Related Repos
Frontend: https://github.com/amabella-aguiluz/notes-frontend.git