# 🇳🇱 Career Migration Roadmap: Iran to Netherlands
## Focus: React Developer | EdTech Specialist | Master's Researcher

Welcome to my journey! This repository serves as a centralized hub for tracking my professional growth, master's thesis progress, and job application process for the Netherlands.

### 🎯 Primary Goal
Secure a **Highly Skilled Migrant (HSM)** job offer in the Netherlands as a Frontend/Fullstack Developer, specializing in **Educational Technology (EdTech)**.

### 🎓 Thesis & Research
- **Topic:** Development of an Interactive Educational Dashboard for Smart Classrooms
- **Tech Stack:** React.js, SCSS, Other Tools
- **Status:** Phase 2 (Research & Core Development)

### 🛠 Tech Stack
- **Languages:** JavaScript (ES6+), TypeScript
- **Frontend:** React, Redux, SCSS, Tailwind
- **Tools:** Git, Kanban, Agile Methodologies

---

### 📈 Progress Tracking (Kanban)
I use **GitHub Projects** to manage my sprints. You can see my live progress in the **Projects** tab of this repository.

### 🔗 Official Resources I Follow
- [IND Netherlands](https://ind.nl/en)
- [Government.nl](https://www.government.nl/)
- [Academic Transfer](https://www.academictransfer.com/)

---

## 📁 Project Structure
```bash
my-edtech-dashboard/
├── public/                 # فایل‌های استاتیک (favicon, index.html)
├── src/
│   ├── assets/             # تصاویر، فونت‌ها و فایل‌های ثابت
│   │   └── styles/
│   │       ├── _variables.scss  # متغیرهای رنگ و فونت
│   │       └── main.scss        # استایل‌های کلی
│   ├── components/         # کامپوننت‌های اشتراکی و کوچک (Reusable)
│   │   ├── common/         # Button, Input, Card, Modal
│   │   └── layout/         # Sidebar, Header, Footer
│   ├── core/               # بخش‌های مرکزی (Config, API, Constants)
│   │   ├── services/       # axios instances, API calls
│   │   └── utils/          # توابع کمکی (date-formatter, helpers)
│   ├── features/           # بخش‌های اصلی داشبورد
│   │   ├── students/       # مدیریت دانش‌آموزان
│   │   ├── courses/        # مدیریت دوره‌ها
│   │   └── analytics/      # بخش نمودارها و آمار
│   ├── hooks/              # Custom Hooks عمومی
│   ├── pages/              # صفحات اصلی متصل به Routeها
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx             # روتینگ اصلی و Providerها
│   └── main.jsx            # نقطه ورود React
├── .gitignore              # فایل‌های نادیده گرفته شده توسط Git
├── package.json            # پکیج‌ها و اسکریپت‌ها
└── README.md               # مستندات پروژه
