# 👨‍🏫 Guía de Profesores Disponibles

## ✅ Cambios Implementados

He agregado **10 profesores completos** en la sección "Encuentra un tutor" del HomePage y mejorado la navegación según el rol del usuario.

## 🎓 Lista de 10 Profesores Disponibles

### 1. **Dra. Michelle Burns** 🏴󠁧󠁢󠁳󠁣󠁴󠁿
- **Origen:** Scotland → Mauritius
- **Desde:** 2022
- **Clases:**
  - Inglés Conversacional
  - Inglés de Negocios
  - Preparación TOEFL
- **Precio:** $25,000 COP/hora
- **Disponibilidad:** Lun-Vie: 9:00 AM - 6:00 PM
- **Especialidad:** TESOL certificada, 10+ años enseñando inglés

### 2. **Prof. Colleen Smith** 🇺🇸
- **Origen:** Wisconsin, USA
- **Desde:** 2020
- **Clases:**
  - Literatura Inglesa
  - Escritura Creativa
  - Análisis de Textos
- **Precio:** $30,000 COP/hora
- **Disponibilidad:** Mar-Sáb: 10:00 AM - 8:00 PM
- **Especialidad:** Maestría en Escritura Creativa

### 3. **Dr. Ronnie Clarke** 🇬🇧
- **Origen:** United Kingdom
- **Desde:** 2018
- **Clases:**
  - Programación Python
  - Desarrollo Web
  - Bases de Datos SQL
- **Precio:** $35,000 COP/hora
- **Disponibilidad:** Lun-Dom: 2:00 PM - 11:00 PM
- **Especialidad:** Ingeniero de software, 15 años experiencia

### 4. **Dra. Elena Valdés** 🇨🇴
- **Origen:** Colombia (Bogotá)
- **Desde:** 2019
- **Clases:**
  - Análisis de Datos
  - Estadística Aplicada
  - Python para Ciencia de Datos
- **Precio:** $32,000 COP/hora
- **Disponibilidad:** Lun-Vie: 2:00 PM - 9:00 PM
- **Especialidad:** Doctora en Ciencias de Datos

### 5. **Ing. Carlos Mendoza** 🇲🇽
- **Origen:** México (CDMX)
- **Desde:** 2021
- **Clases:**
  - Machine Learning
  - Deep Learning
  - Inteligencia Artificial
- **Precio:** $40,000 COP/hora
- **Disponibilidad:** Mar-Sáb: 4:00 PM - 10:00 PM
- **Especialidad:** Certificado Stanford, experto en redes neuronales

### 6. **Mtra. Ana Martínez** 🇪🇸
- **Origen:** España (Barcelona)
- **Desde:** 2020
- **Clases:**
  - Marketing Digital
  - SEO y SEM
  - Redes Sociales para Negocios
- **Precio:** $28,000 COP/hora
- **Disponibilidad:** Lun-Vie: 8:00 AM - 4:00 PM
- **Especialidad:** Certificación Google, consultora Fortune 500

### 7. **Dr. Javier Gómez** 🇦🇷
- **Origen:** Argentina (Buenos Aires)
- **Desde:** 2017
- **Clases:**
  - Cálculo Diferencial
  - Álgebra Lineal
  - Matemáticas Discretas
- **Precio:** $27,000 COP/hora
- **Disponibilidad:** Lun-Jue: 6:00 PM - 11:00 PM
- **Especialidad:** PhD en Matemáticas Aplicadas

### 8. **Ing. Sofía Navarro** 🇨🇴
- **Origen:** Colombia (Medellín)
- **Desde:** 2021
- **Clases:**
  - React Avanzado
  - Node.js y Express
  - MongoDB y Bases NoSQL
- **Precio:** $33,000 COP/hora
- **Disponibilidad:** Mar-Sáb: 3:00 PM - 9:00 PM
- **Especialidad:** Senior Developer, creadora de contenido educativo

### 9. **Prof. Roberto Silva** 🇧🇷
- **Origen:** Brasil (São Paulo)
- **Desde:** 2019
- **Clases:**
  - Diseño UX/UI
  - Figma Avanzado
  - Prototipado Rápido
- **Precio:** $31,000 COP/hora
- **Disponibilidad:** Lun-Vie: 10:00 AM - 6:00 PM
- **Especialidad:** 12 años en UX/UI, startups y multinacionales

### 10. **Dra. Patricia Ramos** 🇨🇱
- **Origen:** Chile (Santiago)
- **Desde:** 2018
- **Clases:**
  - Física Cuántica
  - Mecánica Clásica
  - Termodinámica
- **Precio:** $36,000 COP/hora
- **Disponibilidad:** Lun-Vie: 5:00 PM - 10:00 PM
- **Especialidad:** Doctora en Física Cuántica

## 🎯 Navegación Mejorada: "Mis Cursos"

### Lógica Implementada:

El botón **"Mis Cursos"** en el Header ahora redirige según el rol del usuario:

#### **Para Estudiantes:**
```
Clic en "Mis Cursos" → /student-schedule
```
Muestra:
- 🗓️ Horario de [Nombre del Estudiante]
- Clases programadas que tomará
- Enlaces a Zoom para unirse

#### **Para Profesores:**
```
Clic en "Mis Cursos" → /professor-schedule
```
Muestra:
- 🧑‍🏫 Horario del Profesor [Nombre]
- [Institución] • [X años] de experiencia
- Clases que debe impartir
- Código de curso
- Número de estudiantes
- Enlaces a Zoom para iniciar clase

#### **Sin Autenticar:**
```
Clic en "Mis Cursos" → /login
```
Redirige a login para iniciar sesión primero

### Código de la Lógica:

```javascript
// En Header.jsx
<Link 
  to={
    isAuthenticated() 
      ? (user?.role === 'teacher' ? '/professor-schedule' : '/student-schedule') 
      : '/login'
  }
>
  Mis Cursos
</Link>
```

## 📊 Comparación de Horarios

### Student Schedule:
```
🗓️ Horario de María García
Tus próximas clases programadas

[Tarjetas de clases]
- Materia
- Profesor
- Fecha y hora
- Botón "Unirse a la clase"
```

### Professor Schedule:
```
🧑‍🏫 Horario del Profesor Dr. Carlos Mendoza
Universidad Nacional • 10 años de experiencia

[Tarjetas de clases]
- Materia y código
- Fecha y hora
- 28 estudiantes
- Botón "Iniciar Clase"
```

## 🎨 Información Visible de Profesores

Cada tarjeta de profesor muestra:

1. **Header:**
   - Nombre con título (Dr., Dra., Prof., Ing., Mtra.)
   - % Reseñas positivas
   - País de origen con bandera
   - Antigüedad en la plataforma

2. **Biografía:**
   - Especialización
   - Certificaciones
   - Experiencia profesional

3. **📚 Clases que imparte:**
   - Sección destacada en azul
   - Lista de 3 clases principales
   - Formato bullet list

4. **💰 Precio:**
   - Visible en verde
   - Formato: $XX,XXX COP/hora

5. **Destacados:**
   - Badges (1000+ Chats, Certified Teacher)
   - Experiencia verificada

6. **Botón "Programar prueba":**
   - Al hacer clic muestra alert con:
     - Clases que imparte
     - Precio por hora
     - Disponibilidad horaria

## 🔄 Flujo de Usuario Completo

### Flujo de Estudiante:
```
1. Registrarse como estudiante
2. Ver HomePage
3. Clic en "Mis Cursos" → Student Schedule
4. Ver clases programadas
5. Unirse a clases vía Zoom
```

### Flujo de Profesor:
```
1. Registrarse como profesor
2. Completar documentos
3. Ver HomePage
4. Clic en "Mis Cursos" → Professor Schedule
5. Ver clases que debe impartir
6. Iniciar clases vía Zoom
```

## 🎯 Navegación a Sección de Profesores

El botón **"Profesores"** en el Header:
- Hace scroll suave a la sección "Encuentra un tutor"
- Funciona desde cualquier página
- Si estás en otra página, navega a HomePage y luego hace scroll

## 📋 Rangos de Precios

| Rango | Profesores | Materias |
|-------|------------|----------|
| $25,000 - $30,000 | 4 | Idiomas, Marketing, Matemáticas |
| $31,000 - $35,000 | 4 | Programación, Datos, Diseño |
| $36,000 - $40,000 | 2 | ML/IA, Física |

## 🌍 Diversidad de Profesores

- **🇨🇴 Colombia:** 2 profesores
- **🇺🇸 USA:** 1 profesor
- **🇬🇧 UK:** 1 profesor
- **🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland:** 1 profesor
- **🇲🇽 México:** 1 profesor
- **🇪🇸 España:** 1 profesor
- **🇦🇷 Argentina:** 1 profesor
- **🇧🇷 Brasil:** 1 profesor
- **🇨🇱 Chile:** 1 profesor

## ✨ Características Destacadas

### Para Profesores en Professor Schedule:
✅ Muestra su institución y experiencia
✅ Lista de clases programadas que debe impartir
✅ Información de estudiantes inscritos
✅ Enlaces directos para iniciar clases
✅ Código de curso visible

### Para Estudiantes en Student Schedule:
✅ Lista personalizada de clases
✅ Información del profesor de cada clase
✅ Horarios claros
✅ Enlaces para unirse a Zoom
✅ Vista simple y limpia

### En HomePage - Sección Profesores:
✅ 10 profesores con información completa
✅ Variedad de materias (idiomas, programación, marketing, ciencias)
✅ Precios competitivos
✅ Disponibilidad horaria visible
✅ Biografías profesionales
✅ Badges de experiencia
✅ Click en "Programar prueba" muestra detalle completo

## 🚀 Resumen de Funcionalidades

| Funcionalidad | Estado |
|---------------|--------|
| 10 profesores disponibles | ✅ Completo |
| Información de clases por profesor | ✅ Completo |
| Precios y disponibilidad | ✅ Completo |
| Navegación "Mis Cursos" dinámica | ✅ Completo |
| Student Schedule personalizado | ✅ Completo |
| Professor Schedule personalizado | ✅ Completo |
| Scroll a sección profesores | ✅ Completo |
| Alert con info detallada | ✅ Completo |

¡Todo está listo y funcionando! 🎉

