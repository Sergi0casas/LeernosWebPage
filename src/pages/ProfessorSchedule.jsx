import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- DATOS DE EJEMPLO PARA EL PROFESOR ---
// En una aplicación real, estos datos vendrían de tu backend.
const professorClasses = [
  {
    id: 1,
    subject: 'Cálculo Diferencial',
    courseCode: 'MAT-101',
    date: 'Lunes, 3 de Noviembre',
    time: '10:00 AM - 11:30 AM',
    studentCount: 35,
    // El profesor podría tener un 'start_url' de la API de Zoom, 
    // pero para el ejemplo, el 'join_url' funciona igual.
    zoomLink: 'https://zoom.us/j/1234567890', 
  },
  {
    id: 2,
    subject: 'Análisis de Datos con Python',
    courseCode: 'CS-205',
    date: 'Martes, 4 de Noviembre',
    time: '2:00 PM - 3:30 PM',
    studentCount: 28,
    zoomLink: 'https://zoom.us/j/0987654321',
  },
];

const ProfessorSchedule = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [myCourses, setMyCourses] = React.useState([]);

  // Redirigir si no está autenticado
  React.useEffect(() => {
    if (!isAuthenticated()) {
      alert('Por favor, inicia sesión para ver tu horario');
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Cargar los cursos creados por este profesor
  React.useEffect(() => {
    if (user && user.id) {
      const customCourses = JSON.parse(localStorage.getItem('customCourses') || '[]');
      const professorCourses = customCourses.filter(course => course.professorId === user.id);
      setMyCourses(professorCourses);
    }
  }, [user]);

  // Si no hay usuario, no renderizar nada (mientras redirige)
  if (!user) {
    return null;
  }

  // --- ESTILOS --- (similares a la vista del estudiante para consistencia)

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7f9',
    minHeight: '100vh',
    padding: '0',
    colorScheme: 'light',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    fontWeight: 'bold',
  };

  const scheduleContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const classCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    padding: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };
  
  const classCardHoverStyle = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
  };
  const classCardLeaveStyle = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
  };

  const classInfoStyle = {
    flexGrow: 1,
  };

  const subjectStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#0056d2',
    margin: '0 0 5px 0',
  };

  const courseCodeStyle = {
    fontSize: '1rem',
    color: '#555',
    margin: '0 0 15px 0',
    fontFamily: 'monospace',
  };

  const detailsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px', // Aumenta el espacio entre los detalles
    color: '#777',
    fontSize: '0.9rem',
  };

  const detailItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px', // Espacio entre el ícono y el texto
  };

  const startButtonStyle = {
    backgroundColor: '#28a745', // Color verde para 'Iniciar'
    color: 'white',
    padding: '12px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={pageStyle} data-color-scheme="light">
      <Header />
      <div style={{ padding: '40px' }}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>🧑‍🏫 Horario del Profesor {user.fullName}</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            {user.institution} • {user.teachingTime} {user.timePeriod === 'months' ? 'meses' : 'años'} de experiencia
          </p>
        </header>
        
        <div style={scheduleContainerStyle}>
        {professorClasses.map(cls => (
          <div 
            key={cls.id} 
            style={classCardStyle}
            onMouseEnter={classCardHoverStyle}
            onMouseLeave={classCardLeaveStyle}
          >
            <div style={classInfoStyle}>
              <h2 style={subjectStyle}>{cls.subject}</h2>
              <p style={courseCodeStyle}>Curso: {cls.courseCode}</p>
              <div style={detailsStyle}>
                <span style={detailItemStyle}>📅 {cls.date}</span>
                <span style={detailItemStyle}>⏰ {cls.time}</span>
                <span style={detailItemStyle}>👥 {cls.studentCount} Estudiantes</span>
              </div>
            </div>
            
            <a 
              href={cls.zoomLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={startButtonStyle}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h-2v10h12v-10h-2zm-6 0v-2h4v2h-4z"></path></svg>
              Iniciar Clase
            </a>
          </div>
        ))}
        
        {professorClasses.length === 0 && (
            <p style={{textAlign: 'center', color: '#777'}}>No tienes clases programadas.</p>
        )}
        </div>

        {/* SECCIÓN MIS CURSOS CREADOS */}
        <div style={{ marginTop: '60px', maxWidth: '900px', margin: '60px auto 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '2rem', color: '#333', fontWeight: 'bold', margin: 0 }}>
              📚 Mis Cursos Creados
            </h2>
            <button
              onClick={() => navigate('/create-course')}
              style={{
                backgroundColor: '#0056d2',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0040a0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0056d2'}
            >
              ✨ Crear Nuevo Curso
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {myCourses.map(course => (
              <div
                key={course.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                }}
                onClick={() => navigate(`/course/${course.id}`)}
              >
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                  }}
                />
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#333',
                    margin: '0 0 10px 0',
                    lineHeight: '1.4',
                  }}>
                    {course.title}
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ color: '#666', fontSize: '0.9rem' }}>
                      ⏰ {course.duration}
                    </span>
                    <span style={{ 
                      backgroundColor: course.level === 'Principiante' ? '#e8f4ff' : course.level === 'Intermedio' ? '#fff3e0' : '#ffe0e0',
                      color: course.level === 'Principiante' ? '#0056d2' : course.level === 'Intermedio' ? '#f57c00' : '#d32f2f',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}>
                      {course.level}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #eee' }}>
                    <span style={{ color: '#999', fontSize: '0.85rem' }}>
                      👥 {course.students} estudiantes
                    </span>
                    <span style={{ color: '#ffc107', fontSize: '0.9rem', fontWeight: 'bold' }}>
                      ⭐ {course.rating.toFixed(1)}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/course/${course.id}`);
                    }}
                    style={{
                      width: '100%',
                      marginTop: '15px',
                      padding: '10px',
                      backgroundColor: '#f0f4ff',
                      color: '#0056d2',
                      border: '1px solid #b3d9ff',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d0e8ff'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f0f4ff'}
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>

          {myCourses.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              border: '2px dashed #ddd',
            }}>
              <p style={{ fontSize: '3rem', margin: '0 0 20px 0' }}>📚</p>
              <h3 style={{ fontSize: '1.5rem', color: '#333', margin: '0 0 10px 0' }}>
                Aún no has creado ningún curso
              </h3>
              <p style={{ color: '#777', marginBottom: '20px' }}>
                Comienza a compartir tu conocimiento creando tu primer curso
              </p>
              <button
                onClick={() => navigate('/create-course')}
                style={{
                  backgroundColor: '#0056d2',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0040a0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0056d2'}
              >
                ✨ Crear Mi Primer Curso
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfessorSchedule;