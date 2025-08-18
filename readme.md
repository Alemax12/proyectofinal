# Proyecto Final - Biblioteca

Este proyecto es una aplicación web de gestión de libros, con frontend en **Angular** y backend en **Node.js/Express** con **MongoDB**.

## Estructura

```
/frontend   -> Proyecto Angular
/backend    -> Proyecto Node.js/Express
```

## Backend

### Configuración
1. Entrar a la carpeta backend:
```
cd backend
```
2. Instalar dependencias:
```
npm install
```
3. Crear un archivo `.env` con tus variables:
```
PORT=5000
MONGO_URI=<tu_uri_mongodb>
```
4. Ejecutar el servidor:
```
npm run dev
```
El backend correrá en `http://localhost:5000`.

## Frontend

### Configuración
1. Entrar a la carpeta frontend:
```
cd frontend
```
2. Instalar dependencias:
```
npm install
```
3. Ejecutar el servidor Angular:
```
ng serve
```
El frontend correrá en `http://localhost:4200`.

## Notas

- Asegúrate de tener un usuario registrado en el backend para iniciar sesión.
- El frontend requiere que el backend esté corriendo para funcionar correctamente.
- El proyecto está listo para pruebas locales o despliegue.

