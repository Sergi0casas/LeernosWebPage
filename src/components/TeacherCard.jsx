import React from 'react';

// --- Función Auxiliar ---
// Calcula el tiempo transcurrido desde una fecha de inicio
const timeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return `Miembro desde hace ${Math.floor(interval)} años`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return `Miembro desde hace ${Math.floor(interval)} meses`;
  }
  return `Miembro reciente`;
};


const TeacherCard = ({ teacher }) => {
  // --- Estilos para la tarjeta del profesor ---

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    maxWidth: '280px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%', // Círculo perfecto
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid #f0f0f0',
  };

  const nameStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    margin: '0 0 0.25rem 0',
    color: '#333',
  };

  const universityStyle = {
    fontSize: '0.95rem',
    color: '#555',
    margin: '0 0 1rem 0',
  };

  const statsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: '1rem 0',
    padding: '0.5rem 0',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
  };

  const statItemStyle = {
    fontSize: '0.9rem',
    color: '#444',
  };
  
  const statValueStyle = {
    display: 'block',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  };
  
  const joinDateStyle = {
    fontSize: '0.85rem',
    color: '#757575',
    margin: '0 0 1.5rem 0',
  };
  
  const profileButtonStyle = {
    backgroundColor: '#0056d2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '0.7rem 1.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: '100%',
  };


  return (
    <div style={cardStyle}>
      <img src={teacher.avatarUrl} alt={`Foto de ${teacher.name}`} style={avatarStyle} />
      <h3 style={nameStyle}>{teacher.name}</h3>
      <p style={universityStyle}>{teacher.university}</p>
      
      <div style={statsContainerStyle}>
        <div style={statItemStyle}>
          <span style={statValueStyle}>⭐ {teacher.rating.toFixed(1)}</span>
          Calificación
        </div>
        <div style={statItemStyle}>
          <span style={statValueStyle}>{teacher.coursesCount}</span>
          Cursos
        </div>
      </div>
      
      <p style={joinDateStyle}>{timeSince(teacher.joinDate)}</p>
      
      <button style={profileButtonStyle}>Ver Perfil</button>
    </div>
  );
};

export default TeacherCard;