# 🏥 EasyClinic

A **Full-Stack Doctor Appointment & Video Consultation Platform** built with **Next.js, Neon PostgreSQL, Clerk, Vonage, Tailwind, and Shadcn UI**.

EasyClinic helps clinics streamline **appointments**, **video calls**, **patient records**, and **workflow management**—all inside one modern web application.

---

## 📌 **Overview**

EasyClinic is a web-based solution that provides:

* Online doctor appointment booking
* Secure video consultations using **Vonage (OpenTok)**
* Staff and clinic management tools
* Real-time patient-doctor interaction
* Clean & modern UI powered by Tailwind + Shadcn

---

## 🚀 **Tech Stack**

### **Frontend**

* Next.js (App Router)
* React.js
* Tailwind CSS
* Shadcn UI / Radix UI

### **Backend**

* Next.js API Routes
* Node.js
* Prisma ORM
* Neon PostgreSQL

### **Auth & Security**

* Clerk Authentication
* Environment Variables

### **Video & Real-Time Communication**

* Vonage Video API (OpenTok)
* WebRTC

### **Dev Tools & Deployment**

* Vercel
* Git & GitHub
* Sonner Notifications

---

## 🧱 **Project Structure**

```
easyclinic/
│
├── app/                     # Next.js App Router
│   ├── api/                 # API routes (backend logic)
│   │   └── video/           # Vonage video session handlers
│   ├── appointments/        # Appointment pages
│   ├── video-call/          # Video call interface
│   └── layout.js            # Root layout
│
├── components/              # Reusable UI components
│   └── ui/                  # Buttons, Cards, Modals, etc.
│   └── VideoCallUI.js       # Video call component
│
├── prisma/                  # Prisma schema & DB migrations
│   └── schema.prisma
│
├── public/                  # Static assets (images, icons)
│   └── images/
│
├── styles/                  # Global styling
│   └── globals.css
│
├── .env.local               # Environment variables
├── package.json
├── next.config.js
└── README.md
```

---

## ⚙️ **Getting Started**

### **1. Install dependencies**

```bash
npm install
```

### **2. Set up environment variables**

Create a `.env.local` file:

```env
DATABASE_URL=""
CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
VONAGE_API_KEY=""
VONAGE_API_SECRET=""
VONAGE_APP_ID=""
```

### **3. Run Prisma migrations**

```bash
npx prisma migrate dev
```

### **4. Start development server**

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in the browser.

---

## 🩺 **Features**

* 📅 Book and manage clinic appointments
* 🎥 Live video consultations (Vonage + WebRTC)
* 🔐 Secure authentication (Clerk)
* 📊 Clinic, doctor, and patient dashboard
* 🗂️ Patient records & management
* 🖼️ Modern & responsive UI (Shadcn + Tailwind)
* 🔔 Toast notifications (Sonner)

---

## 👨‍💻 **Author Contact**

**Email:** [arvindrana8650@gmail.com](mailto:arvindrana8650@gmail.com)

---

