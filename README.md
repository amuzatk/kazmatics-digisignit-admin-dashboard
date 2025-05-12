## Admin Dashboard with Role-Based Access Control


This is a Next.js + TypeScript admin dashboard project that implements role-based authentication and authorization, data visualization, and responsive UI with session persistence. The app simulates a real-world dashboard scenario with mock JWT-based login, multiple user roles (admin and editor), and different views/permissions based on role.

## ✨ Features

🔐 Authentication & Authorization

- Mock JWT-based login

- Role-based routing and UI rendering

- Session persistence using cookies

🎨 UI & UX

- Responsive design

- Light/Dark mode toggle

- Protected pages (redirects unauthorized users)

📊 Data Visualization

- Integrated charts using Recharts

- Visual summaries of mock API data (e.g., posts, users)

🌐 API Integration

- Mock data fetching from JSONPlaceholder

- Type-safe API layer with Axios + TypeScript

⚙️ Global State Management

- Uses Zustand for managing user state across the app

🧪 Testing

- Unit tests using React Testing Library and Jest

## ✅ Requirements Met

| Requirement                            | Implemented |
| -------------------------------------- | ----------- |
| Next.js + TypeScript                   | ✅           |
| Mock JWT authentication (admin/editor) | ✅           |
| Role-based routes and UI               | ✅           |
| Mock REST API (JSONPlaceholder)        | ✅           |
| Charting with Recharts                 | ✅           |
| Global state (Zustand)                 | ✅           |
| Session via cookies                    | ✅           |
| Responsive UI with light/dark mode     | ✅           |
| Unit testing with RTL                  | ✅           |
| Type-safe API layer                    | ✅           |


## Getting Started
1. Install dependencies

```bash
npm install
# or
yarn

```

2. Run development server

```bash
npm run dev
# or
yarn dev

```

3. Visit http://localhost:3000 to view the app.

4. 🧪 Running Tests

```bash
npm run test
# or
yarn test

```
5. 📂 Folder Structure
/components        → Reusable UI components  
/lib               → Auth utilities, API functions  
/pages             → Next.js pages (protected routes inside /admin & /editor)  
/store             → Zustand store for global state  
/styles            → TailwindCSS or SCSS (based on setup)  
__tests__             → Unit tests 

6. 🌍 API

This app fetches data from:

https://jsonplaceholder.typicode.com/posts

## 📦 Deployment
This project is deployed on Vercel.

https://kazmatics-digisignit-admin-dashboa-git-f8e0ac-amuzatks-projects.vercel.app/login

## 🙌 Contributing
Feel free to fork the project and submit a pull request. Issues and suggestions are welcome!