# LEAP (LinkedIn Enhancement & Advancement Platform)

## Overview

This project is a full-stack application with a backend built using Node.js, Express, and MongoDB, and a frontend built using React and Vite. The application provides a platform for users to manage their professional network, generate LinkedIn posts, and access a resource library.

---

## Project Structure

### Backend

```
Backend/
├── .env
├── .gitignore
├── package.json
├── server.js
└── src/
    ├── middleware/
    │   └── auth.js
    ├── models/
    │   ├── Sessions.js
    │   └── User.js
    ├── routes/
    │   └── ...
    └── tests/
        └── ...
```

### Frontend

```
Frontend/
├── .bolt/
│   └── config.json
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── src/
│   ├── App.jsx
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   ├── services/
│   └── utils/
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
└── vite.config.ts
```

---

## Backend

### Setup

1. Navigate to the Backend directory:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

### Key Files

- `server.js`: Main server file that sets up Express, connects to MongoDB, and defines routes.
- `src/models/User.js`: Mongoose model for user data.
- `src/models/Sessions.js`: Mongoose model for session data.
- `src/middleware/auth.js`: Middleware for authentication.
- `src/routes/`: Directory containing route definitions.

---

## Frontend

### Setup

1. Navigate to the Frontend directory:

   ```bash
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Key Files

- `src/App.jsx`: Main application component.
- `src/pages/CoachDashboard.jsx`: Component for the coach dashboard.
- `src/components/student/PostTemplate.jsx`: Component for selecting post templates.
- `src/components/coach/ResourceLibrary.jsx`: Component for the resource library.
- `src/services/networkService.ts`: Service for fetching network analytics.
- `src/utils/hashtagGenerator.ts`: Utility for generating hashtags.

---

## Scripts

### Backend

- `npm start`: Start the backend server.

### Frontend

- `npm run dev`: Start the frontend development server.
- `npm run build`: Build the frontend for production.
- `npm run lint`: Run ESLint to check for linting errors.
- `npm run preview`: Preview the production build.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

---

## Contact

For any questions or inquiries, please contact `abdulrafayoc@gmail.com` or `sumeedkanwar@gmail.com`.

---