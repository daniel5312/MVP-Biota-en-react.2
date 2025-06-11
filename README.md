🛒 Biota Orgánicos – MVP eCommerce React

Biota Orgánicos es una plataforma de e-commerce que conecta consumidores con productores locales de alimentos orgánicos en Caldas, Antioquia. Este proyecto es un Producto Mínimo Viable (MVP) desarrollado con fines educativos usando React y JavaScript moderno.

# Biota Orgánicos 🌿

**Biota Orgánicos** es un MVP (Producto Mínimo Viable) de una plataforma e-commerce desarrollada con React, que busca conectar a consumidores con productores de alimentos orgánicos bajo principios de agricultura regenerativa.
# 🌱 Biota Orgánicos - Frontend

Este es el **frontend** de la aplicación **Biota Orgánicos**, una plataforma web que conecta consumidores con productores de agricultura regenerativa y orgánica en Colombia.

Desarrollado con **React + Vite** y conectado a un backend en **Spring Boot**, este sistema permite registrar, autenticar y administrar usuarios (productores y consumidores), así como visualizar y gestionar productos agrícolas de forma intuitiva.

---

## 📦 Tecnologías utilizadas

### Frontend:
- ⚛️ React
- ⚡ Vite
- 🎨 Bootstrap 5
- 📡 Fetch API
- 🧠 LocalStorage

### Backend (en otro repositorio):
- ☕ Spring Boot 3.5
- 🐘 MySQL (phpMyAdmin / XAMPP)
- 🧰 JPA + Hibernate
- 🔐 CORS + login básico
- 🚀 Maven

---

## 📁 Estructura de Carpetas (Frontend)


---

## 🧩 Características

- ✅ Registro e inicio de sesión con localStorage y springBoot
- ✅ Rutas protegidas según el rol (`consumidor` / `productor`)
- ✅ Página de tienda con productos combinados (estáticos y agregados por productores)
- ✅ Detalles individuales del producto
- ✅ Perfil del productor y listado de sus productos
- ✅ Agregar productos desde el rol productor
- ✅ Navegación protegida con React Router DOM
- ✅ Estilos con CSS puro

---

## 🚀 Tecnologías usadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- JavaScript moderno (ES6+)
- HTML + CSS puro
- `localStorage` para simular persistencia de datos

---

## 📁 Estructura de carpetas


/src
├── components/          # Componentes reutilizables como NavbarApp
├── data/                # Datos base como products.js
├── pages/               # Vistas: Login, Home, Tienda, ProductoDetalle, etc.
├── styles/              # Estilos globales o por componente
├── App.jsx              # Definición de rutas
└── main.jsx             # Punto de entrada

---

✨ Funcionalidades principales

Registro e inicio de sesión para consumidores y productores

Persistencia de sesión con localStorage

Navegación protegida por rol (consumidor o productor)

Vista de tienda con productos orgánicos

Detalle de producto

Perfil de productor (pendiente de implementación)

Estilos personalizados con CSS puro (sin Bootstrap)



---

🧱 Tecnologías usadas

React

React Router DOM

useState, useEffect

localStorage para simular persistencia de usuarios

CSS puro para estilos
y Bootstrap para componentes


---

📁 Estructura del proyecto

src/
├── components/        # Navbar y componentes reutilizables
├── data/              # Productos simulados (products.js)
├── pages/             # Login, Registro, Home, Tienda, etc.
├── styles/            # Estilos globales
├── App.jsx            # Rutas principales
├── main.jsx           # Punto de entrada


---

🧪 ¿Cómo correr este proyecto?

# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/biota-org.git
cd biota-org

# 2. Instalar dependencias
npm install

# 3. Ejecutar el proyecto
npm run dev

Luego abre en tu navegador: http://localhost:5173


---

👤 Desarrollado por

Daniel Vargas Hermosa
Estudiante de desarrollo de software, apasionado por la agricultura regenerativa, el software libre y las tecnologías sostenibles.


---

📌 Notas adicionales

Este proyecto es una base funcional para escalar hacia un sistema completo de productores y consumidores.

En futuras versiones se integrará un panel de administración, carga de productos por productor, e integración con backend/API.



---



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
