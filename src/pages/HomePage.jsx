import React from 'react';

// Importa los componentes reutilizables (asumiendo que existen)
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from '../components/SearchBar';
// Ya no necesitamos importar CourseCard porque lo definiremos adentro

// --- DATOS DE EJEMPLO ---
const popularCourses = [
  { id: 1, title: 'Análisis de Datos con Python', instructor: 'Dra. Elena Valdés', rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=80&w=400' },
  { id: 2, title: 'Machine Learning Aplicado', instructor: 'Dr. Marco Solis', rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&q=80&w=400' },
  { id: 3, title: 'Marketing en Redes Sociales', instructor: 'Carlos Ruiz', rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&q=80&w=400' },
  { id: 4, title: 'Desarrollo Web con React', instructor: 'Sofía Navarro', rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&q=80&w=400' },
];

const tutorsData = [
    { id: 1, name: 'Michelle Burns', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&w=100', positiveReviews: '99%', origin: 'Scotland', livesIn: 'Mauritius', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', since: 2022, bio: 'Hi! I\'m Michelle. Language lover and tutor of English (particular...', badges: ['1000+ Chats'] },
    { id: 2, name: 'Teacher Colleen', avatarUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&q=80&w=100', positiveReviews: '100%', origin: 'Herbster, Wisconsin', livesIn: '', flag: '🇺🇸', since: 2022, bio: 'Hi, I am Colleen from northern Wisconsin on beautiful Lake Superi...', badges: ['1000+ Chats', 'Certified Teacher'] },
    { id: 3, name: 'Ronnie UK', avatarUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&q=80&w=100', positiveReviews: '100%', origin: 'United Kingdom', livesIn: '', flag: '🇬🇧', since: 2018, bio: 'Hi! I live in the Midlands in the UK. I am in interested in techn...', badges: ['1000+ Chats', 'Certified Teacher'] },
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
    width: '300px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };
  const imageStyle = { width: '100%', height: '150px', objectFit: 'cover' };
  const infoStyle = { padding: '15px', textAlign: 'left' }; // Aseguramos alineación a la izquierda
  const titleStyle = { fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 5px 0', color: '#333' };
  const instructorStyle = { fontSize: '0.9rem', color: '#666', margin: '0 0 10px 0' };
  const ratingStyle = { fontWeight: 'bold', color: '#0056d2' };

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
      <img src={course.imageUrl} alt={course.title} style={imageStyle} />
      <div style={infoStyle}>
        {/* --- LÍNEAS CORREGIDAS / AÑADIDAS --- */}
        <h3 style={titleStyle}>{course.title}</h3>
        <p style={instructorStyle}>{course.instructor}</p>
        <span style={ratingStyle}>⭐ {course.rating}</span>
      </div>
    </div>
  );
};

// --- COMPONENTE PARA LA TARJETA DE TUTOR ---
const TutorCard = ({ tutor }) => {
  // (Este componente no tiene cambios)
  const cardStyle = { backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e0e0e0', padding: '20px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' };
  const headerStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' };
  const nameStyle = { fontSize: '1.2rem', fontWeight: 'bold', margin: 0 };
  const avatarStyle = { width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' };
  const statsStyle = { fontSize: '0.8rem', color: '#666' };
  const bioStyle = { fontSize: '0.9rem', color: '#333', lineHeight: '1.5' };
  const badgeContainerStyle = { display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '12px' };
  const badgeStyle = { fontSize: '0.85rem', color: '#555' };
  const buttonStyle = { backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '20px', padding: '12px 0', width: '100%', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' };

  return (
    <div style={cardStyle} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,0,0,0.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)'; }}>
      <div style={headerStyle}>
        <div><h3 style={nameStyle}>{tutor.name}</h3><p style={statsStyle}>{tutor.positiveReviews} de reseñas positivas</p><p style={statsStyle}>{tutor.flag} {tutor.origin} {tutor.livesIn && `(vive en ${tutor.livesIn})`}</p><p style={statsStyle}>Tutor desde {tutor.since}</p></div>
        <img src={tutor.avatarUrl} alt={tutor.name} style={avatarStyle} />
      </div>
      <p style={bioStyle}>{tutor.bio} <a href="#" style={{color: 'black'}}>ver más</a></p>
      <div style={badgeContainerStyle}>
        <strong>Destacados</strong>
        {tutor.badges.map(badge => ( <span key={badge} style={badgeStyle}>{badge === 'Certified Teacher' ? '✅' : '💬'} {badge}</span> ))}
      </div>
      <button style={buttonStyle}>Programar prueba</button>
    </div>
  );
};

const HomePage = () => {
  // (Este componente no tiene cambios)
  const pageStyle = { background: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)', fontFamily: 'Arial, sans-serif' };
  const mainContentStyle = { maxWidth: '1200px', margin: '0 auto', padding: '2rem' };
  const sectionTitleStyle = { fontSize: '2rem', fontWeight: 'bold', color: 'black', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' };
  const courseListStyle = { display: 'flex', gap: '1.5rem', overflowX: 'auto', flexWrap: 'nowrap', padding: '1rem 0' };
  const tutorSectionStyle = { marginTop: '4rem' };
  const tutorGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' };

  return (
    <div style={pageStyle}>
      <style>{customScrollbarStyles}</style>
      <Header />
      <SearchBar />
      <main style={mainContentStyle}>
        <section>
          <h2 style={sectionTitleStyle}>Cursos más Populares</h2>
          <div style={courseListStyle} className="horizontal-scroll">
            {popularCourses.map(course => ( <CourseCard key={course.id} course={course} /> ))}
          </div>
        </section>
        <section style={tutorSectionStyle}>
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