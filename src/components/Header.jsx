import React from 'react';

// Nota: En una aplicación real, los <a> deberían ser componentes <Link> de react-router-dom
// para evitar que la página se recargue al navegar. Ejemplo: import { Link } from 'react-router-dom';

const Header = () => {
  // --- Estilos CSS en formato de objeto JavaScript ---

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#fff',
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#0047b3', // Un azul oscuro similar al de la imagen
    textDecoration: 'none',
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem', // Espacio entre los enlaces
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
  };

  const actionsStyle = {
    display: 'flex',
    gap: '1rem', // Espacio entre los botones
  };

  const baseButtonStyle = {
    padding: '0.6rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  const loginButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: '#fff',
    color: '#0056d2',
    border: '1px solid #0056d2',
  };

  const registerButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: '#0056d2',
    color: '#fff',
  };


  return (
    <header style={headerStyle}>
      {/* Lado Izquierdo: Logo */}
      <div>
        <a href="/" style={logoStyle}>Leernos</a>
      </div>

      {/* Centro: Navegación */}
      <nav style={navStyle}>
        <a href="/" style={navLinkStyle}>Inicio</a>
        <a href="/cursos" style={navLinkStyle}>Mis Cursos</a>
        <a href="/profesores" style={navLinkStyle}>Profesores</a>
      </nav>

      {/* Lado Derecho: Acciones */}
      <div style={actionsStyle}>
        <button style={loginButtonStyle}>
          Iniciar Sesión
        </button>
        <button style={registerButtonStyle}>
          Registrarse
        </button>
      </div>
    </header>
  );
};

export default Header;