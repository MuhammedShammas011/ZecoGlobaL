# ZecoGlobal — Premium MERN Website

> **Material. Manufacturing. Possibility.**

A premium, cinematic, scroll-animated corporate website for **ZecoGlobal**, a modern manufacturing company specializing in Plywood, WPC and Doors.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| Animation | GSAP + ScrollTrigger + Framer Motion |
| Styling | Tailwind CSS v3 |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| HTTP Client | Axios |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB running locally or Atlas URI

### 1. Configure environment

Edit `.env` in the project root:

```env
MONGO_URI=mongodb://localhost:27017/zecoglobal
PORT=5001
CLIENT_URL=http://localhost:5175
NODE_ENV=development
```

### 2. Install & seed the database

```bash
cd server && npm install
node seed.js   # Seeds 9 products across Plywood, WPC, Doors
```

### 3. Start the backend

```bash
cd server && npm run dev
# API running at http://localhost:5001/api
```

### 4. Start the frontend

```bash
cd client && npm install && npm run dev
# App running at http://localhost:5175
```

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/products` | All products (`?category=plywood\|wpc\|doors`) |
| GET | `/api/products/:slug` | Single product |
| POST | `/api/contact` | Submit enquiry |

---

## Pages

| Route | Page |
|---|---|
| `/` | Full cinematic homepage |
| `/products` | Dynamic catalogue with category filter |
| `/products/:slug` | Product detail |
| `/about` | Company story + timeline |
| `/manufacturing` | Manufacturing process |
| `/contact` | Contact form |

---

## Design Tokens

| Token | Value |
|---|---|
| Primary | `#E9D8AF` Parchment |
| Secondary | `#301718` Mahogany |
| Background | `#F5F0E8` Cream |
| Display Font | Cormorant Garamond |
| Body Font | Inter |
# ZecoGlobal
# ZecoGlobaL
