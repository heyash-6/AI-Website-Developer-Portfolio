# ⚡ Yash Tidke — 3D Personal Portfolio Website

A modern, high-performance, dark futuristic personal portfolio website for **Yash Tidke** (Freelance AI Website Developer). 

Engineered with **React 18**, **Vite**, **React Three Fiber (Three.js)**, **Framer Motion**, and **Supabase**, this portfolio showcases web development services, concept projects, interactive 3D motion elements, and real-time backend data storage.

---

## 🌟 Key Features

### 1. 🎨 3D Centerpiece Hero (`Hero3D.jsx`)
- Interactive **React Three Fiber** canvas featuring an abstract distorted glass/metallic sphere with electric purple-to-cyan neon glow reflections and an orbiting metallic torus knot ring.
- Continuously rotates, floats, and responds dynamically to mouse movement via dampened parallax tilting (`lerp`).
- Optimized with device pixel ratio scaling (`dpr={[1, 2]}`) for high performance across desktop and mobile devices.

### 2. 📺 Film-Grain Hover Texture Overlay (`NoiseGrain.jsx`)
- Custom SVG fractal noise (`feTurbulence`) component with unique SVG filter IDs (`useId()`) and animated keyframe flickering.
- Overlays service cards, project showcase cards, review cards, and call-to-action buttons on hover at `15–25%` opacity.
- Paired with micro-interaction scale ups (`1.02x`) and neon border glows (`#7F5AF0`, `#2CB67D`, `#00E5FF`).

### 3. 🗄️ Supabase Backend Integration
- **Contact Form Data Storage (`Contact.jsx`)**: Submitting the contact form saves user entries (`name`, `email`, `message`, `created_at`) directly into the Supabase database table `messages`.
- **Live Review & Feedback Wall (`Testimonials.jsx`)**: Visitors and clients can submit reviews (Name, Role, 1–5 Star Rating, Review quote) via an interactive drawer. Submissions write to the Supabase `reviews` table and reflect live on the website wall instantly!
- **Dynamic Projects Table (`Projects.jsx`)**: Fetches showcase projects dynamically from the Supabase `projects` database table.

### 4. 🚧 Concept Project Status Badges
- Featured concept builds (**Apex Edge** & **PulseHealth**) include clear indicators:
  - Pulsing amber status badge: `🚧 Concept — In Development`.
  - Tagged with `🚧 Concept (In Progress)` alongside domain tech tags.
  - Development notice box inside the interactive project preview modal.

### 5. 📱 Fully Responsive & Fast Load Times
- Code-split JavaScript bundles (`index`, `vendor`, `three`) for fast asset delivery.
- Mobile navigation menu drawer with glassmorphism backdrop blur.
- Exact color scheme implementation: `#0A0A0F` background, `#F5F5F7` text, `#7F5AF0` electric purple, `#2CB67D` neon green, and `#00E5FF` cyan glow.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18, Vite 6
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer, Custom Glassmorphism CSS
- **3D Visuals:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations:** Framer Motion
- **Icons:** Lucide Icons (`lucide-react`)
- **Backend Database:** Supabase (`@supabase/supabase-js`)
- **Typography:** Google Fonts (`Space Grotesk` & `Inter`)

---

## 📂 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── About.jsx         # About Me section with bio & stats cards
│   │   ├── Contact.jsx       # Contact form connected to Supabase
│   │   ├── Footer.jsx        # Footer with social links & back-to-top
│   │   ├── GrainCard.jsx     # Reusable glassmorphic card with noise hover
│   │   ├── Hero.jsx          # Hero section with copy, CTAs & 3D canvas
│   │   ├── Hero3D.jsx        # React Three Fiber 3D interactive mesh
│   │   ├── Navbar.jsx        # Sticky glassmorphism header & mobile drawer
│   │   ├── NoiseGrain.jsx    # SVG film-grain texture component
│   │   ├── Projects.jsx      # Featured concept builds with preview modal
│   │   ├── Services.jsx      # 5 core web development services
│   │   └── Testimonials.jsx  # Live review submission drawer & review wall
│   ├── lib/
│   │   └── supabase.js       # Supabase client helper
│   ├── App.jsx               # Main page layout & ambient background grain
│   ├── index.css             # Custom Tailwind directives & keyframes
│   └── main.jsx              # React DOM entry point
├── .env.local                # Supabase environment credentials
├── supabase_schema.sql       # Complete SQL database setup script
├── tailwind.config.js        # Custom design tokens & animation keyframes
└── vite.config.js            # Vite config with manual chunk splitting
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js LTS (v18 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/heyash-6/AI-Website-Developer-Portfolio.git
cd AI-Website-Developer-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables Setup
Create a `.env.local` file in the root directory and add your Supabase project keys:

```env
VITE_SUPABASE_URL=https://ekcalqxxtcuqvhbcumrh.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

NEXT_PUBLIC_SUPABASE_URL=https://ekcalqxxtcuqvhbcumrh.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 🗄️ Supabase Database Setup

To initialize the database tables in Supabase:

1. Open your [Supabase Dashboard SQL Editor](https://supabase.com/dashboard/project/ekcalqxxtcuqvhbcumrh/sql/new).
2. Copy and paste the contents of [`supabase_schema.sql`](./supabase_schema.sql).
3. Click **Run** to create the `messages`, `reviews`, and `projects` tables along with Row Level Security (RLS) policies.

---

## 🔗 Connect & Contact

- **LinkedIn:** [linkedin.com/in/heyash6](https://www.linkedin.com/in/heyash6)
- **GitHub:** [github.com/heyash-6](https://github.com/heyash-6)
- **Portfolio:** Yash Tidke — Freelance AI Website Developer