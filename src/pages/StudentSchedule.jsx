import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- DATOS DE EJEMPLO ---
// En una aplicación real, estos datos vendrían de tu base de datos (API).
const scheduledClasses = [
  {
    id: 1,
    subject: 'Cálculo Diferencial',
    professor: 'Dr. Marco Solis',
    date: 'Lunes, 3 de Noviembre',
    time: '10:00 AM - 11:30 AM',
    // Este enlace sería generado por la API de Zoom y guardado en tu backend.
    zoomLink: 'https://zoom.us/j/1234567890', 
  },
  {
    id: 2,
    subject: 'Análisis de Datos con Python',
    professor: 'Dra. Elena Valdés',
    date: 'Martes, 4 de Noviembre',
    time: '2:00 PM - 3:30 PM',
    zoomLink: 'https://zoom.us/j/0987654321',
  },
  {
    id: 3,
    subject: 'Marketing en Redes Sociales',
    professor: 'Carlos Ruiz',
    date: 'Jueves, 6 de Noviembre',
    time: '8:00 AM - 9:30 AM',
    zoomLink: 'https://zoom.us/j/5556667778',
  },
];

const StudentSchedule = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirigir si no está autenticado
  React.useEffect(() => {
    if (!isAuthenticated()) {
      alert('Por favor, inicia sesión para ver tu horario');
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Si no hay usuario, no renderizar nada (mientras redirige)
  if (!user) {
    return null;
  }

  // --- ESTILOS ---

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
  
  // Pequeño efecto al pasar el ratón por la tarjeta
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
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    fontWeight: 'bold',
    color: '#0056d2',
    margin: '0 0 5px 0',
  };

  const professorStyle = {
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    color: '#555',
    margin: '0 0 15px 0',
  };

  const timeInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(10px, 2vw, 15px)',
    color: '#777',
    fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)',
    flexWrap: 'wrap',
  };

  const joinButtonStyle = {
    backgroundColor: '#2d8cff',
    color: 'white',
    padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 25px)',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
  };

  return (
    <div style={pageStyle} data-color-scheme="light">
      <Header />
      <div style={{ padding: '40px' }}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>🗓️ Horario de {user.fullName}</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Tus próximas clases programadas</p>
        </header>
        
        <div style={scheduleContainerStyle}>
        {scheduledClasses.map(cls => (
          <div 
            key={cls.id} 
            style={classCardStyle}
            onMouseEnter={classCardHoverStyle}
            onMouseLeave={classCardLeaveStyle}
          >
            <div style={classInfoStyle}>
              <h2 style={subjectStyle}>{cls.subject}</h2>
              <p style={professorStyle}>🧑‍🏫 Con: {cls.professor}</p>
              <div style={timeInfoStyle}>
                <span>📅 {cls.date}</span>
                <span>⏰ {cls.time}</span>
              </div>
            </div>
            
            <a 
              href={cls.zoomLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={joinButtonStyle}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h-2v10h12v-10h-2zm-6 0v-2h4v2h-4z"></path></svg>
              Unirse a la clase
            </a>
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentSchedule;