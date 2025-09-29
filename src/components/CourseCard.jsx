import React from 'react';

const CourseCard = ({ course }) => {
  // --- Estilos para la tarjeta del curso ---

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden', // Asegura que la imagen no se salga de los bordes redondeados
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover', // Asegura que la imagen cubra el espacio sin deformarse
  };

  const contentStyle = {
    padding: '1rem',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0 0 0.5rem 0',
    color: '#333',
  };

  const instructorStyle = {
    fontSize: '0.9rem',
    color: '#757575',
    margin: '0 0 1rem 0',
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
  };

  const ratingNumberStyle = {
    color: '#e8a800', // Un color dorado para la calificación
    fontWeight: 'bold',
    marginRight: '0.5rem',
  };

  // --- JSX del Componente ---

  return (
    <div style={cardStyle}>
      <img src={course.imageUrl} alt={`Portada de ${course.title}`} style={imageStyle} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{course.title}</h3>
        <p style={instructorStyle}>{course.instructor}</p>
        <div style={ratingStyle}>
          <span style={ratingNumberStyle}>{course.rating.toFixed(1)}</span>
          {/* Aquí podrías agregar íconos de estrellas basados en la calificación */}
          <span>⭐</span> 
        </div>
      </div>
    </div>
  );
};

export default CourseCard;