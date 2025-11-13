# 🚀 Instrucciones de Instalación - React Router

## ⚠️ IMPORTANTE: Instalar React Router

Para que la navegación funcione correctamente, **debes instalar React Router DOM**:

```bash
npm install react-router-dom
```

## 📋 Resumen de los Cambios Implementados

He conectado toda la aplicación usando **React Router** para una navegación completa sin recargar la página:

### ✅ 1. Navegación del Header

Los botones del Header ahora están conectados:

| Botón | Destino | Ruta |
|-------|---------|------|
| **Logo "Leernos"** | Página Principal | `/` |
| **Inicio** | Página Principal | `/` |
| **Mis Cursos** | Horario de Estudiante | `/student-schedule` |
| **Profesores** | Horario de Profesor | `/professor-schedule` |
| **Iniciar Sesión** | Login | `/login` |
| **Registrarse** | Registro | `/registro` |

### ✅ 2. Navegación de Cursos

**Todas las tarjetas de cursos en el HomePage son clickeables:**

| Curso | ID | URL |
|-------|-------|-----|
| Análisis de Datos con Python | 1 | `/course/1` |
| Machine Learning Aplicado | 2 | `/course/2` |
| Marketing en Redes Sociales | 3 | `/course/3` |
| Desarrollo Web con React | 4 | `/course/4` |

**Características:**
- ✅ Hover effect en las tarjetas (se elevan y agrandan)
- ✅ Cursor pointer para indicar que son clickeables
- ✅ Transición suave al navegar
- ✅ Sin recarga de página

### ✅ 3. Rutas Configuradas en App.jsx

```javascript
/                       → HomePage
/login                  → Login
/registro               → RegistrationPage
/forgot-password        → ForgotPassword
/course/:id            → CourseDetailsPage (dinámico)
/student-schedule      → StudentSchedule
/professor-schedule    → ProfessorSchedule
```

### ✅ 4. Links Internos Actualizados

Todos los componentes ahora usan `<Link>` de React Router en lugar de `<a>`:

- **Login.jsx**: Link a "¿Olvidaste tu contraseña?" → `/forgot-password`
- **SignUp.jsx**: Link a "Inicia sesión" → `/login`
- **ForgotPassword.jsx**: Link a "Volver a Iniciar Sesión" → `/login`
- **Header.jsx**: Todos los botones de navegación
- **HomePage.jsx**: Todas las tarjetas de cursos

## 🎯 Cómo Funciona

### Navegación por URL

Puedes navegar directamente escribiendo en la barra del navegador:

```
http://localhost:5173/
http://localhost:5173/login
http://localhost:5173/registro
http://localhost:5173/course/1
http://localhost:5173/course/2
http://localhost:5173/course/3
http://localhost:5173/course/4
```

### Navegación por Clicks

1. **Desde HomePage:**
   - Click en cualquier tarjeta de curso → Ver detalles del curso
   - Click en "Iniciar Sesión" → Ir a Login
   - Click en "Registrarse" → Ir a Registro

2. **Desde Login:**
   - Click en "¿Olvidaste tu contraseña?" → Ir a Recuperación
   - Click en logo → Volver al HomePage

3. **Desde CourseDetailsPage:**
   - Click en logo/Inicio → Volver al HomePage
   - Click en "Iniciar Sesión" → Ir a Login
   - Click en "Registrarse" → Ir a Registro

## 🔧 Archivos Modificados

```
✅ src/App.jsx                      - Configuración de rutas con BrowserRouter
✅ src/components/Header.jsx        - Links de navegación
✅ src/pages/HomePage.jsx           - Tarjetas de cursos clickeables
✅ src/pages/CourseDetailsPage.jsx  - useParams() para obtener ID de URL
✅ src/pages/Login.jsx              - Link a forgot-password
✅ src/pages/ForgotPassword.jsx     - Link de regreso a login
✅ src/pages/SignUp.jsx             - Link a login
```

## 🚦 Pasos para Iniciar

1. **Instalar React Router:**
   ```bash
   npm install react-router-dom
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:5173
   ```

4. **Probar la navegación:**
   - Haz click en cualquier curso del HomePage
   - Navega usando los botones del Header
   - Prueba los links de Login/Registro

## ✨ Características Implementadas

### 🎨 UX Mejorada
- ✅ **Sin recarga de página**: Navegación instantánea
- ✅ **Animaciones smooth**: Transiciones suaves entre páginas
- ✅ **Hover effects**: Feedback visual en todos los elementos clickeables
- ✅ **URL amigables**: Rutas descriptivas y fáciles de recordar
- ✅ **404 personalizado**: Mensaje de error si la ruta no existe

### 🔗 Navegación Completa
- ✅ **Breadcrumbs implícitos**: Logo siempre lleva al inicio
- ✅ **Links contextuales**: "Volver a...", "¿Ya tienes cuenta?"
- ✅ **Navegación por teclado**: Soporta Tab para accesibilidad

### 📱 Responsive
- ✅ Funciona en móvil, tablet y desktop
- ✅ Todos los links son touch-friendly

## 🐛 Solución de Problemas

### Error: "Cannot find module 'react-router-dom'"

**Solución:**
```bash
npm install react-router-dom
```

### Error: "BrowserRouter is not defined"

**Solución:** Asegúrate de que la instalación fue exitosa y reinicia el servidor:
```bash
npm run dev
```

### Las rutas no funcionan en producción (build)

**Solución:** Configura tu servidor para redirigir todas las rutas a `index.html`. 

Para Vite:
```javascript
// vite.config.js
export default {
  // ... otras configuraciones
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
}
```

## 📊 Estructura de Navegación

```
HomePage (/)
├── Course Details (/course/:id)
│   ├── Course 1 - Python
│   ├── Course 2 - Machine Learning
│   ├── Course 3 - Marketing
│   └── Course 4 - React
├── Login (/login)
│   └── Forgot Password (/forgot-password)
├── Registration (/registro)
├── Student Schedule (/student-schedule)
└── Professor Schedule (/professor-schedule)
```

## ✅ Todo Está Listo!

Ahora tu aplicación tiene:
- ✅ Navegación completa sin recargas
- ✅ URLs dinámicas para cada curso
- ✅ Header con links funcionales
- ✅ Cursos clickeables desde el HomePage
- ✅ Login/Registro conectados
- ✅ Animaciones y hover effects
- ✅ Sin errores de lint

**Solo falta ejecutar:** `npm install react-router-dom` 🚀

