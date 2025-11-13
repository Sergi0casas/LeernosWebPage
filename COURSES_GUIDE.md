# Guía de Uso - Course Details Pages

Este documento explica cómo usar las páginas de detalles de curso en la aplicación Leernos.

## 📚 Cursos Disponibles

La aplicación cuenta con **4 cursos completos**, cada uno con información detallada:

### 1. Análisis de Datos con Python (ID: 1)
- **Nivel**: Intermedio
- **Duración**: 12 semanas
- **Estudiantes**: 2,450
- **Profesores**: Dra. Elena Valdés, Dr. Ricardo Morales, M.Sc. Sofía Navarro
- **Temas**: Python Básico, Pandas y NumPy, Visualización de Datos, Análisis Estadístico, Machine Learning Básico

### 2. Machine Learning Aplicado (ID: 2)
- **Nivel**: Avanzado
- **Duración**: 16 semanas
- **Estudiantes**: 1,890
- **Profesores**: Dr. Javier Gómez (MIT), Dr. Carlos Mendoza (Stanford)
- **Temas**: Regresión Lineal, Árboles de Decisión, Redes Neuronales, Deep Learning, Proyectos Reales

### 3. Marketing en Redes Sociales (ID: 3)
- **Nivel**: Principiante
- **Duración**: 8 semanas
- **Estudiantes**: 3,200
- **Profesores**: Carlos Ruiz, Ana Martínez
- **Temas**: Facebook Ads, Instagram Marketing, TikTok para Negocios, Análisis de Métricas, Estrategias de Contenido

### 4. Desarrollo Web con React (ID: 4)
- **Nivel**: Intermedio
- **Duración**: 14 semanas
- **Estudiantes**: 2,800
- **Profesores**: Sofía Navarro, Miguel Torres
- **Temas**: React Fundamentals, Hooks y Context, Redux, React Router, Proyectos Fullstack

## 🎯 Cómo Usar las Páginas de Curso

### En App.jsx

Para mostrar diferentes cursos, simplemente cambia el valor de `courseId`:

```javascript
function App() {
  const courseId = 1; // Cambia entre 1, 2, 3, o 4
  
  return (
    <div>
      <CourseDetailsPage courseId={courseId} />
    </div>
  );
}
```

### Ejemplos de Uso

```javascript
// Mostrar el curso de Python
<CourseDetailsPage courseId={1} />

// Mostrar el curso de Machine Learning
<CourseDetailsPage courseId={2} />

// Mostrar el curso de Marketing
<CourseDetailsPage courseId={3} />

// Mostrar el curso de React
<CourseDetailsPage courseId={4} />
```

## 🔧 Integración con HomePage

Los cursos en el `HomePage` tienen los mismos IDs:

```javascript
const popularCourses = [
  { id: 1, title: 'Análisis de Datos con Python', ... },
  { id: 2, title: 'Machine Learning Aplicado', ... },
  { id: 3, title: 'Marketing en Redes Sociales', ... },
  { id: 4, title: 'Desarrollo Web con React', ... },
];
```

### Para hacer los cursos clickeables (con React Router):

1. Instalar React Router:
```bash
npm install react-router-dom
```

2. Configurar las rutas en App.jsx:
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

3. Actualizar CourseDetailsPage para usar el parámetro de URL:
```javascript
import { useParams } from 'react-router-dom';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const courseData = coursesDatabase[id];
  // ...resto del código
}
```

4. Hacer las tarjetas clickeables en HomePage:
```javascript
import { Link } from 'react-router-dom';

// En el componente CourseCard
<Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
  <div style={cardStyle}>
    {/* contenido de la tarjeta */}
  </div>
</Link>
```

## 📋 Características de las Páginas de Curso

Cada página de curso incluye:

✅ **Hero Section** con imagen destacada
✅ **Estadísticas del curso** (calificación, estudiantes, duración, nivel)
✅ **Temas que se aprenderán** en formato de grid
✅ **Lista de profesores** con información completa:
   - Avatar y nombre
   - Calificación con estrellas
   - Universidad
   - Años de experiencia
   - Reconocimientos profesionales
   - Precio por hora
   - Botón para agendar clase
✅ **Animaciones hover** en las tarjetas de profesores
✅ **Colores fijos** (no cambia con modo oscuro)
✅ **Header y Footer** integrados

## 🎨 Personalización

Para agregar más cursos, edita el archivo `CourseDetailsPage.jsx`:

```javascript
const coursesDatabase = {
  5: {
    id: 5,
    title: 'Tu Nuevo Curso',
    description: 'Descripción del curso',
    imageUrl: 'URL de la imagen',
    duration: '10 semanas',
    level: 'Intermedio',
    students: 1000,
    rating: 4.8,
    topics: ['Tema 1', 'Tema 2', 'Tema 3'],
    professors: [
      // Array de profesores
    ],
  },
};
```

## 📱 Responsive Design

Las páginas están optimizadas para:
- **Desktop**: Grid de 3 columnas para profesores
- **Tablet**: Grid de 2 columnas
- **Mobile**: Grid de 1 columna

Los estilos se ajustan automáticamente usando `gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'`.

## 🚀 Estado Actual

Actualmente, la aplicación muestra las páginas de curso de forma estática. Para navegación completa, se recomienda implementar React Router como se describe en la sección de integración.

