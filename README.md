# moreiracristian.com.ar

Sitio web personal de Cristian Moreira — Analista de Datos para PyMEs. Diseñado para comunicar propuesta de valor, mostrar proyectos y recibir consultas de potenciales clientes.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Base de datos | Neon (PostgreSQL serverless) |
| Email | Resend |
| Íconos | Lucide React |

## Estructura del proyecto

```
frontend/
├── app/
│   ├── page.tsx              # Home (single-page)
│   ├── layout.tsx            # Root layout + metadatos
│   ├── blog/
│   │   ├── page.tsx          # Listado de posts
│   │   └── [slug]/page.tsx   # Post individual
│   └── api/
│       ├── contact/route.ts  # Formulario de contacto → DB + email
│       └── subscribe/route.ts# Newsletter
├── components/               # Secciones de la home
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Segments.tsx
│   ├── Services.tsx
│   ├── HowIWork.tsx
│   ├── Projects.tsx
│   ├── TechExpertise.tsx
│   ├── BlogTeaser.tsx
│   ├── About.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Newsletter.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── contexts/
│   └── LanguageContext.tsx   # i18n ES / EN
└── lib/
    └── translations.ts       # Textos en ambos idiomas
```

## Variables de entorno

Crear `frontend/.env.local` con:

```env
# Neon (PostgreSQL)
POSTGRES_URL=postgres://...

# Resend (emails de contacto — opcional en desarrollo)
RESEND_API_KEY=re_...
```

Sin `RESEND_API_KEY`, el formulario de contacto igual guarda en DB pero no envía email.

## Desarrollo local

```bash
cd frontend
npm install
npm run dev
```

La app queda disponible en `http://localhost:3000`.

## Base de datos

El formulario de contacto persiste mensajes en una tabla `contacts`. Para crearla en Neon:

```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Contacto

moreiracristian@2moreit.com
