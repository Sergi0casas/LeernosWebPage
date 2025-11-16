import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- BASE DE DATOS DE CURSOS COMPLETA ---
const coursesDatabase = {
  1: {
    id: 1,
    title: 'Análisis de Datos con Python',
    description: 'Aprende a analizar y visualizar datos usando Python, pandas, matplotlib y más. Domina las técnicas esenciales del análisis de datos.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=80&w=800',
    duration: '12 semanas',
    level: 'Intermedio',
    students: 2450,
    rating: 4.9,
    topics: ['Python Básico', 'Pandas y NumPy', 'Visualización de Datos', 'Análisis Estadístico', 'Machine Learning Básico'],
    professors: [
      { id: 1, name: 'Dra. Elena Valdés', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&w=200', rating: 4.9, university: 'Universidad Politécnica', experience: '12 años de experiencia', recognitions: ['Premio a la Innovación Docente 2023', 'Publicación en "Journal of Data Science"'], pricePerHour: 35000 },
      { id: 2, name: 'Dr. Ricardo Morales', avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&q=80&w=200', rating: 4.7, university: 'Tecnológico de Monterrey', experience: '9 años de experiencia', recognitions: ['Certificación en Machine Learning por Stanford'], pricePerHour: 30000 },
      { id: 3, name: 'M.Sc. Sofía Navarro', avatarUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&q=80&w=200', rating: 4.8, university: 'Universidad de los Andes', experience: '7 años de experiencia', recognitions: ['Especialista en Visualización de Datos'], pricePerHour: 28000 },
    ],
  },
  2: {
    id: 2,
    title: 'Machine Learning Aplicado',
    description: 'Domina los algoritmos de Machine Learning más utilizados en la industria. Aprende a crear modelos predictivos y de clasificación.',
    imageUrl: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&q=80&w=800',
    duration: '16 semanas',
    level: 'Avanzado',
    students: 1890,
    rating: 4.8,
    topics: ['Regresión Lineal', 'Árboles de Decisión', 'Redes Neuronales', 'Deep Learning', 'Proyectos Reales'],
    professors: [
      { id: 4, name: 'Dr. Javier Gómez', avatarUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&q=80&w=200', rating: 4.8, university: 'MIT', experience: '15 años de experiencia', recognitions: ['PhD en Inteligencia Artificial', 'Investigador en Google AI'], pricePerHour: 50000 },
      { id: 5, name: 'Dr. Carlos Mendoza', avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&q=80&w=200', rating: 4.7, university: 'Stanford University', experience: '10 años de experiencia', recognitions: ['Autor de "ML en Producción"'], pricePerHour: 45000 },
    ],
  },
  3: {
    id: 3,
    title: 'Marketing en Redes Sociales',
    description: 'Aprende a crear estrategias de marketing digital efectivas en todas las plataformas sociales. Aumenta tu audiencia y conversiones.',
    imageUrl: 'https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&q=80&w=800',
    duration: '8 semanas',
    level: 'Principiante',
    students: 3200,
    rating: 4.7,
    topics: ['Facebook Ads', 'Instagram Marketing', 'TikTok para Negocios', 'Análisis de Métricas', 'Estrategias de Contenido'],
    professors: [
      { id: 6, name: 'Carlos Ruiz', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=80&w=200', rating: 4.7, university: 'ESAN', experience: '8 años de experiencia', recognitions: ['Certificado por Facebook Blueprint', 'Consultor de Marketing Digital'], pricePerHour: 25000 },
      { id: 7, name: 'Ana Martínez', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&q=80&w=200', rating: 4.8, university: 'Universidad de Marketing', experience: '6 años de experiencia', recognitions: ['Influencer Marketing Expert'], pricePerHour: 28000 },
    ],
  },
  4: {
    id: 4,
    title: 'Desarrollo Web con React',
    description: 'Conviértete en un desarrollador Front-End profesional. Aprende React, React Router, Redux y crea aplicaciones web modernas.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&q=80&w=800',
    duration: '14 semanas',
    level: 'Intermedio',
    students: 2800,
    rating: 4.9,
    topics: ['React Fundamentals', 'Hooks y Context', 'Redux', 'React Router', 'Proyectos Fullstack'],
    professors: [
      { id: 8, name: 'Sofía Navarro', avatarUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&q=80&w=200', rating: 4.9, university: 'Universidad de los Andes', experience: '7 años de experiencia', recognitions: ['Senior Developer en Mercado Libre', 'Speaker en React Conf'], pricePerHour: 38000 },
      { id: 9, name: 'Miguel Torres', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=80&w=200', rating: 4.8, university: 'Platzi', experience: '9 años de experiencia', recognitions: ['Full Stack Developer', 'Creador de cursos en línea'], pricePerHour: 35000 },
    ],
  },
};

// --- COMPONENTE REUTILIZABLE PARA LAS ESTRELLAS (SIN CAMBIOS) ---
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
  const starStyle = { color: '#ffc107', fontSize: '1.2rem', marginRight: '2px' };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      {[...Array(fullStars)].map((_, i) => <span key={`full_${i}`} style={starStyle}>★</span>)}
      {halfStar && <span style={starStyle}>½</span>}
      {[...Array(emptyStars)].map((_, i) => <span key={`empty_${i}`} style={{...starStyle, color: '#e0e0e0'}}>☆</span>)}
      <span style={{ marginLeft: '8px', color: '#555', fontWeight: 'bold' }}>{rating.toFixed(1)}</span>
    </div>
  );
};


// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
const CourseDetailsPage = () => {
  // Obtiene el ID del curso desde la URL
  const { id } = useParams();
  
  // Buscar primero en la base de datos predefinida
  let courseData = coursesDatabase[id];
  
  // Si no existe, buscar en cursos creados por profesores
  if (!courseData) {
    const customCourses = JSON.parse(localStorage.getItem('customCourses') || '[]');
    courseData = customCourses.find(course => course.id == id);
  }
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSchedule = (professorName, price) => {
    alert(`Has solicitado agendar una clase con ${professorName} por $${price.toLocaleString('es-CO')}. Revisa tu correo para confirmar.`);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Si no existe el curso, muestra un mensaje de error
  if (!courseData) {
    return <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Curso no encontrado</h1>
      <p>El curso que buscas no existe.</p>
    </div>;
  }
  
  // --- ESTILOS MEJORADOS ---
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    colorScheme: 'light',
  };

  const heroStyle = {
    position: 'relative',
    height: 'clamp(250px, 50vw, 400px)',
    backgroundImage: `url(${courseData.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 'clamp(20px, 5vw, 40px)',
    marginTop: '70px', // Compensar la altura del header sticky
  };

  const heroOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(2px)',
  };

  const heroContentStyle = {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '800px',
    padding: 'clamp(15px, 3vw, 20px)',
  };

  const contentWrapperStyle = { position: 'relative', zIndex: 1, padding: '0 clamp(15px, 3vw, 20px) clamp(40px, 8vw, 60px)', maxWidth: '1200px', margin: '0 auto' };
  
  const courseInfoStyle = {
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: 'clamp(20px, 4vw, 30px)',
    marginBottom: 'clamp(25px, 5vw, 40px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  };

  const courseTitleStyle = { fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 'bold', margin: '0 0 20px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' };
  const subtitleStyle = { fontSize: 'clamp(1rem, 3vw, 1.4rem)', marginTop: '10px', opacity: 0.95 };
  
  const statsContainerStyle = {
    display: 'flex',
    gap: 'clamp(15px, 4vw, 30px)',
    justifyContent: 'center',
    marginTop: 'clamp(20px, 4vw, 30px)',
    flexWrap: 'wrap',
  };

  const statItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'clamp(12px, 2vw, 15px) clamp(15px, 3vw, 25px)',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '10px',
    backdropFilter: 'blur(5px)',
  };

  const statValueStyle = { fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 'bold' };
  const statLabelStyle = { fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', marginTop: '5px', opacity: 0.9 };

  const sectionTitleStyle = {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 'clamp(15px, 3vw, 20px)',
    borderLeft: '5px solid #0056d2',
    paddingLeft: 'clamp(10px, 2vw, 15px)',
  };

  const topicsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))',
    gap: 'clamp(10px, 2vw, 15px)',
    marginBottom: 'clamp(20px, 4vw, 30px)',
  };

  const topicItemStyle = {
    padding: 'clamp(12px, 2vw, 15px)',
    backgroundColor: '#f0f4ff',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '500',
    color: '#0056d2',
    border: '1px solid #d0e0ff',
    fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
  };
  const professorListStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 25px)', marginTop: 'clamp(25px, 5vw, 40px)' };
  const professorCardStyle = { backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)', padding: 'clamp(20px, 4vw, 30px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease' };
  const professorCardHoverStyle = (e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)'; };
  const professorCardLeaveStyle = (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)'; };
  const avatarStyle = { width: 'clamp(80px, 15vw, 120px)', height: 'clamp(80px, 15vw, 120px)', borderRadius: '50%', objectFit: 'cover', border: '4px solid #0056d2', marginBottom: 'clamp(15px, 3vw, 20px)' };
  const nameStyle = { fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 'bold', color: '#333', margin: '0 0 5px 0' };
  const universityStyle = { fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', color: '#777', margin: '0 0 10px 0' };
  const experienceStyle = { fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', color: '#777', margin: '0 0 15px 0' };
  const priceStyle = { fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 'bold', color: '#0056d2', margin: '15px 0 20px 0' };
  const recognitionsContainerStyle = { marginTop: '15px', borderTop: '1px solid #f0f0f0', paddingTop: '15px', width: '100%', textAlign: 'left' };
  const recognitionsTitleStyle = { fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' };
  const recognitionItemStyle = { listStyleType: "'🏆'", paddingLeft: '10px', marginLeft: '20px', color: '#555', marginBottom: '5px', fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)' };
  const scheduleButtonStyle = { backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 25px)', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', fontWeight: 'bold', cursor: 'pointer', marginTop: 'clamp(20px, 4vw, 25px)', transition: 'background-color 0.3s ease, transform 0.2s ease' };

  return (
    <div style={pageStyle} data-color-scheme="light">
      <Header />
      
      {/* Hero Section con imagen del curso */}
      <div style={heroStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={courseTitleStyle}>{courseData.title}</h1>
          <p style={subtitleStyle}>{courseData.description}</p>
          
          {/* Estadísticas del curso */}
          <div style={statsContainerStyle}>
            <div style={statItemStyle}>
              <div style={statValueStyle}>⭐ {courseData.rating}</div>
              <div style={statLabelStyle}>Calificación</div>
            </div>
            <div style={statItemStyle}>
              <div style={statValueStyle}>👥 {courseData.students.toLocaleString()}</div>
              <div style={statLabelStyle}>Estudiantes</div>
            </div>
            <div style={statItemStyle}>
              <div style={statValueStyle}>📅 {courseData.duration}</div>
              <div style={statLabelStyle}>Duración</div>
            </div>
            <div style={statItemStyle}>
              <div style={statValueStyle}>📊 {courseData.level}</div>
              <div style={statLabelStyle}>Nivel</div>
            </div>
          </div>
        </div>
      </div>

      <div style={contentWrapperStyle}>
        {/* Sección de información del curso */}
        <div style={courseInfoStyle}>
          <h2 style={sectionTitleStyle}>¿Qué aprenderás?</h2>
          <div style={topicsGridStyle}>
            {courseData.topics.map((topic, index) => (
              <div key={index} style={topicItemStyle}>
                ✓ {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Sección de profesores */}
        <div style={courseInfoStyle}>
          <h2 style={sectionTitleStyle}>Profesores del Curso</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Conoce a los profesores que imparten este curso y agenda tu clase personalizada
          </p>
          
          <div style={professorListStyle}>
            {courseData.professors.map(prof => (
              <div 
                key={prof.id} 
                style={professorCardStyle}
                onMouseEnter={professorCardHoverStyle}
                onMouseLeave={professorCardLeaveStyle}
              >
                <img src={prof.avatarUrl} alt={prof.name} style={avatarStyle} />
                <h2 style={nameStyle}>{prof.name}</h2>
                <StarRating rating={prof.rating} />
                <p style={universityStyle}>🏫 {prof.university}</p>
                <p style={experienceStyle}>🕰️ {prof.experience}</p>
                <p style={priceStyle}>${prof.pricePerHour.toLocaleString('es-CO')} COP/hora</p>
                {prof.recognitions && prof.recognitions.length > 0 && (
                  <div style={recognitionsContainerStyle}>
                    <h3 style={recognitionsTitleStyle}>Reconocimientos Notables</h3>
                    <ul style={{ padding: 0, margin: 0 }}>
                      {prof.recognitions.map((rec, index) => (
                        <li key={index} style={recognitionItemStyle}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button 
                  style={scheduleButtonStyle} 
                  onClick={() => handleSchedule(prof.name, prof.pricePerHour)}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
                >
                  Agendar Clase
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Exportar la base de datos para uso en otros componentes
export { coursesDatabase };
export default CourseDetailsPage;