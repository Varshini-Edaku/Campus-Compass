# Amrita Amaravati Student Hub & Academic Planner

An interactive, high-fidelity web application tailored dynamically for first-year B.Tech students at **Amrita Vishwa Vidyapeetham, Amaravati Campus**. This portal serves as a comprehensive companion to streamline college transition, plan academics, understand grading, request research mentorships, and discover student life.

---

## 🚀 Key Features

1. **Brand-Preserved Visual Identity**
   - Styled with Amrita’s official signature colors: **Deep Amrita Maroon** and **Muted Radiant Gold**.
   - Fluid, highly responsive interface with high-contrast light and dark mode modes (fully integrated using Tailwind CSS v4 and semantic dark variants).

2. **Academics & CGPA Planner Core**
   - **Grade Prediction Simulator**: Dynamically calculates targeted final grades based on Continuous Assessment (CA) and Midterm scores, applying weightage metrics corresponding directly to Amrita’s academic structure.
   - **Historical Distribution Data**: Access insights regarding credit patterns to help strategize semester targets.

3. **Faculty Research Collaboration Hub**
   - Features active campus **Research Interest Groups** (CIDS, CPS-IoT, Cybersecurity, VLSI & Semiconductors, Bioinformatics).
   - **Interactive Draft Composer**: Synthesizes formal email templates dynamically utilizing the student’s name, batch, class ID, and key skill sets to request mentorship, with native mail client triggering.

4. **Hostel companion & Roommate Finder**
   - Displays real-world room details and rules (e.g., curfew timings, maintenance policies).
   - Includes an interactive **Roommate Finder** with preference tags (study habits, sleep schedules, hobbies, state of origin) to help first-years find ideal roommates.

5. **Clubs & Hackathon Tracker**
   - Track active clubs (coding, cultural, photography, astronomy) and key upcoming hackathons.
   - Register, review details, and sign up directly.

---

## 🤖 AI Tools & Workflows Used for Development
This website was developed leveraging **Gemini models and Google AI Studio’s agentic development ecosystem**. Below are the specific AI tools and workflows used to design, code, iterate, and build this production-grade portal:

### 1. **Gemini 3.5 & 2.5 LLMs (Multi-Turn Reasoning Engine)**
*   **Role**: Served as the core orchestrator for code generation, architectural design, component decomposition, and interactive logic implementation.
*   **Application**: 
    *   Designed complex React components (like the custom academic grade estimator algorithm and interactive input form state machines).
    *   Synthesized Amrita-specific dataset mocks representing real university clubs, research initiatives, and grading patterns.

### 2. **Imagen 3 Integration (Generative Media Pipeline)**
*   **Role**: Generated custom, highly photorealistic high-definition photographic assets.
*   **Application**:
    *   **Campus Exterior Rendering**: Drafted the hero image showcasing Amrita Amaravati's modern terracotta/orange brick architectural facade and curvilinear amphitheater lawns under sunny skies.
    *   **Hostel Infrastructure image**: Rendered the student hostels with correct off-white ten-story geometric modular structures to maintain maximum campus authenticity.

### 3. **Google AI Studio Agentic Runner & Workspace Files API**
*   **Role**: Automated background developer actions using state-of-the-art tools for file I/O, compilation, linting, and package configuration.
*   **Application**:
    *   **Execution-First Prototyping**: Ran parallel system diagnostics via isolated shell commands (`tsc --noEmit`) and package installer bindings during editing turns.
    *   **Refactoring & Cleanup**: Identified stale or large assets and managed code removal via secure, verification-backed file deletion hooks.

### 4. **Tailwind CSS v4 & Lucide Icon Semantic Coordinates**
*   **Role**: Assisted in automated theme configurations, token definitions, and high-quality vector mapping.
*   **Application**:
    *   Injected specific CSS `@variant` dark target hooks matching semantic DOM nodes (`&:where(.dark, .dark *)`) to address theme inconsistencies.
    *   Selected, integrated, and scaled performance-friendly SVG icons dynamically from the `lucide-react` package.

---

## 🛠️ Technology Stack & Architecture

*   **Frontend Library**: React 18+ (utilizing Functional Components with Custom Hooks)
*   **Build Tool & Dev Server**: Vite 6 (bundled with CSS and asset pipelines)
*   **Styling Engine**: Tailwind CSS v4 (designed with fluid desktop layouts and touch-friendly mobile targets)
*   **Icons**: Lucide React
*   **Type Safety**: TypeScript 5+ (Strictly typed compiler constraints)
*   **Database state**: Client-Side React Context & State Persistence

---

## 💻 Getting Started locally

### Prerequisites
Make sure you have Node.js (v18 or higher) installed.

### Installation
1. Clone the repository or navigate to your extracted archive folder.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Launch the local Hot-Module-Replacement development server on Port `3000`:
```bash
npm run dev
```

### Production Build
Compile and bundle the React TypeScript application into optimized, production-ready static assets (output in `/dist`):
```bash
npm run build
```
The build process runs strict type analysis (`tsc --noEmit`) to guarantee flawless type execution.
