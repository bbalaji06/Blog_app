# Blog_app

A modern Django + React blog application scaffold with a Django REST API backend and a Vite + React frontend.

![Blog UI preview](frontend/public/preview.png)

> This repository contains a Django backend (API + admin) and a React frontend built with Vite.

---

**Table of Contents**

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start (Local Development)](#quick-start-local-development)
  - [Backend (Django)](#backend-django)
  - [Frontend (React + Vite)](#frontend-react--vite)
- [Environment Variables (.env.example)](#environment-variables-envexample)
- [Database & Migrations](#database--migrations)
- [Deployment Notes](#deployment-notes)
- [Troubleshooting (Postgres DNS / Connection)](#troubleshooting-postgres-dns--connection)
- [Security Checklist Before Production](#security-checklist-before-production)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project is a full-stack blog application. The Django backend provides a JSON REST API (using Django REST Framework) and token authentication. The React frontend uses Vite for a fast development experience and communicates with the API using Axios.

The codebase is split into two top-level folders:

- `backend/` — Django project with app `blog`
- `frontend/` — React + Vite user interface

---

## Features

- User signup / login (token auth)
- Create, edit, delete blog posts
- View all posts, single post detail modal
- Responsive modern UI with animations
- REST API endpoints for posts and auth

---

## Tech Stack

- Backend: Python 3.11+ (recommended), Django 5.x, Django REST Framework
- DB: PostgreSQL (production recommended), SQLite fallback for local dev
- Frontend: React 19.x, Vite, Axios, react-router
- Static serving: WhiteNoise for simple static file hosting

Important Python packages (add to your requirements): `gunicorn`, `whitenoise`, `dj-database-url`, `python-dotenv`, `psycopg2-binary`

---

## Quick Start (Local Development)

Note: commands assume you're on Windows and using the repo root `Blog_app`.

### Backend (Django)

1. Create and activate a virtual environment

```cmd
cd "c:\Users\LENOVO\OneDrive\Desktop\VS code\Django\Blog_app\backend"
python -m venv .venv
.venv\Scripts\activate
```

2. Install Python dependencies

```cmd
pip install -r requirements.txt
```

If you don't have a `requirements.txt`, install the core packages:

```cmd
pip install django djangorestframework python-dotenv dj-database-url whitenoise psycopg2-binary
```

3. Create a `.env` in `backend/` (see template below) and ensure `DATABASE_URL` is set for Postgres, or leave empty to use the bundled SQLite fallback.

4. Run migrations and start the dev server

```cmd
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Frontend (React + Vite)

1. Install dependencies

```cmd
cd "c:\Users\LENOVO\OneDrive\Desktop\VS code\Django\Blog_app\frontend"
npm install
```

2. Start dev server

```cmd
npm run dev
```

3. The frontend expects an API URL configured via `VITE_API_URL` (e.g. `http://localhost:8000`).

---

## Environment Variables (.env.example)

Place a `.env` in `backend/` with these values (example):

```
# backend/.env
SECRET_KEY=your-secret-key-for-dev
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=postgresql://user:password@host:5432/dbname
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

- In production, make sure `DEBUG=False` and `SECRET_KEY` is set.
- `DATABASE_URL` can be left undefined to use SQLite for local development (the settings fall back to SQLite if the URL is missing).

---

## Database & Migrations

- Development fallback: SQLite (file `db.sqlite3` in `backend/`) if `DATABASE_URL` is not provided.
- Production: use a PostgreSQL connection string in `DATABASE_URL`.

Run migrations:

```cmd
cd backend
.venv\Scripts\activate
python manage.py makemigrations
python manage.py migrate
```

Collect static files for production (before serving):

```cmd
python manage.py collectstatic --noinput
```

---

## Deployment Notes

- Use `gunicorn` as the WSGI server in production.
- Ensure `SECRET_KEY`, `DEBUG=False`, `ALLOWED_HOSTS`, and `DATABASE_URL` are configured in environment variables on the host.
- Use a proper static file serving strategy (e.g., S3/CloudFront or WhiteNoise for simple deployments).
- Example `Procfile` for platforms like Heroku:

```
web: gunicorn backend.wsgi --log-file -
```

---

## Troubleshooting (Postgres DNS / Connection)

If you see an error like:

```
could not translate host name "dpg-d4n85cggjchc73bt7ttg-a" to address: Name or service not known
```

Follow these steps:

1. Verify the full hostname from the provider — managed providers include a domain suffix (example: `dpg-xxxxx-do-user-xxx-0.db.ondigitalocean.com`). If the host looks truncated, copy the full connection string from the DB dashboard.

2. Quick DNS test (Windows cmd):

```cmd
nslookup your-db-hostname
tracert your-db-hostname
powershell -Command "Test-NetConnection -ComputerName your-db-hostname -Port 5432"
```

3. If `nslookup` fails, the hostname is wrong or private. Use the provider's connection string or set up a VPN / SSH tunnel.

4. If DNS resolves but TCP fails, check firewall rules and provider allowlists — add your public IP if required.

5. For SSL issues, ensure the connection string has `?sslmode=require` or configure `OPTIONS['sslmode']='require'` in Django `DATABASES` when appropriate.

If you want, paste the full connection string (redact password) and I can check it for obvious problems.

---

## Security Checklist Before Production

- [ ] Set `DEBUG=False` in production
- [ ] Provide a strong `SECRET_KEY` via env var
- [ ] Set `ALLOWED_HOSTS` to your domain(s)
- [ ] Configure `CORS_ALLOWED_ORIGINS` (do not use `CORS_ALLOW_ALL_ORIGINS=True` in prod)
- [ ] Enable `SECURE_SSL_REDIRECT`, `SESSION_COOKIE_SECURE`, `CSRF_COOKIE_SECURE` and HSTS settings
- [ ] Use a managed DB with SSL, or ensure secure networking
- [ ] Rotate and protect secrets; do not commit `.env`

---

## Contributing

Contributions are welcome. Please:

1. Fork the repo
2. Create a feature branch
3. Make changes and run tests
4. Open a PR with a description of your changes

---

## License

This project is provided as-is. Add your preferred license here.

---

If you'd like, I can also:

- Add a `backend/requirements.txt` file populated with the recommended packages.
- Create a minimal `Procfile` and a sample `docker-compose.yml` for local containerized development.
- Add a short CONTRIBUTING.md and code style guide.

If you want any of those, tell me which and I will add them next.