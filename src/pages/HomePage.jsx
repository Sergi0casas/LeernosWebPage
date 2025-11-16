import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importa los componentes reutilizables (asumiendo que existen)
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from '../components/SearchBar';
// Ya no necesitamos importar CourseCard porque lo definiremos adentro

// --- DATOS DE EJEMPLO (Cursos predefinidos) ---
const predefinedCourses = [
  { id: 1, title: 'Análisis de Datos con Python', instructor: 'Dra. Elena Valdés', rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=80&w=400' },
  { id: 2, title: 'Machine Learning Aplicado', instructor: 'Dr. Marco Solis', rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&q=80&w=400' },
  { id: 3, title: 'Marketing en Redes Sociales', instructor: 'Carlos Ruiz', rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&q=80&w=400' },
  { id: 4, title: 'Desarrollo Web con React', instructor: 'Sofía Navarro', rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&q=80&w=400' },
];

const tutorsData = [
    { 
      id: 1, 
      name: 'Dra. Michelle Burns', 
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '99%', 
      origin: 'Scotland', 
      livesIn: 'Mauritius', 
      flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 
      since: 2022, 
      bio: 'Especialista en idiomas con certificación TESOL. Más de 10 años enseñando inglés a profesionales.', 
      badges: ['1000+ Chats', 'Certified Teacher'],
      classes: ['Inglés Conversacional', 'Inglés de Negocios', 'Preparación TOEFL'],
      pricePerHour: 25000,
      availability: 'Lun-Vie: 9:00 AM - 6:00 PM'
    },
    { 
      id: 2, 
      name: 'Prof. Colleen Smith', 
      avatarUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '100%', 
      origin: 'Wisconsin, USA', 
      livesIn: '', 
      flag: '🇺🇸', 
      since: 2020, 
      bio: 'Profesora de literatura con maestría en Escritura Creativa. Apasionada por enseñar el arte de escribir.', 
      badges: ['1000+ Chats', 'Certified Teacher'],
      classes: ['Literatura Inglesa', 'Escritura Creativa', 'Análisis de Textos'],
      pricePerHour: 30000,
      availability: 'Mar-Sáb: 10:00 AM - 8:00 PM'
    },
    { 
      id: 3, 
      name: 'Dr. Ronnie Clarke', 
      avatarUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '100%', 
      origin: 'United Kingdom', 
      livesIn: '', 
      flag: '🇬🇧', 
      since: 2018, 
      bio: 'Ingeniero de software con 15 años de experiencia. Especialista en Python y desarrollo web full-stack.', 
      badges: ['1000+ Chats', 'Certified Teacher'],
      classes: ['Programación Python', 'Desarrollo Web', 'Bases de Datos SQL'],
      pricePerHour: 35000,
      availability: 'Lun-Dom: 2:00 PM - 11:00 PM'
    },
    { 
      id: 4, 
      name: 'Dra. Elena Valdés', 
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '98%', 
      origin: 'Colombia', 
      livesIn: 'Bogotá', 
      flag: '🇨🇴', 
      since: 2019, 
      bio: 'Doctora en Ciencias de Datos. Especialista en análisis estadístico y machine learning aplicado.', 
      badges: ['500+ Chats', 'Certified Teacher'],
      classes: ['Análisis de Datos', 'Estadística Aplicada', 'Python para Ciencia de Datos'],
      pricePerHour: 32000,
      availability: 'Lun-Vie: 2:00 PM - 9:00 PM'
    },
    { 
      id: 5, 
      name: 'Ing. Carlos Mendoza', 
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '97%', 
      origin: 'México', 
      livesIn: 'CDMX', 
      flag: '🇲🇽', 
      since: 2021, 
      bio: 'Ingeniero en Machine Learning con certificación de Stanford. Experto en redes neuronales y deep learning.', 
      badges: ['800+ Chats', 'Certified Teacher'],
      classes: ['Machine Learning', 'Deep Learning', 'Inteligencia Artificial'],
      pricePerHour: 40000,
      availability: 'Mar-Sáb: 4:00 PM - 10:00 PM'
    },
    { 
      id: 6, 
      name: 'Mtra. Ana Martínez', 
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '100%', 
      origin: 'España', 
      livesIn: 'Barcelona', 
      flag: '🇪🇸', 
      since: 2020, 
      bio: 'Especialista en Marketing Digital con certificación de Google. Consultora de empresas Fortune 500.', 
      badges: ['1200+ Chats', 'Certified Teacher'],
      classes: ['Marketing Digital', 'SEO y SEM', 'Redes Sociales para Negocios'],
      pricePerHour: 28000,
      availability: 'Lun-Vie: 8:00 AM - 4:00 PM'
    },
    { 
      id: 7, 
      name: 'Dr. Javier Gómez', 
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '99%', 
      origin: 'Argentina', 
      livesIn: 'Buenos Aires', 
      flag: '🇦🇷', 
      since: 2017, 
      bio: 'PhD en Matemáticas Aplicadas. Profesor universitario con pasión por hacer accesible el cálculo y álgebra.', 
      badges: ['2000+ Chats', 'Certified Teacher'],
      classes: ['Cálculo Diferencial', 'Álgebra Lineal', 'Matemáticas Discretas'],
      pricePerHour: 27000,
      availability: 'Lun-Jue: 6:00 PM - 11:00 PM'
    },
    { 
      id: 8, 
      name: 'Ing. Sofía Navarro', 
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '98%', 
      origin: 'Colombia', 
      livesIn: 'Medellín', 
      flag: '🇨🇴', 
      since: 2021, 
      bio: 'Desarrolladora Senior en React y Node.js. Creadora de contenido educativo sobre desarrollo web moderno.', 
      badges: ['600+ Chats', 'Certified Teacher'],
      classes: ['React Avanzado', 'Node.js y Express', 'MongoDB y Bases NoSQL'],
      pricePerHour: 33000,
      availability: 'Mar-Sáb: 3:00 PM - 9:00 PM'
    },
    { 
      id: 9, 
      name: 'Prof. Roberto Silva', 
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '100%', 
      origin: 'Brasil', 
      livesIn: 'São Paulo', 
      flag: '🇧🇷', 
      since: 2019, 
      bio: 'Diseñador UX/UI con más de 12 años de experiencia. Ha trabajado con startups y empresas multinacionales.', 
      badges: ['900+ Chats', 'Certified Teacher'],
      classes: ['Diseño UX/UI', 'Figma Avanzado', 'Prototipado Rápido'],
      pricePerHour: 31000,
      availability: 'Lun-Vie: 10:00 AM - 6:00 PM'
    },
    { 
      id: 10, 
      name: 'Dra. Patricia Ramos', 
      avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&q=80&w=100', 
      positiveReviews: '99%', 
      origin: 'Chile', 
      livesIn: 'Santiago', 
      flag: '🇨🇱', 
      since: 2018, 
      bio: 'Doctora en Física Cuántica. Especialista en física moderna y mecánica cuántica aplicada a tecnología.', 
      badges: ['1500+ Chats', 'Certified Teacher'],
      classes: ['Física Cuántica', 'Mecánica Clásica', 'Termodinámica'],
      pricePerHour: 36000,
      availability: 'Lun-Vie: 5:00 PM - 10:00 PM'
    },
];

const customScrollbarStyles = `
  .horizontal-scroll::-webkit-scrollbar { height: 8px; }
  .horizontal-scroll::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 10px; }
  .horizontal-scroll::-webkit-scrollbar-thumb { background-color: #0056d2; border-radius: 10px; border: 2px solid #f0f0f0; }
  .horizontal-scroll::-webkit-scrollbar-thumb:hover { background-color: #0040a0; }
`;

// --- COMPONENTE CourseCard CORREGIDO ---
const CourseCard = ({ course }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    border: '1px solid #e0e0e0',
    minWidth: '280px',
    maxWidth: '300px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    flexShrink: 0,
  };
  const imageStyle = { width: '100%', height: '150px', objectFit: 'cover' };
  const infoStyle = { padding: '15px', textAlign: 'left' };
  const titleStyle = { fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 'bold', margin: '0 0 5px 0', color: '#333' };
  const instructorStyle = { fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)', color: '#666', margin: '0 0 10px 0' };
  const ratingStyle = { fontWeight: 'bold', color: '#0056d2', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' };

  return (
    <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
    <div 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
      }}
    >
      <img src={course.imageUrl} alt={course.title} style={imageStyle} />
      <div style={infoStyle}>
        {/* --- LÍNEAS CORREGIDAS / AÑADIDAS --- */}
        <h3 style={titleStyle}>{course.title}</h3>
        <p style={instructorStyle}>{course.instructor}</p>
        <span style={ratingStyle}>⭐ {course.rating}</span>
      </div>
    </div>
    </Link>
  );
};

// --- COMPONENTE PARA LA TARJETA DE TUTOR ---
const TutorCard = ({ tutor }) => {
  const handleScheduleClick = () => {
    const classesText = tutor.classes.join('\n• ');
    const message = `
📚 CLASES QUE IMPARTE ${tutor.name}:

• ${classesText}

💰 Precio: $${tutor.pricePerHour.toLocaleString('es-CO')} COP/hora

📅 Disponibilidad:
${tutor.availability}

¿Deseas programar una clase de prueba?
    `.trim();
    
    alert(message);
  };

  const cardStyle = { 
    backgroundColor: 'white', 
    borderRadius: '16px', 
    border: '1px solid #e0e0e0', 
    padding: 'clamp(15px, 3vw, 20px)', 
    textAlign: 'left', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px', 
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    minHeight: '400px'
  };
  const headerStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' };
  const nameStyle = { fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', margin: 0 };
  const avatarStyle = { width: 'clamp(50px, 10vw, 60px)', height: 'clamp(50px, 10vw, 60px)', borderRadius: '50%', objectFit: 'cover' };
  const statsStyle = { fontSize: 'clamp(0.75rem, 1.5vw, 0.8rem)', color: '#666' };
  const bioStyle = { fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', color: '#333', lineHeight: '1.5' };
  const badgeContainerStyle = { display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#f7f7f7', borderRadius: '8px', padding: 'clamp(10px, 2vw, 12px)' };
  const badgeStyle = { fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)', color: '#555' };
  const classesContainerStyle = {
    backgroundColor: '#e8f4ff',
    borderRadius: '8px',
    padding: 'clamp(10px, 2vw, 12px)',
    border: '1px solid #b3d9ff'
  };
  const classesTitleStyle = { 
    fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', 
    fontWeight: 'bold', 
    color: '#0056d2', 
    marginBottom: '8px' 
  };
  const classItemStyle = { 
    fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)', 
    color: '#333', 
    marginBottom: '4px',
    paddingLeft: '4px'
  };
  const priceStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    fontWeight: 'bold',
    color: '#28a745',
    textAlign: 'center',
    marginTop: '8px'
  };
  const buttonStyle = { 
    backgroundColor: '#0056d2', 
    color: 'white', 
    border: 'none', 
    borderRadius: '20px', 
    padding: 'clamp(10px, 2vw, 12px) 0', 
    width: '100%', 
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    marginTop: 'auto',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div 
      style={cardStyle} 
      onMouseEnter={(e) => { 
        e.currentTarget.style.transform = 'translateY(-8px)'; 
        e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,0,0,0.12)'; 
      }} 
      onMouseLeave={(e) => { 
        e.currentTarget.style.transform = 'translateY(0)'; 
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)'; 
      }}
    >
      <div style={headerStyle}>
        <div>
          <h3 style={nameStyle}>{tutor.name}</h3>
          <p style={statsStyle}>{tutor.positiveReviews} de reseñas positivas</p>
          <p style={statsStyle}>{tutor.flag} {tutor.origin} {tutor.livesIn && `(vive en ${tutor.livesIn})`}</p>
          <p style={statsStyle}>Tutor desde {tutor.since}</p>
        </div>
        <img src={tutor.avatarUrl} alt={tutor.name} style={avatarStyle} />
      </div>
      
      <p style={bioStyle}>{tutor.bio}</p>
      
      {/* SECCIÓN DE CLASES QUE IMPARTE */}
      <div style={classesContainerStyle}>
        <div style={classesTitleStyle}>📚 Clases que imparte:</div>
        {tutor.classes.map((className, index) => (
          <div key={index} style={classItemStyle}>
            • {className}
          </div>
        ))}
      </div>

      <div style={priceStyle}>
        💰 ${tutor.pricePerHour.toLocaleString('es-CO')} COP/hora
      </div>
      
      <div style={badgeContainerStyle}>
        <strong>Destacados</strong>
        {tutor.badges.map(badge => ( 
          <span key={badge} style={badgeStyle}>
            {badge === 'Certified Teacher' ? '✅' : '💬'} {badge}
          </span> 
        ))}
      </div>
      
      <button 
        style={buttonStyle}
        onClick={handleScheduleClick}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0040a0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0056d2'}
      >
        Programar prueba
      </button>
    </div>
  );
};

const HomePage = () => {
  const [allCourses, setAllCourses] = useState([]);

  // Cargar cursos (predefinidos + creados por profesores)
  useEffect(() => {
    const customCourses = JSON.parse(localStorage.getItem('customCourses') || '[]');
    // Convertir cursos creados al formato de HomePage
    const formattedCustomCourses = customCourses.map(course => ({
      id: course.id,
      title: course.title,
      instructor: course.instructor,
      rating: course.rating,
      imageUrl: course.imageUrl
    }));
    // Combinar cursos predefinidos con cursos creados
    setAllCourses([...predefinedCourses, ...formattedCustomCourses]);
  }, []);

  const pageStyle = { 
    background: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)', 
    fontFamily: 'Arial, sans-serif' 
  };
  const mainContentStyle = { 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: 'clamp(1rem, 3vw, 2rem)' 
  };
  const sectionTitleStyle = { 
    fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
    fontWeight: 'bold', 
    color: 'black', 
    marginBottom: '1.5rem', 
    borderBottom: '2px solid #ddd', 
    paddingBottom: '0.5rem' 
  };
  const courseListStyle = { 
    display: 'flex', 
    gap: '1.5rem', 
    overflowX: 'auto', 
    flexWrap: 'nowrap', 
    padding: '1rem 0',
    paddingBottom: '1.5rem',
  };
  const tutorSectionStyle = { marginTop: '4rem' };
  const tutorGridStyle = { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', 
    gap: '20px' 
  };

  return (
    <div style={pageStyle}>
      <style>{customScrollbarStyles}</style>
      <Header />
      <SearchBar />
      <main style={mainContentStyle}>
        <section>
          <h2 style={sectionTitleStyle}>Cursos más Populares</h2>
          <div style={courseListStyle} className="horizontal-scroll">
            {allCourses.map(course => ( <CourseCard key={course.id} course={course} /> ))}
          </div>
          {allCourses.length === 0 && (
            <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
              Cargando cursos...
            </p>
          )}
        </section>
        <section id="profesores-section" style={tutorSectionStyle}>
          <h2 style={sectionTitleStyle}>Encuentra un tutor</h2>
          <div style={tutorGridStyle}>
            {tutorsData.map(tutor => ( <TutorCard key={tutor.id} tutor={tutor} /> ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;