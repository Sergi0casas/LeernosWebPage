import React from 'react';

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
  // --- ESTILOS --- (similares a la vista del estudiante para consistencia)

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
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>🧑‍🏫 Mis Clases Programadas</h1>
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
    </div>
  );
};

export default ProfessorSchedule;