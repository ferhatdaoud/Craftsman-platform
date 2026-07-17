# Artisan-Learning — Progress & Context

## Stack
- **Frontend:** React Router v8, Tailwind v4, TypeScript, shadcn/ui, TanStack Query, React Hook Form + Zod, Axios
- **Backend:** Express, TypeScript, TypeORM, PostgreSQL, JWT, bcrypt, cors, dotenv
- **Dev:** tsx, nodemon-equivalent watch mode

## Project Vision
- Bridge clients and craftsmen (plumbers, carpenters, etc.)
- Portfolio piece + interview talking piece
- Long-term: monetization (subscription, leads, commissions)

## Current Phase: Phase 1 — Auth Foundation (In Progress)

### Completed
- Backend project scaffolded with TypeORM + PostgreSQL
- User entity created (id, email, name, password, role, phoneNumber)
- Register/login controllers implemented
- JWT auth middleware scaffolded
- Frontend route scaffold (home, login, register, client dashboard, craftsman dashboard)
- Login and register pages with React Hook Form + Zod validation
- Basic UI components (Header, Footer, CraftsmanCard, shadcn Button/Input)

### Issues / Gaps to Fix
- Backend `auth.middleware.ts` has a typo: `authorizaton` instead of `authorization`
- Login controller does not return the JWT token to the client
- Frontend login mutation navigates but does not store token or user state
- Frontend routes are not protected; dashboards are accessible without auth
- Role-based routing not implemented (client vs craftsman dashboards)
- Backend is hardcoded to port 3000 in frontend; needs environment config
- `Dashboard-header.tsx` and `Demo.tsx` are placeholders
- `Craftsman-card.tsx` services tags are not rendering (empty div)
- Backend `.env` contains plaintext secrets; needs note about `.env` in `.gitignore`

### Interview-Ready Topics Covered So Far
- PERN stack rationale (popularity, community, job market)
- TypeORM vs alternatives (Prisma, Drizzle)
- React Router v8 vs Remix/CRA/Next.js for this use case
- JWT anatomy (header, payload, signature, expiry)
- bcrypt salt rounds and why hashing is mandatory

### Next Steps
1. Fix auth middleware typo and token handling
2. Return JWT from backend login/register
3. Implement frontend token storage strategy (discuss httpOnly cookies vs localStorage)
4. Build protected route wrapper in React Router
5. Implement role-based redirect after login
6. Discuss security: CORS, helmet, rate limiting, input sanitization
7. Move to Phase 2: Domain models (Craftsman, Service, Category, Booking)

## Long-Term Feature Backlog
- Craftsman profiles, ratings, reviews
- Search, filters, pagination
- Booking/inquiry flow
- Real-time chat or notifications
- Payment integration
- Admin panel
- Email notifications
- Deployment (Vercel/Render/Railway + Neon/Supabase)
- Testing strategy