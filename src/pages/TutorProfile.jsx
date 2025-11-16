import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Base de datos de tutores (sincronizada con HomePage)
const tutorsDatabase = {
  1: {
    id: 1,
    name: 'Dra. Michelle Burns',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '99%',
    origin: 'Scotland',
    livesIn: 'Mauritius',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    since: 2022,
    bio: 'Especialista en idiomas con certificación TESOL. Más de 10 años enseñando inglés a profesionales.',
    badges: ['1000+ Chats', 'Certified Teacher'],
    classes: ['Inglés Conversacional', 'Inglés de Negocios', 'Preparación TOEFL'],
    pricePerHour: 25000,
    availability: 'Lun-Vie: 9:00 AM - 6:00 PM',
    rating: 4.9,
    totalStudents: 456,
    completedClasses: 1234,
    reviews: [
      { id: 1, student: 'María González', rating: 5, date: '2024-10-15', comment: 'Excelente profesora, muy paciente y didáctica. Recomendada 100%!' },
      { id: 2, student: 'Carlos Mendez', rating: 5, date: '2024-10-10', comment: 'Las clases son muy dinámicas y aprendo mucho. Michelle es una gran profesional.' },
      { id: 3, student: 'Ana Ruiz', rating: 4, date: '2024-10-05', comment: 'Muy buena profesora, me ayudó mucho con mi preparación para el TOEFL.' },
      { id: 4, student: 'Pedro Silva', rating: 5, date: '2024-09-28', comment: 'Increíble metodología de enseñanza. Ya veo resultados después de pocas clases.' },
      { id: 5, student: 'Laura Martínez', rating: 5, date: '2024-09-20', comment: 'Súper recomendada. Explica todo de manera clara y es muy profesional.' },
    ]
  },
  2: {
    id: 2,
    name: 'Prof. Colleen Smith',
    avatarUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '100%',
    origin: 'Wisconsin, USA',
    livesIn: '',
    flag: '🇺🇸',
    since: 2020,
    bio: 'Profesora de literatura con maestría en Escritura Creativa. Apasionada por enseñar el arte de escribir.',
    badges: ['1000+ Chats', 'Certified Teacher'],
    classes: ['Literatura Inglesa', 'Escritura Creativa', 'Análisis de Textos'],
    pricePerHour: 30000,
    availability: 'Mar-Sáb: 10:00 AM - 8:00 PM',
    rating: 5.0,
    totalStudents: 389,
    completedClasses: 987,
    reviews: [
      { id: 1, student: 'Sofia Ramírez', rating: 5, date: '2024-10-18', comment: 'La mejor profesora de literatura que he tenido. Sus clases son inspiradoras.' },
      { id: 2, student: 'Diego Torres', rating: 5, date: '2024-10-12', comment: 'Colleen tiene un don para enseñar. Me ayudó a mejorar mi escritura significativamente.' },
      { id: 3, student: 'Valentina Cruz', rating: 5, date: '2024-10-01', comment: 'Excelente profesora, muy culta y con gran metodología de enseñanza.' },
    ]
  },
  3: {
    id: 3,
    name: 'Dr. Ronnie Clarke',
    avatarUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '100%',
    origin: 'United Kingdom',
    livesIn: '',
    flag: '🇬🇧',
    since: 2018,
    bio: 'Ingeniero de software con 15 años de experiencia. Especialista en Python y desarrollo web full-stack.',
    badges: ['1000+ Chats', 'Certified Teacher'],
    classes: ['Programación Python', 'Desarrollo Web', 'Bases de Datos SQL'],
    pricePerHour: 35000,
    availability: 'Lun-Dom: 2:00 PM - 11:00 PM',
    rating: 4.95,
    totalStudents: 678,
    completedClasses: 1567,
    reviews: [
      { id: 1, student: 'Andrés López', rating: 5, date: '2024-10-20', comment: 'Ronnie es un genio de la programación. Explica conceptos complejos de forma simple.' },
      { id: 2, student: 'Isabella Fernández', rating: 5, date: '2024-10-14', comment: 'Las mejores clases de programación. Aprendí más en un mes que en todo un semestre.' },
      { id: 3, student: 'Miguel Ángel', rating: 5, date: '2024-10-08', comment: 'Súper recomendado para quienes quieren aprender Python desde cero.' },
      { id: 4, student: 'Carolina Gómez', rating: 4, date: '2024-09-30', comment: 'Muy buen profesor, aunque a veces va un poco rápido. En general excelente.' },
    ]
  },
  4: {
    id: 4,
    name: 'Dra. Elena Valdés',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '98%',
    origin: 'Colombia',
    livesIn: 'Bogotá',
    flag: '🇨🇴',
    since: 2019,
    bio: 'Doctora en Ciencias de Datos. Especialista en análisis estadístico y machine learning aplicado.',
    badges: ['500+ Chats', 'Certified Teacher'],
    classes: ['Análisis de Datos', 'Estadística Aplicada', 'Python para Ciencia de Datos'],
    pricePerHour: 32000,
    availability: 'Lun-Vie: 2:00 PM - 9:00 PM',
    rating: 4.9,
    totalStudents: 345,
    completedClasses: 789,
    reviews: [
      { id: 1, student: 'Juan Pérez', rating: 5, date: '2024-10-16', comment: 'Elena es una excelente profesora. Me ayudó mucho con mi proyecto de tesis.' },
      { id: 2, student: 'Camila Rodríguez', rating: 5, date: '2024-10-09', comment: 'Domina completamente el tema. Sus explicaciones son muy claras.' },
      { id: 3, student: 'Roberto Sánchez', rating: 4, date: '2024-10-02', comment: 'Muy buena profesora, solo que a veces las clases son muy densas.' },
    ]
  },
  5: {
    id: 5,
    name: 'Ing. Carlos Mendoza',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '97%',
    origin: 'México',
    livesIn: 'CDMX',
    flag: '🇲🇽',
    since: 2021,
    bio: 'Ingeniero en Machine Learning con certificación de Stanford. Experto en redes neuronales y deep learning.',
    badges: ['800+ Chats', 'Certified Teacher'],
    classes: ['Machine Learning', 'Deep Learning', 'Inteligencia Artificial'],
    pricePerHour: 40000,
    availability: 'Mar-Sáb: 4:00 PM - 10:00 PM',
    rating: 4.85,
    totalStudents: 278,
    completedClasses: 645,
    reviews: [
      { id: 1, student: 'Francisco Díaz', rating: 5, date: '2024-10-17', comment: 'Carlos es un experto en ML. Sus clases son muy prácticas y aplicadas.' },
      { id: 2, student: 'Daniela Morales', rating: 5, date: '2024-10-11', comment: 'Increíble profesor. Me ayudó a entender conceptos complejos de redes neuronales.' },
      { id: 3, student: 'Luis Herrera', rating: 4, date: '2024-10-04', comment: 'Muy buen profesor, aunque el contenido es bastante avanzado.' },
    ]
  },
  6: {
    id: 6,
    name: 'Mtra. Ana Martínez',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '100%',
    origin: 'España',
    livesIn: 'Barcelona',
    flag: '🇪🇸',
    since: 2020,
    bio: 'Especialista en Marketing Digital con certificación de Google. Consultora de empresas Fortune 500.',
    badges: ['1200+ Chats', 'Certified Teacher'],
    classes: ['Marketing Digital', 'SEO y SEM', 'Redes Sociales para Negocios'],
    pricePerHour: 28000,
    availability: 'Lun-Vie: 8:00 AM - 4:00 PM',
    rating: 5.0,
    totalStudents: 512,
    completedClasses: 1456,
    reviews: [
      { id: 1, student: 'Patricia Vargas', rating: 5, date: '2024-10-19', comment: 'Ana es una crack del marketing digital. Sus consejos son oro puro.' },
      { id: 2, student: 'Ricardo Campos', rating: 5, date: '2024-10-13', comment: 'La mejor inversión que he hecho. Mejoré las ventas de mi negocio un 300%.' },
      { id: 3, student: 'Gabriela Ortiz', rating: 5, date: '2024-10-06', comment: 'Súper profesional. Sabe muchísimo y comparte todo su conocimiento.' },
      { id: 4, student: 'Fernando Reyes', rating: 5, date: '2024-09-29', comment: 'Excelente profesora. Sus estrategias de marketing realmente funcionan.' },
    ]
  },
  7: {
    id: 7,
    name: 'Dr. Javier Gómez',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '99%',
    origin: 'Argentina',
    livesIn: 'Buenos Aires',
    flag: '🇦🇷',
    since: 2017,
    bio: 'PhD en Matemáticas Aplicadas. Profesor universitario con pasión por hacer accesible el cálculo y álgebra.',
    badges: ['2000+ Chats', 'Certified Teacher'],
    classes: ['Cálculo Diferencial', 'Álgebra Lineal', 'Matemáticas Discretas'],
    pricePerHour: 27000,
    availability: 'Lun-Jue: 6:00 PM - 11:00 PM',
    rating: 4.95,
    totalStudents: 823,
    completedClasses: 2134,
    reviews: [
      { id: 1, student: 'Martina Silva', rating: 5, date: '2024-10-21', comment: 'Javier hace que las matemáticas sean fáciles. Un profesor excepcional.' },
      { id: 2, student: 'Sebastián Mora', rating: 5, date: '2024-10-15', comment: 'Salvó mi carrera universitaria. Aprobé cálculo gracias a sus clases.' },
      { id: 3, student: 'Lucía Castro', rating: 5, date: '2024-10-09', comment: 'Explica de manera muy clara y paciente. Lo recomiendo al 100%.' },
    ]
  },
  8: {
    id: 8,
    name: 'Ing. Sofía Navarro',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '98%',
    origin: 'Colombia',
    livesIn: 'Medellín',
    flag: '🇨🇴',
    since: 2021,
    bio: 'Desarrolladora Senior en React y Node.js. Creadora de contenido educativo sobre desarrollo web moderno.',
    badges: ['600+ Chats', 'Certified Teacher'],
    classes: ['React Avanzado', 'Node.js y Express', 'MongoDB y Bases NoSQL'],
    pricePerHour: 33000,
    availability: 'Mar-Sáb: 3:00 PM - 9:00 PM',
    rating: 4.9,
    totalStudents: 289,
    completedClasses: 567,
    reviews: [
      { id: 1, student: 'Mateo Jiménez', rating: 5, date: '2024-10-18', comment: 'Sofía es una gran profesora. Sus clases de React son las mejores.' },
      { id: 2, student: 'Valentina Ruiz', rating: 5, date: '2024-10-12', comment: 'Aprendí más con ella que en bootcamps de $2000. Vale cada peso.' },
      { id: 3, student: 'Nicolás Pérez', rating: 4, date: '2024-10-05', comment: 'Muy buena profesora, solo que a veces hay problemas de conexión.' },
    ]
  },
  9: {
    id: 9,
    name: 'Prof. Roberto Silva',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '100%',
    origin: 'Brasil',
    livesIn: 'São Paulo',
    flag: '🇧🇷',
    since: 2019,
    bio: 'Diseñador UX/UI con más de 12 años de experiencia. Ha trabajado con startups y empresas multinacionales.',
    badges: ['900+ Chats', 'Certified Teacher'],
    classes: ['Diseño UX/UI', 'Figma Avanzado', 'Prototipado Rápido'],
    pricePerHour: 31000,
    availability: 'Lun-Vie: 10:00 AM - 6:00 PM',
    rating: 5.0,
    totalStudents: 423,
    completedClasses: 945,
    reviews: [
      { id: 1, student: 'Catalina Ríos', rating: 5, date: '2024-10-20', comment: 'Roberto es un maestro del diseño. Sus clases son muy inspiradoras.' },
      { id: 2, student: 'Emilio Vargas', rating: 5, date: '2024-10-14', comment: 'Increíble profesor. Aprendí Figma en tiempo récord gracias a él.' },
      { id: 3, student: 'Mariana Torres', rating: 5, date: '2024-10-07', comment: 'Sus clases de UX/UI cambiaron mi forma de diseñar. Súper recomendado.' },
    ]
  },
  10: {
    id: 10,
    name: 'Dra. Patricia Ramos',
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&q=80&w=300',
    positiveReviews: '99%',
    origin: 'Chile',
    livesIn: 'Santiago',
    flag: '🇨🇱',
    since: 2018,
    bio: 'Doctora en Física Cuántica. Especialista en física moderna y mecánica cuántica aplicada a tecnología.',
    badges: ['1500+ Chats', 'Certified Teacher'],
    classes: ['Física Cuántica', 'Mecánica Clásica', 'Termodinámica'],
    pricePerHour: 36000,
    availability: 'Lun-Vie: 5:00 PM - 10:00 PM',
    rating: 4.95,
    totalStudents: 567,
    completedClasses: 1345,
    reviews: [
      { id: 1, student: 'Tomás Núñez', rating: 5, date: '2024-10-19', comment: 'Patricia hace que la física cuántica sea comprensible. Una genia total.' },
      { id: 2, student: 'Florencia Paz', rating: 5, date: '2024-10-13', comment: 'Excelente profesora. Pasé de odiar física a amarla gracias a ella.' },
      { id: 3, student: 'Ignacio Vega', rating: 5, date: '2024-10-06', comment: 'Sus explicaciones son muy claras. Aprobé física gracias a sus clases.' },
      { id: 4, student: 'Josefina Rojas', rating: 4, date: '2024-09-28', comment: 'Muy buena profesora, aunque el contenido es bastante complejo.' },
    ]
  },
};

// Componente para estrellas de calificación
const StarRating = ({ rating, size = '1.2rem' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} style={{ color: '#ffc107', fontSize: size }}>★</span>
      ))}
      {hasHalfStar && <span style={{ color: '#ffc107', fontSize: size }}>★</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#e0e0e0', fontSize: size }}>★</span>
      ))}
    </div>
  );
};

const TutorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tutor = tutorsDatabase[id];
  const [selectedClass, setSelectedClass] = useState(tutor?.classes[0] || null);

  if (!tutor) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Tutor no encontrado</h1>
        <p>El perfil que buscas no existe.</p>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px', backgroundColor: '#0056d2', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const handleScheduleClass = () => {
    alert(`¡Solicitud enviada! Pronto recibirás un correo para confirmar tu clase de "${selectedClass}" con ${tutor.name}.`);
  };

  // --- ESTILOS ---
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
    colorScheme: 'light',
  };

  const heroStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: 'clamp(40px, 8vw, 60px) clamp(20px, 4vw, 40px)',
    paddingTop: 'calc(clamp(40px, 8vw, 60px) + 70px)', // Compensar la altura del header sticky
    color: 'white',
  };

  const heroContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(20px, 5vw, 40px)',
    flexWrap: 'wrap',
  };

  const avatarStyle = {
    width: 'clamp(120px, 20vw, 180px)',
    height: 'clamp(120px, 20vw, 180px)',
    borderRadius: '50%',
    border: '5px solid white',
    objectFit: 'cover',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
  };

  const heroInfoStyle = {
    flex: 1,
    minWidth: '280px',
  };

  const nameStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  };

  const locationStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    opacity: 0.95,
    marginBottom: '15px',
  };

  const statsRowStyle = {
    display: 'flex',
    gap: 'clamp(15px, 3vw, 30px)',
    marginTop: '20px',
    flexWrap: 'wrap',
  };

  const statItemStyle = {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 'clamp(10px, 2vw, 15px) clamp(15px, 3vw, 20px)',
    borderRadius: '10px',
    backdropFilter: 'blur(10px)',
  };

  const statValueStyle = {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const statLabelStyle = {
    fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
    opacity: 0.9,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'clamp(20px, 4vw, 40px)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
    gap: 'clamp(20px, 4vw, 30px)',
    marginBottom: 'clamp(30px, 5vw, 40px)',
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: 'clamp(20px, 4vw, 30px)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    borderLeft: '4px solid #667eea',
    paddingLeft: '15px',
  };

  const classButtonStyle = (isSelected) => ({
    padding: 'clamp(10px, 2vw, 12px) clamp(15px, 3vw, 20px)',
    backgroundColor: isSelected ? '#667eea' : '#f0f0f0',
    color: isSelected ? 'white' : '#333',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    marginBottom: '10px',
    marginRight: '10px',
  });

  const scheduleButtonStyle = {
    width: '100%',
    padding: 'clamp(15px, 3vw, 18px)',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };

  const reviewCardStyle = {
    backgroundColor: '#f8f9fa',
    padding: 'clamp(15px, 3vw, 20px)',
    borderRadius: '10px',
    marginBottom: '15px',
    border: '1px solid #e0e0e0',
  };

  const reviewHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    backgroundColor: '#e8f4ff',
    color: '#0056d2',
    borderRadius: '20px',
    fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)',
    fontWeight: '600',
    marginRight: '10px',
    marginBottom: '8px',
  };

  return (
    <div style={pageStyle} data-color-scheme="light">
      <Header />

      {/* Hero Section */}
      <div style={heroStyle}>
        <div style={heroContentStyle}>
          <img src={tutor.avatarUrl} alt={tutor.name} style={avatarStyle} />
          <div style={heroInfoStyle}>
            <h1 style={nameStyle}>{tutor.name}</h1>
            <p style={locationStyle}>
              {tutor.flag} {tutor.origin} {tutor.livesIn && `• Vive en ${tutor.livesIn}`}
            </p>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.6' }}>{tutor.bio}</p>
            <div style={statsRowStyle}>
              <div style={statItemStyle}>
                <div style={statValueStyle}>{tutor.rating.toFixed(1)}</div>
                <div style={statLabelStyle}>⭐ Calificación</div>
              </div>
              <div style={statItemStyle}>
                <div style={statValueStyle}>{tutor.totalStudents}</div>
                <div style={statLabelStyle}>👥 Estudiantes</div>
              </div>
              <div style={statItemStyle}>
                <div style={statValueStyle}>{tutor.completedClasses}</div>
                <div style={statLabelStyle}>📚 Clases</div>
              </div>
              <div style={statItemStyle}>
                <div style={statValueStyle}>{tutor.positiveReviews}</div>
                <div style={statLabelStyle}>💚 Positivas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Clases que Imparte */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>📚 Clases que Imparte</h2>
            <p style={{ color: '#666', marginBottom: '20px', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>
              Selecciona la clase que deseas tomar:
            </p>
            <div>
              {tutor.classes.map((className, index) => (
                <button
                  key={index}
                  style={classButtonStyle(selectedClass === className)}
                  onClick={() => setSelectedClass(className)}
                  onMouseEnter={(e) => {
                    if (selectedClass !== className) {
                      e.currentTarget.style.backgroundColor = '#e8e8e8';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedClass !== className) {
                      e.currentTarget.style.backgroundColor = '#f0f0f0';
                    }
                  }}
                >
                  {className}
                </button>
              ))}
            </div>

            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '2px solid #667eea' }}>
              <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: '#333', marginBottom: '15px' }}>
                Clase Seleccionada: <span style={{ color: '#667eea' }}>{selectedClass}</span>
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: '#666' }}>💰 Precio por hora:</span>
                <span style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontWeight: 'bold', color: '#28a745' }}>
                  ${tutor.pricePerHour.toLocaleString('es-CO')} COP
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: '#666' }}>📅 Disponibilidad:</span>
                <span style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: '600', color: '#333' }}>
                  {tutor.availability}
                </span>
              </div>
            </div>

            <button
              style={scheduleButtonStyle}
              onClick={handleScheduleClass}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#218838'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
            >
              🎯 Programar Clase de Prueba
            </button>
          </div>

          {/* Certificaciones y Logros */}
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>🏆 Certificaciones y Logros</h2>
            <p style={{ color: '#666', marginBottom: '20px', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>
              Tutor desde {tutor.since} • {new Date().getFullYear() - tutor.since} años de experiencia
            </p>
            <div>
              {tutor.badges.map((badge, index) => (
                <span key={index} style={badgeStyle}>
                  {badge === 'Certified Teacher' ? '✅' : '💬'} {badge}
                </span>
              ))}
            </div>
            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f4ff', borderRadius: '8px' }}>
              <p style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', color: '#0056d2', fontWeight: '600', margin: 0 }}>
                ✨ {tutor.positiveReviews} de reseñas positivas
              </p>
            </div>
          </div>
        </div>

        {/* Reseñas de Estudiantes */}
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>⭐ Reseñas de Estudiantes</h2>
          <p style={{ color: '#666', marginBottom: '25px', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>
            Lo que dicen los estudiantes sobre {tutor.name}:
          </p>
          {tutor.reviews.map((review) => (
            <div key={review.id} style={reviewCardStyle}>
              <div style={reviewHeaderStyle}>
                <div>
                  <strong style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: '#333' }}>{review.student}</strong>
                  <div style={{ marginTop: '5px' }}>
                    <StarRating rating={review.rating} size="1rem" />
                  </div>
                </div>
                <span style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)', color: '#999' }}>
                  {new Date(review.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', color: '#555', lineHeight: '1.6', margin: 0 }}>
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TutorProfile;

