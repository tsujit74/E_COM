# VPLAK Order Management Panel

A full-stack Order Management Panel built as a technical assignment using React, Node.js, and Express.

## Live Demo

Frontend: https://e-com-nine-navy.vercel.app/

Backend API: https://order-panel-backend-bp38.onrender.com/

## Features

- View all orders
- Search by Order ID, Mobile, Name, or Email
- View customer and product details
- Track order status
- Generate and print invoices
- Save invoice as PDF
- Sticky navigation
- Responsive UI
- REST API integration

## Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- CSS
- Fetch API

**Backend**
- Node.js
- Express.js
- REST API
- CORS
- dotenv

**Deployment**
- Vercel — Frontend
- Render — Backend

## Project Structure

E_COM/
├── backend/
│   ├── controllers/
│   ├── data/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── README.md

## API Endpoints

GET `/api/orders`

GET `/api/orders/:id`

GET `/api/orders/search?type=orderId&value=ORD-10482`

Supported search types:

- `orderId`
- `mobile`
- `name`
- `email`

## Local Setup

### Backend

```bash
cd backend
npm install
npm run dev

```

Backend:

[http://localhost:5000](http://localhost:5000)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

[http://localhost:5173](http://localhost:5173)

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000
```

## Architecture

```text
React Frontend
      ↓
REST API
      ↓
Node.js + Express
      ↓
Mock Order Data
```

## Scope

This assignment focuses on the Order Management Panel. It uses mock order data and does not include authentication, database, payment processing, or real shipping integration.

## Author

**Sujit Thakur**

GitHub: [https://github.com/tsujit74](https://github.com/tsujit74)


```
