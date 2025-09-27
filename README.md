<<<<<<< HEAD
# EasyClinic
Full Stack Doctors Appointment Platform with Next JS, Neon, Tailwind, Vonage, Shadcn UI


<h4><a class="anchor" id="overview"></a>Overview<h4>
EasyClinic is a web-based application designed to streamline clinic management and patient-doctor interactions. It enables clinics to efficiently manage appointments, video consultations, patient records, and staff workflows in a secure and user-friendly environment.

<h4><a class="anchor" id="tools-technologies"></a>Tools & Technologies<h4>
Frontend: Next.js, React.js, Tailwind CSS, Radix UI

Backend & DB: Node.js, Prisma, PostgreSQL

Auth & Security: Clerk, Environment Variables

Video & Real-Time: Vonage Video API (OpenTok), WebRTC

Deployment & Dev Tools: Vercel, Git & GitHub

Notifications: Sonner / Toast Notifications

<h4><a class="anchor" id="project-structure"></a>project-structure<h4>
easyclinic/
│
├── app/                    # Next.js App Router
│   ├── api/                # API routes (backend logic)
│   │   └── video/          # Video session API (Vonage)
│   ├── appointments/       # Appointment pages
│   ├── video-call/         # Video call page & UI
│   └── layout.js           # Root layout
│
├── components/             # Reusable UI components
│   ├── ui/                 # Buttons, Cards, Modals, etc.
│   └── VideoCallUI.js      # Video call component
│
├── prisma/                 # Prisma schema & migrations
│   └── schema.prisma
│
├── public/                 # Static assets (images, icons)
│   └── images/
│
├── styles/                 # Global styles / Tailwind config
│   └── globals.css
│
├── .env.local              # Environment variables (API keys, secrets)
├── package.json
├── next.config.js
└── README.md




<h4><a class="anchor" id="author"></a>author-contack<h4>
 Email: arvindrana8650@gmail.com
 

=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> f02a31c (Initial commit from Create Next App)
