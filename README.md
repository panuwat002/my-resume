This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Personal Resume Website (Loop Engineering Approach)

เว็บไซต์นี้คือโปรเจกต์ Portfolio และ Resume ออนไลน์ ที่ถูกพัฒนาขึ้นภายใต้แนวคิด **Loop Engineering** (Iterative Process) หรือการพัฒนาแบบวนซ้ำอย่างต่อเนื่อง เพื่อให้ประวัติการทำงาน ทักษะ และผลงาน ได้รับการอัปเดตและปรับปรุงอยู่เสมออย่างเป็นระบบ

## 🔄 The Engineering Loop (กระบวนการพัฒนา)

โปรเจกต์นี้ขับเคลื่อนด้วยวงจรการพัฒนาซอฟต์แวร์ (SDLC) และระบบอัตโนมัติ ดังนี้:

### 1. 📝 Plan (วางแผนและออกแบบ)
- **PRD (Product Requirements Document):** กำหนดเป้าหมายกลุ่มผู้ชม (HR, IT Recruiter) และฟีเจอร์หลักที่ต้องการนำเสนอ
- **Content Strategy:** สรุปประวัติการทำงาน ทักษะด้าน IT Infrastructure และ Full-Stack Development

### 2. 🛠️ Build (สร้างและพัฒนา)
- **Framework:** [Next.js](https://nextjs.org/) (App Router) สำหรับโครงสร้างเว็บที่รวดเร็ว จัดการง่าย
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) สำหรับการจัดการ UI/UX ให้ดูเป็นมืออาชีพและรองรับ Mobile Responsive
- **Version Control:** จัดการซอร์สโค้ดและควบคุมการเปลี่ยนแปลงผ่านระบบ Git

### 3. 🚀 Deploy (ติดตั้งและระบบอัตโนมัติ)
- **CI/CD Pipeline:** เชื่อมต่อโปรเจกต์เข้ากับ **GitHub Pages** (ผ่าน GitHub Actions)
- ทุกครั้งที่มีการอัปเดตโค้ดหรือเพิ่มประวัติการทำงานใหม่ ระบบจะทำการ Build (Static Export) และ Deploy เวอร์ชันใหม่ขึ้นเว็บไซต์โดยอัตโนมัติ 

### 4. 📈 Iterate (ปรับปรุงอย่างต่อเนื่อง)
- ตรวจสอบผลลัพธ์การแสดงผลบนหน้าเว็บจริง
- อัปเดตโปรเจกต์ใหม่ๆ หรือทักษะที่เพิ่งได้รับเข้ามาในระบบอย่างสม่ำเสมอ แล้ววนลูปกลับไปสู่กระบวนการ Plan & Build อีกครั้ง

---

## 💻 วิธีการรันโปรเจกต์ (Getting Started)

สำหรับการดึงโค้ดนี้ไปทดสอบหรือพัฒนาต่อบนเครื่อง (Local Development):

1. ติดตั้ง Dependencies ทั้งหมดที่ใช้ในโปรเจกต์:
```bash
npm install