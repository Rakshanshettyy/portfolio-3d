# 3D Portfolio - Rakshan Shetty

This repository contains the source code for my personal 3D portfolio, customized to showcase my expertise in **Backend Engineering** and **Cloud Infrastructure**. Built with React, TypeScript, and Three.js, it features a physics-based tech stack gallery and an interactive 3D character scene.

**Live Site:** [https://rakshanshetty.me](https://github.com/Rakshanshettyy/portfolio-3d) 
*(Update this with your actual Vercel/Netlify URL once deployed)*

![Portfolio Preview](public/images/preview1.png)

## 🚀 About Me
I am a backend-focused Software Engineer with nearly 3 years of industry experience specializing in **Core Java, Spring Boot, and Microservices architecture**. My expertise lies in building scalable RESTful APIs and managing the full cloud deployment lifecycle on **AWS**.

## ✨ Features
- **3D Character Scene**: Interactive character rendered with Three.js and React Three Fiber, customized with a tech-professional theme.
- **Physics Tech Gallery**: A dynamic "TechStack" section where skill icons (Java, AWS, Docker) react to gravity and cursor movement.
- **Professional Timeline**: A detailed "Career" section documenting my journey through **Arisecraft Technology**, **Novelty-data Solutions**, and **LTIMindtree**.
- **GSAP Animations**: Smooth, scroll-driven transitions and split-text effects for a modern UX.

## 🛠 Tech Stack

### Backend & Cloud (Core Expertise)
- **Languages**: Core Java (J2EE), TypeScript, Node.js.
- **Frameworks**: Spring Boot, Microservices, .NET Core.
- **Infrastructure**: AWS (EC2, RDS, S3), Docker, Google Cloud Run.
- **Databases**: MySQL, MongoDB, Firebase DB.

### Frontend & 3D
- **React 18** & Vite.
- **Three.js** & React Three Fiber (R3F).
- **React Rapier**: Physics engine for the TechStack spheres.
- **GSAP**: ScrollTrigger and Timeline animations.

## 📂 Project Structure
```text
.
├── public/                # 3D models (.enc), environment HDRs, and tech icons
├── src/
│   ├── components/
│   │   ├── Character/     # 3D character logic and decryption utilities
│   │   ├── Career.tsx     # Professional work history (Arisecraft, LTIMindtree)
│   │   ├── TechStack.tsx  # Physics-based 3D skills gallery
│   │   ├── WhatIDo.tsx    # Services: Backend Architecture & Cloud Ops
│   │   └── Work.tsx       # Projects: FluxHub, NidhiGold, Glassio
│   ├── data/              # Bone data for character animations
│   ├── utils/             # GSAP ScrollTrigger configurations
│   ├── App.tsx            # Main application entry
│   └── main.tsx           # React DOM rendering
└── vite.config.ts         # Build configuration



⚙️ Getting Started
Prerequisites
Node.js 18+

npm 9+

Installation & Local Dev
Clone the repo:

Bash
git clone [https://github.com/Rakshanshettyy/portfolio-3d.git](https://github.com/Rakshanshettyy/portfolio-3d.git)
cd portfolio-3d
Install dependencies:

Bash
npm install
Run development server:

Bash
npm run dev
📜 Credits
This portfolio is a customized version of the original 3D portfolio template created by Akash Malhotra.

Original Creator: Akash Malhotra

Original Repository: 3d-portfolio

Modifications by: Rakshan Shetty (Integration of Backend/Cloud experience, customized 3D materials, and project data).

📄 License
This project is open-source and available under the MIT License.


### Key Changes Made:
- **Personalization**: Updated all references to reflect your role as a **Cloud & Backend Engineer**.
- **Experience Highlights**: Added your work on **NidhiGold** and **FluxHub** to the feature list.
- **Credits Section**: Added a clear "Credits" section acknowledging **Akash Malhotra** as the original creator while noting your specific modifications.
- **Tech Stack**: Swapped the general "Tech Stack" for your actual professional tools (Spring Boot, AWS, Docker).