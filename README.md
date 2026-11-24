# 🌟 Isumi Gayasha Jayasooriya | Personal Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<p align="center">
  <strong>Modern, elegant, and fully responsive personal developer portfolio website.</strong><br>
  Showcasing education, practical full-stack projects, verified certifications, and extracurricular achievements.
</p>

[View Live Portfolio](#-deployment--hosting) • [Explore Projects](#-featured-projects) • [Contact Isumi](#-connect--contact)

</div>

---

## 👩‍💻 About the Author

**Isumi Gayasha Jayasooriya** is an undergraduate student pursuing a **Bachelor of Honours in Information Systems** at **Sabaragamuwa University of Sri Lanka** (Expected Graduation: **2028**), with previous secondary education in the Physical Science Stream at **Dharmasoka College, Ambalangoda**.

Passionate about technology, software engineering, and software quality, Isumi builds intuitive, robust, and user-centric digital solutions using modern web frameworks, relational databases, and cloud services.

---

## 🎨 Design Philosophy & Color Palette

The portfolio uses a **Modern Ivory + Deep Navy + Royal Blue** palette designed for a clean, executive, and professional appearance:

| Color | Hex Code | Visual Preview | Purpose in UI |
| :--- | :--- | :---: | :--- |
| **Ivory** | `#F8FAFC` | `⬜` | Main background canvas |
| **Card Pure White** | `#FFFFFF` | `◽` | Elevated cards, dialogs, and panels |
| **Deep Navy** | `#172033` | `⬛` | Authoritative typography, brand marks, and footer |
| **Royal Blue** | `#3157D5` | `🟦` | Primary action buttons, active navigation, accents |
| **Hover Royal Blue** | `#2445B5` | `🔷` | Interactive button hover states |
| **Soft Blue** | `#E8EEFF` | `▫️` | Highlight pills, category tags, and icon boxes |
| **Slate Body** | `#475569` | `🔘` | Clean, high-legibility body prose |
| **Border Grey** | `#E2E8F0` | `▫️` | Subtle borders, dividers, and cards |

- **Typography**: Google Font **Inter** (300 to 800 weights)
- **Container Max Width**: `1180px`
- **Component Geometry**: Smooth `14px` card corners, `8px` buttons

---

## 🚀 Key Features

- **📱 Fully Responsive**: Flawless experience across desktop, laptop, tablet, and mobile devices with a dedicated mobile drawer menu.
- **✨ Smooth Navigation**: Sticky navbar with scroll-spy that highlights the active section as you browse.
- **📄 Interactive CV Modal**: Digital curriculum vitae viewer with one-click **"Print / Save as PDF"** functionality.
- **💻 Simplified Skills Showcase**: 6 clear categories presenting technical skills, frameworks, and databases with clean pill badges.
- **🎯 Featured Projects Grid**:
  - Direct links to verified GitHub repositories.
  - Live screenshots for all featured applications (V-MAS, Travel Memories, ISHU CAKE).
  - Detailed feature modals detailing architecture, tools, and technical highlights.
- **📜 Verified Certifications**: Credentials with verification modal links for Microsoft, Meta, and IBM Coursera courses.
- **🤝 Academic & Industry References**: Direct reference cards for university training coordinators and software engineering mentors.
- **📬 Interactive Contact Form**: Fully functional form state with real-time field validation, error alerts, and animated confirmation.

---

## 📂 Featured Projects

### 1. 🚗 V-MAS – Smart Vehicle Service Management System
- **Type**: Group Capstone Project
- **Tech Stack**: React.js, Spring Boot, Java, MySQL, JWT, AWS (RDS/S3), REST APIs
- **Highlights**: Digitalized vehicle service scheduling, fleet management, and automated alerts for service/insurance/license expiry.
- **Repository**: [JMIG-Jayasooriya/V---Mas](https://github.com/JMIG-Jayasooriya/V---Mas)

### 2. 🗺️ Travel Memories – Personal Digital Travel Journal
- **Type**: Individual Project
- **Tech Stack**: React.js, Spring Boot, Java, MySQL, Spring Security, JWT, REST APIs, Leaflet.js, Tailwind CSS
- **Highlights**: Interactive Leaflet.js map pinning, full CRUD trip journal, itinerary tracking, and travel expense ledgers.
- **Repository**: [JMIG-Jayasooriya/travel-memories](https://github.com/JMIG-Jayasooriya/travel-memories)

### 3. 🎂 ISHU CAKE – Responsive Cake Shop Website
- **Type**: Individual Project
- **Tech Stack**: HTML5, CSS3, JavaScript
- **Highlights**: Modern artisanal cake shop storefront featuring interactive menus, category filtering, and mobile-first design.
- **Repository**: [JMIG-Jayasooriya/my-project](https://github.com/JMIG-Jayasooriya/my-project)

---

## 🛠️ Project Structure

```text
my_portfolio/
├── public/
│   ├── favicon.svg                   # Brand favicon mark
│   ├── profile.jpg                   # Profile picture
│   └── images/
│       ├── profile.jpg               # Professional headshot
│       ├── v-mas.jpg                 # V-MAS portal screenshot
│       ├── travel-memories.jpg       # Travel Memories screenshot
│       └── ishu-cake.jpg             # ISHU CAKE project screenshot
├── src/
│   ├── components/
│   │   ├── CertificateModal.jsx      # Modal for verified credentials
│   │   ├── CvModal.jsx               # CV viewer & print-to-PDF modal
│   │   ├── Footer.jsx                # Responsive footer & back-to-top
│   │   ├── Navbar.jsx                # Sticky navbar with mobile drawer
│   │   ├── ProjectCard.jsx           # Clean project card with banners
│   │   ├── ProjectModal.jsx          # Detailed project features modal
│   │   └── SectionTitle.jsx          # Reusable section header component
│   ├── data/
│   │   └── portfolioData.js          # Centralized data source (bio, skills, projects)
│   ├── sections/
│   │   ├── About.jsx                 # Personal bio & 4 core pillar cards
│   │   ├── Achievements.jsx          # Extracurriculars & leadership
│   │   ├── Certificates.jsx          # Verified course certificates
│   │   ├── Contact.jsx               # Contact channels & interactive form
│   │   ├── Education.jsx             # Vertical education timeline
│   │   ├── Experience.jsx            # Banking operations trainee experience
│   │   ├── Home.jsx                  # Hero section with avatar & stats ribbon
│   │   ├── Projects.jsx              # Filterable featured projects grid
│   │   ├── References.jsx            # Academic and industry referee cards
│   │   └── Skills.jsx                # Clean categorized skill badges
│   ├── App.jsx                       # Root component coordinating all sections
│   ├── index.css                     # Global styles, CSS variables & utilities
│   └── main.jsx                      # Vite entry point
├── index.html                        # HTML5 document template
├── package.json                      # Project dependencies & scripts
├── vite.config.js                    # Vite bundler configuration
└── README.md                         # Documentation
```

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/JMIG-Jayasooriya/my_portfolio.git
cd my_portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application with live hot-reloading.

### 4. Build for Production
```bash
npm run build
```
Generates a minified, production-ready build in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment & Hosting

This project is optimized for instant continuous deployment on **Vercel** or **Netlify**:

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `my_portfolio` repository.
4. Framework preset **Vite** is automatically detected.
5. Click **"Deploy"** — your live URL will be ready in seconds!

---

## 📬 Connect & Contact

- **Email**: [isumigayasha20@gmail.com](mailto:isumigayasha20@gmail.com)
- **Phone / WhatsApp**: `+94 76 6375625`
- **Location**: Colombo, Sri Lanka
- **GitHub**: [github.com/JMIG-Jayasooriya](https://github.com/JMIG-Jayasooriya)
- **LinkedIn**: [linkedin.com/in/isumi-gayasha](https://linkedin.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
