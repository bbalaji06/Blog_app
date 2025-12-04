<div align="center">

# 📝 Blog Application

**A modern full-stack blog application built with Django & React**

[![Django](https://img.shields.io/badge/Django-5.x-092E20?style=for-the-badge&logo=django)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python)](https://www.python.org/)

*Beautiful • Fast • Modern*

---

</div>

## ✨ Features

- 🔐 **User Authentication** - Secure signup and login with token-based auth
- ✍️ **Create Posts** - Write and publish your blog posts
- ✏️ **Edit & Delete** - Full CRUD operations for your content
- 🎨 **Modern UI** - Beautiful, responsive design with smooth animations
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Django 5.x, Django REST Framework |
| **Frontend** | React 19.x, Vite, React Router |
| **Database** | PostgreSQL (production) / SQLite (dev) |
| **Authentication** | Token-based auth |
| **API** | RESTful API |

---

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- Node.js 20+ 
- PostgreSQL (optional for production)

### Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# Windows:
.venv\Scripts\activate
# Mac/Linux:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (see Environment Variables below)

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

### Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env file with:
# VITE_API_URL=http://localhost:8000

# Start development server
npm run dev
```

---

## 📋 Environment Variables

### Backend (`.env` in `backend/`)

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

### Frontend (`.env` in `frontend/`)

```env
VITE_API_URL=http://localhost:8000
```

> **Note:** For production, set `DEBUG=False` and use your production API URL.

---

## 📦 Project Structure

```
Blog_app/
├── backend/          # Django REST API
│   ├── blog/        # Main app
│   ├── backend/     # Django settings
│   └── manage.py
│
└── frontend/        # React application
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── styles/
    │   └── api/
    └── package.json
```

---

## 🗄️ Database

- **Development:** SQLite (automatic if `DATABASE_URL` not set)
- **Production:** PostgreSQL (configure via `DATABASE_URL`)

**Run migrations:**
```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```

---

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/signup/` | Create new user account |
| `POST` | `/login/` | User login |
| `POST` | `/logout/` | User logout |
| `GET` | `/posts/` | Get all posts |
| `POST` | `/create/` | Create new post (auth required) |
| `GET` | `/posts/my-posts/` | Get user's posts (auth required) |
| `PUT` | `/posts/<id>/update/` | Update post (auth required) |
| `DELETE` | `/posts/<id>/delete/` | Delete post (auth required) |

---

## 🚢 Deployment

### Production Checklist

- ✅ Set `DEBUG=False`
- ✅ Configure `SECRET_KEY` via environment variable
- ✅ Set `ALLOWED_HOSTS` to your domain
- ✅ Use PostgreSQL database
- ✅ Configure CORS settings
- ✅ Set up static file serving (WhiteNoise/S3)
- ✅ Enable SSL/HTTPS

**Deploy with Gunicorn:**
```bash
gunicorn backend.wsgi:application
```

---

## 🐛 Troubleshooting

**Issue:** `Invalid HTTP_HOST header`  
**Solution:** Add your domain to `ALLOWED_HOSTS` in settings

**Issue:** CORS errors  
**Solution:** Configure `CORS_ALLOWED_ORIGINS` or check `CORS_ALLOW_ALL_ORIGINS` setting

**Issue:** Database connection fails  
**Solution:** Verify `DATABASE_URL` format: `postgresql://user:pass@host:port/dbname`

---

## 📄 License

This project is provided as-is for educational purposes.

---

<div align="center">

**Made with ❤️ using Django & React**

⭐ Star this repo if you found it helpful!

</div>