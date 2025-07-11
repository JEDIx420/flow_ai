# Flow AI

<p align="center">
  <img src="./attached_assets/Screenshot 2025-07-11 at 10.14.23 PM.png" alt="Flow AI Hero Section Screenshot" width="80%"/>
</p>

<p align="center"><b>Transform your sales process with intelligent automation.</b></p>

## Vision

**Flow AI** is an AI-powered sales intelligence platform designed to revolutionize the way sales teams identify, engage, and convert prospects. Our vision is to empower sales professionals with intelligent automation, actionable insights, and seamless workflows—so they can focus on building relationships and closing deals, not on repetitive tasks.

Flow AI leverages the latest advancements in artificial intelligence to:
- Score and prioritize leads based on real engagement and intent
- Generate highly personalized outreach at scale
- Automate follow-ups and scheduling
- Integrate with your favorite CRM and sales tools
- Provide deep analytics to optimize your sales process

Our mission is to make every sales rep 10x more productive, and every customer interaction more meaningful.

---

## Platform Preview

<p align="center">
  <img src="./attached_assets/Screenshot 2025-07-11 at 10.14.46 PM.png" alt="Flow AI Dashboard Preview Screenshot" width="80%"/>
</p>

<p align="center"><i>Sample dashboard showing pipeline, leads, and conversion analytics.</i></p>

---

## Features

<p align="center">
  <img src="./attached_assets/Screenshot 2025-07-11 at 10.14.57 PM.png" alt="Flow AI Features Screenshot" width="80%"/>
</p>

- **Smart Lead Scoring:** AI analyzes prospect behavior and engagement to prioritize your hottest leads automatically.
- **Personalized Outreach:** Generate highly personalized emails and messages that resonate with each prospect.
- **Advanced Analytics:** Get deep insights into your sales performance and identify optimization opportunities.
- **Smart Scheduling:** Automatically schedule follow-ups and meetings based on prospect engagement patterns.
- **CRM Integration:** Seamlessly integrate with your existing CRM and sales tools for a unified workflow.
- **Automated Workflows:** Set up intelligent automation sequences that nurture leads without manual intervention.
- **Waitlist System:** Collect early access signups and build your launch audience.

---

## Tech Stack
- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI, Framer Motion
- **Backend:** Node.js, Express, TypeScript, Drizzle ORM, Zod, PostgreSQL (Neon or Docker)
- **Database:** PostgreSQL (local via Docker or cloud)
- **Dev Tools:** Docker, tsx, TanStack Query, Wouter

---

## Local Development Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for local PostgreSQL)
- [Git](https://git-scm.com/)

### 2. Clone the Repository
```sh
git clone https://github.com/JEDIx420/flow_ai.git
cd flow_ai
```

### 3. Install Dependencies
```sh
npm install
```

### 4. Set Up Environment Variables
- Copy `.env.example` to `.env`:
  ```sh
  cp .env.example .env
  ```
- Edit `.env` and set your `DATABASE_URL`.
  - For local Docker: `postgresql://postgres:password@localhost:5432/flowai`
  - For Neon/Supabase: use your cloud connection string

### 5. Start PostgreSQL with Docker (Recommended)
```sh
docker run -d \
  --name flowai-postgres \
  -e POSTGRES_DB=flowai \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  postgres:15
```

### 6. Run Database Migrations
```sh
npm run db:push
```

### 7. Start the Development Server
```sh
npm run dev
```
- The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Contributing
- Fork the repo and create a feature branch
- Open a pull request with a clear description
- All contributions are welcome!

---

## License
MIT

---

## Contact & Community
- [GitHub Issues](https://github.com/JEDIx420/flow_ai/issues) for bugs/feature requests
- [Flow AI Website](#) (coming soon)
- [Twitter](#) (coming soon)

---

**Flow AI** — Empowering sales teams with the future of AI-driven productivity.
