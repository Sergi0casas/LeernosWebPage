import React from 'react';

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
  // --- ESTILOS ---

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7f9',
    minHeight: '100vh',
    padding: '40px',
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
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#0056d2',
    margin: '0 0 5px 0',
  };

  const professorStyle = {
    fontSize: '1rem',
    color: '#555',
    margin: '0 0 15px 0',
  };

  const timeInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    color: '#777',
    fontSize: '0.9rem',
  };

  const joinButtonStyle = {
    backgroundColor: '#2d8cff', // Un azul brillante para el botón de Zoom
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
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>🗓️ Mis Próximas Clases</h1>
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
  );
};

export default StudentSchedule;