🛒 Biota Orgánicos – MVP eCommerce React

Biota Orgánicos es una plataforma de e-commerce que conecta consumidores con productores locales de alimentos orgánicos en Caldas, Antioquia. Este proyecto es un Producto Mínimo Viable (MVP) desarrollado con fines educativos usando React y JavaScript moderno.


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

¿Quieres que te ayude a subir esto a GitHub y hacer el primer commit/documentación?

 + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
