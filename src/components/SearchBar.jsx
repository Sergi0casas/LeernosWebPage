import React from 'react';

const SearchBar = () => {
  // --- Estilos para la barra de búsqueda ---

  const searchContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa', // Un fondo gris muy claro
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
  };

  return (
    <div style={searchContainerStyle}>
      <h1 style={titleStyle}>Buscar 10,000+ programas de aprendizaje</h1>
      <div style={formStyle}>
        <div style={inputWrapperStyle}>
          {/* Ícono de lupa dentro del input */}
          <span style={iconStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>
          <input
            type="text"
            placeholder="P. ej.: Aprendizaje Automático"
            style={inputStyle}
          />
        </div>
        <button style={buttonStyle}>
          {/* Ícono de lupa para el botón */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;