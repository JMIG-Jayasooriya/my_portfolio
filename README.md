# Professional Portfolio Website - Isumi Gayasha Jayasooriya

Modern, elegant, and fully responsive personal developer portfolio website designed for **Isumi Gayasha Jayasooriya**, Computing Undergraduate at **Sabaragamuwa University of Sri Lanka**.

Built with **React**, **Vite**, **Lucide Icons**, and clean, modular modern **CSS3**.

---

## 🎨 Color Palette

| Token | Hex Code | Role |
| :--- | :--- | :--- |
| **Ivory / Main BG** | `#F8FAFC` | Primary light canvas |
| **Card BG** | `#FFFFFF` | Elevated components & cards |
| **Deep Navy** | `#172033` | Primary headings, logo, footer |
| **Royal Blue** | `#3157D5` | Primary buttons, links, accents |
| **Button Hover** | `#2445B5` | Interactive hover depth |
| **Soft Blue** | `#E8EEFF` | Highlights, pill tags, badges |
| **Body Slate** | `#475569` | High-contrast readable prose |
| **Border Grey** | `#E2E8F0` | Structural borders & dividers |

---

## 🚀 Sections Included

1. **Sticky Navbar (`Navbar.jsx`)**: Responsive navigation with brand mark, section links, dynamic active link highlighting, mobile drawer, and quick CV action.
2. **Hero Section (`Home.jsx`)**: Introduction badge, bold headline, profile status, action buttons, social links, and live stats ribbon.
3. **About Me (`About.jsx`)**: Background narrative, academic institution details, learning goals, and key pillar highlight cards.
4. **Technical Skills (`Skills.jsx`)**: Categorized domain breakdown (Programming, Frontend, Backend, Database, QA/Testing, Tools) with category filtering.
5. **Featured Projects (`Projects.jsx` & `ProjectCard.jsx`)**:
   - *V-MAS – Vehicle Management System* (React, Spring Boot, MySQL)
   - *Travel Memories* (React, Spring Boot, MySQL)
   - *QA Testing Practice* (Test Plans, Postman, Bug Tracking)
   - *Daily Expense Tracker* (React, Spring Boot, Charts)
   Includes category filters and interactive details modal (`ProjectModal.jsx`).
6. **Experience & Activities (`Experience.jsx`)**: People's Bank training exposure, university activities, and societies.
7. **Education Timeline (`Education.jsx`)**: Sabaragamuwa University of Sri Lanka (Faculty of Computing) & Dharmasoka College.
8. **Certifications (`Certificates.jsx` & `CertificateModal.jsx`)**: Verified credentials with verification dialogs and direct credential IDs.
9. **Achievements (`Achievements.jsx`)**: Extracurriculars, hackathon participation, peer mentoring, and leadership awards.
10. **Interactive Contact (`Contact.jsx`)**: Contact info cards + interactive form with state management, client-side validation, and instant feedback.
11. **Footer (`Footer.jsx`)**: Clean copyright and one-click back-to-top scroll.

---

## 🛠️ Project Structure

```text
my_portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CertificateModal.jsx
│   │   ├── CvModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   └── SectionTitle.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18+ or v20+ installed
- **Git**

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Deploy to Vercel / GitHub Pages
- **Vercel**: Import the GitHub repository; Vercel detects Vite automatically.
- **Preview locally**: `npm run preview`
