import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Base de datos de cursos disponibles (sincronizada con HomePage)
const availableCourses = [
  { id: 1, title: 'Análisis de Datos con Python', instructor: 'Dra. Elena Valdés', rating: 4.9, keywords: ['python', 'datos', 'análisis', 'estadística', 'data science', 'pandas', 'numpy'] },
  { id: 2, title: 'Machine Learning Aplicado', instructor: 'Dr. Marco Solis', rating: 4.8, keywords: ['machine learning', 'ml', 'inteligencia artificial', 'ia', 'algoritmos', 'redes neuronales'] },
  { id: 3, title: 'Marketing en Redes Sociales', instructor: 'Carlos Ruiz', rating: 4.7, keywords: ['marketing', 'redes sociales', 'facebook', 'instagram', 'social media', 'publicidad'] },
  { id: 4, title: 'Desarrollo Web con React', instructor: 'Sofía Navarro', rating: 4.9, keywords: ['react', 'javascript', 'web', 'desarrollo', 'frontend', 'jsx', 'componentes'] },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Función para buscar cursos
  const handleSearch = (value) => {
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const searchLower = value.toLowerCase();
    const results = availableCourses.filter(course => {
      // Buscar en título, instructor y keywords
      return (
        course.title.toLowerCase().includes(searchLower) ||
        course.instructor.toLowerCase().includes(searchLower) ||
        course.keywords.some(keyword => keyword.includes(searchLower))
      );
    });

    setSearchResults(results);
    setShowResults(true);
  };

  // Función para navegar al curso seleccionado
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
    setSearchTerm('');
    setShowResults(false);
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleCourseClick(searchResults[0].id);
    }
  };

  // --- Estilos para la barra de búsqueda ---

  const searchContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa', // Un fondo gris muy claro
    colorScheme: 'light',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#212529', // Negro suave
    marginBottom: '1.5rem',
  };

  const formStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '600px', // Ancho máximo de la barra
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Sombra sutil
    borderRadius: '8px',
  };

  const inputStyle = {
    flexGrow: 1, // El input ocupa todo el espacio posible
    border: '1px solid #ced4da',
    padding: '1rem 1rem 1rem 3rem', // Padding izquierdo para el ícono
    fontSize: '1rem',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    borderRight: 'none', // Quitamos el borde derecho para unirlo al botón
    backgroundColor: '#ffffff',
    color: '#212529',
  };
  
  const inputWrapperStyle = {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
  };

  const iconStyle = {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6c757d', // Color del ícono y placeholder
  };

  const buttonStyle = {
    padding: '1rem 1.5rem',
    border: 'none',
    backgroundColor: '#0056d2', // Azul primario
    color: 'white',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2rem', // Hacemos el ícono del botón un poco más grande
    transition: 'background-color 0.3s ease',
  };

  const resultsContainerStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    marginTop: '8px',
    maxHeight: '400px',
    overflowY: 'auto',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
  };

  const resultItemStyle = {
    padding: '15px 20px',
    cursor: 'pointer',
    borderBottom: '1px solid #f0f0f0',
    transition: 'background-color 0.2s ease',
  };

  const resultTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#0056d2',
    marginBottom: '5px',
  };

  const resultInstructorStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '5px',
  };

  const resultRatingStyle = {
    fontSize: '0.85rem',
    color: '#ffc107',
    fontWeight: 'bold',
  };

  const noResultsStyle = {
    padding: '20px',
    textAlign: 'center',
    color: '#999',
  };

  const searchWrapperStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
  };

  return (
    <div style={searchContainerStyle} data-color-scheme="light">
      <h1 style={titleStyle}>Buscar programas de aprendizaje</h1>
      
      <div style={searchWrapperStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputWrapperStyle}>
            {/* Ícono de lupa dentro del input */}
            <span style={iconStyle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="P. ej.: Python, Machine Learning, React..."
              style={inputStyle}
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => searchTerm && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
          </div>
          <button 
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0040a0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0056d2';
            }}
          >
            {/* Ícono de lupa para el botón */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </form>

        {/* Dropdown de resultados */}
        {showResults && (
          <div style={resultsContainerStyle}>
            {searchResults.length > 0 ? (
              searchResults.map((course) => (
                <div
                  key={course.id}
                  style={resultItemStyle}
                  onClick={() => handleCourseClick(course.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <div style={resultTitleStyle}>{course.title}</div>
                  <div style={resultInstructorStyle}>👨‍🏫 {course.instructor}</div>
                  <div style={resultRatingStyle}>⭐ {course.rating}</div>
                </div>
              ))
            ) : (
              <div style={noResultsStyle}>
                No se encontraron cursos que coincidan con "{searchTerm}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;