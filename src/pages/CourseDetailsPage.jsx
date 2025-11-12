import React, { useState } from 'react'; // Importamos useState

// --- DATOS DE EJEMPLO (SIN CAMBIOS) ---
const courseData = {
  courseTitle: 'Análisis de Datos con Python',
  professors: [
    { id: 1, name: 'Dra. Elena Valdés', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&w=200', rating: 4.9, university: 'Universidad Politécnica', experience: '12 años de experiencia', recognitions: ['Premio a la Innovación Docente 2023', 'Publicación en "Journal of Data Science"'], pricePerHour: 35000 },
    { id: 2, name: 'Dr. Ricardo Morales', avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&q=80&w=200', rating: 4.7, university: 'Tecnológico de Monterrey', experience: '9 años de experiencia', recognitions: ['Certificación en Machine Learning por Stanford'], pricePerHour: 30000 },
    { id: 3, name: 'M.Sc. Sofía Navarro', avatarUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&q=80&w=200', rating: 4.8, university: 'Universidad de los Andes', experience: '7 años de experiencia', recognitions: ['Especialista en Visualización de Datos'], pricePerHour: 28000 },
    { id: 4, name: 'Dr. Javier Gómez', avatarUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&q=80&w=200', rating: 4.6, university: 'Universidad Nacional de Colombia', experience: '15 años de experiencia', recognitions: ['Autor del libro "Python para Estadistas"'], pricePerHour: 40000 },
    { id: 5, name: 'Ing. Laura Rojas', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&w=200', rating: 4.9, university: 'Universidad EAFIT', experience: '6 años de experiencia', recognitions: ['Consultora para empresas de tecnología'], pricePerHour: 32000 },
  ],
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
  
  // --- NUEVO ESTADO PARA GUARDAR LA POSICIÓN DEL MOUSE ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSchedule = (professorName, price) => {
    alert(`Has solicitado agendar una clase con ${professorName} por $${price.toLocaleString('es-CO')}. Revisa tu correo para confirmar.`);
  };

  // --- NUEVA FUNCIÓN QUE SE EJECUTA CUANDO SE MUEVE EL MOUSE ---
  const handleMouseMove = (e) => {
    // Actualizamos el estado con las coordenadas X e Y del cursor
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  // --- ESTILOS ADAPTADOS AL NUEVO DISEÑO ---
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    // --- CAMBIO: El fondo ahora es un degradado radial dinámico ---
  background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 86, 210, 0.15), transparent 80%), #000000`,
  };

  const contentWrapperStyle = { position: 'relative', zIndex: 1, padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' };
  const headerStyle = { textAlign: 'center', marginBottom: '40px', paddingBottom: '20px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '15px', backdropFilter: 'blur(5px)', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', padding: '30px' };
  const courseTitleStyle = { fontSize: '3rem', color: '#333', fontWeight: 'bold', margin: '0' };
  const subtitleStyle = { fontSize: '1.4rem', color: '#555', marginTop: '10px' };
  const professorListStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '40px' };
  const professorCardStyle = { backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease' };
  const professorCardHoverStyle = (e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)'; };
  const professorCardLeaveStyle = (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)'; };
  const avatarStyle = { width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #0056d2', marginBottom: '20px' };
  const nameStyle = { fontSize: '1.8rem', fontWeight: 'bold', color: '#333', margin: '0 0 5px 0' };
  const universityStyle = { fontSize: '1rem', color: '#777', margin: '0 0 10px 0' };
  const experienceStyle = { fontSize: '1rem', color: '#777', margin: '0 0 15px 0' };
  const priceStyle = { fontSize: '1.5rem', fontWeight: 'bold', color: '#0056d2', margin: '15px 0 20px 0' };
  const recognitionsContainerStyle = { marginTop: '15px', borderTop: '1px solid #f0f0f0', paddingTop: '15px', width: '100%', textAlign: 'left' };
  const recognitionsTitleStyle = { fontSize: '1rem', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' };
  const recognitionItemStyle = { listStyleType: "'🏆'", paddingLeft: '10px', marginLeft: '20px', color: '#555', marginBottom: '5px' };
  const scheduleButtonStyle = { backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', padding: '12px 25px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '25px', transition: 'background-color 0.3s ease, transform 0.2s ease' };

  return (
    // --- Se añade el evento onMouseMove al div principal ---
    <div style={pageStyle} onMouseMove={handleMouseMove}>
      {/* Ya no necesitamos los divs de fondo estáticos */}
      <div style={contentWrapperStyle}>
        <header style={headerStyle}>
          <h1 style={courseTitleStyle}>{courseData.courseTitle}</h1>
          <p style={subtitleStyle}>Conoce a los profesores que imparten este curso y agenda tu clase</p>
        </header>
        
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
              <p style={priceStyle}>Costo/clase: **${prof.pricePerHour.toLocaleString('es-CO')}**</p>
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
  );
};

export default CourseDetailsPage;