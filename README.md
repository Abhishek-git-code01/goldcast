# AI Marketing Alliance Web UI

A modern, animated landing experience built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Contentful** as the headless CMS.

## 🚀 Features

- ✅ Fully responsive layout
- ✅ Testimonials powered by Contentful (with animation & avatar support)
- ✅ Dynamic FAQs with expandable answers
- ✅ Animated horizontal scrolling logos (from local assets)
- ✅ Cards/blocks section powered by Contentful
- ✅ Smooth animations via Framer Motion
- ✅ Styled with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Reusable, modular React components

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) — React framework for production
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Contentful](https://www.contentful.com/) — Headless CMS
- [Next Image Optimization](https://nextjs.org/docs/api-reference/next/image) — Optimized image loading

---

## 📦 Folder Structure

```
├── public/                # Static assets (images, logos, backgrounds)
│   ├── assets/            # Section backgrounds, card images, etc.
│   └── logos/             # Partner/company logos
├── src/
│   ├── app/               # Next.js app directory (routing, layout, error boundaries)
│   ├── componets/         # All React UI components (Hero, FAQ, Footer, etc.)
│   └── utils/
│       ├── api/           # API utilities (Contentful client, data fetchers)
│       ├── types/         # TypeScript type definitions
│       └── ui/            # UI helpers/components (FAQSection, TestimonialCard)
├── .env.local.example     # Example environment file (copy to .env.local)
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # This file
```

---

## ⚡ Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd goldcast
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`:
     ```bash
     cp .env.local.example .env.local
     ```
   - Fill in your Contentful credentials in `.env.local`:
     ```env
     CONTENTFUL_SPACE_ID=YOUR_CONTENTFUL_SPACE_ID
     CONTENTFUL_ACCESS_TOKEN=YOUR_CONTENTFUL_ACCESS_TOKEN
     ```
   - You can find these in your Contentful dashboard.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📝 Notes

- **TypeScript** is used throughout for type safety and better developer experience.
- **Reusable Components**: The UI is built from modular, reusable React components for maintainability and scalability.
- **Tailwind CSS**: All styling is done using Tailwind's utility classes for rapid development and easy customization.
- **Contentful**: All dynamic content (testimonials, FAQs, cards) is managed via Contentful. Make sure your environment variables are set up correctly.
- **Error Handling**: If your `.env.local` is missing or misconfigured, the UI will show a friendly error message instead of crashing.

---

## 📄 License

MIT

## 📄 Performace
![Screenshot from 2025-06-25 13-17-17](https://github.com/user-attachments/assets/8d36bc11-179e-489c-815e-f49276a10512)

## 📄 Deployed Project
link:https://goldcast-sooty.vercel.app/

