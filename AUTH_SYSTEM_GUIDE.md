# 🔐 Guía del Sistema de Autenticación

## ✅ Sistema Implementado

He implementado un sistema completo de autenticación usando **React Context API** que identifica automáticamente si el usuario es estudiante o profesor y lo redirige a su cronograma correspondiente.

## 🎯 Funcionalidades Implementadas

### 1. **Registro de Usuario** ✅

Cuando un usuario completa el proceso de registro:

#### **Para Estudiantes:**
1. Completa el formulario de SignUp
2. Selecciona rol "Estudiante"
3. Al enviar → Se registra automáticamente
4. Se redirige a `/student-schedule`
5. Ve su horario de clases

#### **Para Profesores:**
1. Completa el formulario de SignUp inicial
2. Selecciona rol "Profesor"
3. Completa información adicional (institución, experiencia)
4. Sube documentos (cédula y certificado laboral)
5. Al enviar → Se registra automáticamente
6. Se redirige a `/professor-schedule`
7. Ve su horario de clases

### 2. **Header con Nombre de Usuario** ✅

El Header ahora muestra:

**Cuando NO está autenticado:**
- Botón "Iniciar Sesión"
- Botón "Registrarse"

**Cuando SÍ está autenticado:**
- 👤 Nombre del usuario (ej: "👤 Juan Pérez")
- Dropdown al hacer hover con:
  - 📅 Mi Horario → Redirige a su cronograma (estudiante o profesor)
  - 🚪 Cerrar Sesión

### 3. **Protección de Rutas** ✅

Las páginas de horarios están protegidas:
- `/student-schedule` → Solo accesible si está autenticado
- `/professor-schedule` → Solo accesible si está autenticado
- Si intentas acceder sin estar autenticado → Redirige a `/login`

### 4. **Cronogramas Personalizados** ✅

**StudentSchedule:**
- Muestra: "🗓️ Horario de [Nombre del Usuario]"
- Subtítulo: "Tus próximas clases programadas"
- Header y Footer integrados
- Protección de ruta

**ProfessorSchedule:**
- Muestra: "🧑‍🏫 Horario del Profesor [Nombre del Usuario]"
- Subtítulo: "[Institución] • [X años/meses] de experiencia"
- Header y Footer integrados
- Protección de ruta

## 📁 Archivos Creados/Modificados

### Archivos Nuevos:
```
✅ src/context/AuthContext.jsx - Context de autenticación
```

### Archivos Modificados:
```
✅ src/App.jsx                      - Envuelto con AuthProvider
✅ src/components/Header.jsx        - Menú de usuario con nombre
✅ src/pages/RegistrationPage.jsx   - Redirección según rol
✅ src/pages/SignUpProfessor.jsx    - Callback onComplete
✅ src/pages/StudentSchedule.jsx    - Muestra nombre, protección
✅ src/pages/ProfessorSchedule.jsx  - Muestra nombre, protección
```

## 🎮 Cómo Usar el Sistema

### Flujo Completo de Registro:

#### **Registrarse como Estudiante:**

1. Click en "Registrarse" en el Header
2. Completar formulario:
   - Nombre Completo: "María García"
   - Email: "maria@example.com"
   - Contraseña: "********"
3. **NO seleccionar campos adicionales** (aparecen solo para profesor)
4. Seleccionar rol: "🎓 Estudiante"
5. Click en "Crear Cuenta"
6. ✅ Se registra automáticamente
7. ✅ Se redirige a `/student-schedule`
8. ✅ Header muestra: "👤 María García"

#### **Registrarse como Profesor:**

1. Click en "Registrarse" en el Header
2. Completar formulario inicial:
   - Nombre Completo: "Dr. Carlos Mendoza"
   - Email: "carlos@example.com"
   - Contraseña: "********"
3. Seleccionar rol: "🧑‍🏫 Profesor"
4. **Aparecen campos adicionales:**
   - Institución Educativa: "Universidad Nacional"
   - Experiencia: "10" + "Años"
5. Click en "Crear Cuenta" → Va a página de documentos
6. Subir documentos:
   - Cédula (PDF)
   - Certificado Laboral (PDF)
7. Click en "Finalizar Registro"
8. ✅ Se registra automáticamente
9. ✅ Se redirige a `/professor-schedule`
10. ✅ Header muestra: "👤 Dr. Carlos Mendoza"

### Navegación con Usuario Autenticado:

1. **Ver Horario:**
   - Hover sobre el nombre en el Header
   - Click en "📅 Mi Horario"
   - Se redirige al cronograma correspondiente

2. **Cerrar Sesión:**
   - Hover sobre el nombre en el Header
   - Click en "🚪 Cerrar Sesión"
   - Se desloguea y vuelve al HomePage

## 🔧 API del AuthContext

### Funciones Disponibles:

```javascript
import { useAuth } from '../context/AuthContext';

const MyComponent = () => {
  const { 
    user,              // Objeto del usuario actual (null si no está autenticado)
    register,          // Función para registrar usuario
    login,             // Función para hacer login
    logout,            // Función para cerrar sesión
    isAuthenticated,   // Función que retorna true/false
    isStudent,         // Función que retorna true si es estudiante
    isTeacher,         // Función que retorna true si es profesor
  } = useAuth();
  
  // ... tu código
};
```

### Estructura del Objeto `user`:

```javascript
{
  fullName: "Juan Pérez",
  email: "juan@example.com",
  role: "student",  // o "teacher"
  
  // Solo para profesores:
  institution: "Universidad Nacional",
  teachingTime: "10",
  timePeriod: "years" // o "months"
}
```

## 🎨 Personalización del Header

El menú de usuario incluye:

```javascript
// Estado del dropdown
const [showDropdown, setShowDropdown] = useState(false);

// Mostrar/ocultar con hover
onMouseEnter={() => setShowDropdown(true)}
onMouseLeave={() => setShowDropdown(false)}

// Dropdown con animaciones hover
- Hover en nombre → Fondo gris claro
- Hover en "Mi Horario" → Fondo gris claro
- Hover en "Cerrar Sesión" → Fondo rojo claro
```

## 📊 Estados de la Aplicación

### Sin Autenticar:
```
Header: [Inicio] [Mis Cursos] [Profesores] | [Iniciar Sesión] [Registrarse]
```

### Autenticado como Estudiante:
```
Header: [Inicio] [Mis Cursos] [Profesores] | [👤 Juan Pérez ▼]
                                               └─ 📅 Mi Horario (→ /student-schedule)
                                               └─ 🚪 Cerrar Sesión
```

### Autenticado como Profesor:
```
Header: [Inicio] [Mis Cursos] [Profesores] | [👤 Dr. Carlos ▼]
                                               └─ 📅 Mi Horario (→ /professor-schedule)
                                               └─ 🚪 Cerrar Sesión
```

## 🔒 Seguridad Implementada

1. **Protección de Rutas:**
   - Las páginas de horarios verifican autenticación
   - Redirige a `/login` si no está autenticado

2. **Validación en Registro:**
   - Campos required en los formularios
   - Validación de archivos PDF
   - No permite envío sin completar campos

3. **Manejo de Sesión:**
   - Estado global con Context API
   - Logout limpia el estado del usuario
   - Redirige a HomePage al cerrar sesión

## 🚀 Próximos Pasos (Opcional)

Para una implementación en producción, podrías agregar:

1. **Backend Real:**
   - Conectar con API REST
   - Guardar usuarios en base de datos
   - Autenticación con JWT tokens

2. **Persistencia:**
   - LocalStorage para mantener sesión
   - Refresh tokens
   - Remember me

3. **Seguridad Avanzada:**
   - Encriptación de contraseñas (bcrypt)
   - Verificación de email
   - Recuperación de contraseña funcional

4. **Roles y Permisos:**
   - Middleware de autorización
   - Páginas específicas por rol
   - Permisos granulares

## 📝 Notas Importantes

1. **Actualmente es simulación:** Los datos se guardan solo en memoria (React State). Al recargar la página se pierden.

2. **Para producción:** Necesitas implementar un backend que maneje:
   - Registro de usuarios
   - Login con credenciales
   - Almacenamiento de datos
   - Tokens de autenticación

3. **El flujo funciona completamente** para desarrollo y testing.

## 🎯 Resumen

✅ Sistema de autenticación completo
✅ Identifica automáticamente estudiante/profesor
✅ Redirige al cronograma correspondiente
✅ Header muestra nombre del usuario
✅ Menú dropdown con navegación
✅ Protección de rutas implementada
✅ Sin errores de lint
✅ Totalmente funcional

¡El sistema está listo para usarse! 🚀

