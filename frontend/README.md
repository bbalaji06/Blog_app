# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Backend connection (API)

This frontend is prepared to connect to your Django backend using Axios. The base API URL is read from the Vite environment variable `VITE_API_URL`.

- Create a file named `.env` in the `frontend/` folder and add:

```
VITE_API_URL=http://localhost:8000/
```

Replace the URL with your backend URL when you're ready. Install dependencies and start the dev server:

```bash
cd frontend
npm install
npm run dev
```

All API calls use the axios instance in `src/api/axios.js`. Authentication tokens are stored in `localStorage` under the key `token` and automatically attached as `Authorization: Token <token>`.
