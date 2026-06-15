# EasyClinic

A full-stack doctor appointment and video consultation platform built with Next.js, Neon PostgreSQL, Clerk, Prisma, Vonage, Tailwind CSS, and Shadcn UI.

EasyClinic helps clinics manage appointments, doctor availability, patient workflows, authentication, and video calls in one modern web application.

## Features

- Doctor and patient onboarding
- Appointment booking and management
- Doctor availability settings
- Video consultation flow
- Admin doctor verification
- Clerk authentication
- Prisma and PostgreSQL data layer
- Tailwind and Radix UI components

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- Shadcn UI / Radix UI
- Clerk
- Prisma
- Neon PostgreSQL
- Vonage Video API
- Sonner notifications

## Getting Started

Install dependencies:

```bash
npm install
```

Set up local environment variables in `.env`:

```env
DATABASE_URL=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_VONAGE_APPLICATION_ID=""
VONAGE_PRIVATE_KEY=""
```

Generate Prisma client:

```bash
npm run prisma:generate
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
```

## Author

Arvind Rana
