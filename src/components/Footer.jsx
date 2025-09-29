import React from 'react';

// Nota: Al igual que en el Header, los <a> deberían ser componentes <Link> de react-router-dom.

const Footer = () => {
  // --- Estilos para el Footer ---

  const footerStyle = {
    backgroundColor: '#2c3e50', // Un color oscuro y profesional
    color: '#ecf0f1', // Un color de texto claro y suave
    padding: '3rem 2rem 1rem',
    marginTop: 'auto', // Empuja el footer al final de la página
  };

  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Para que se vea bien en pantallas pequeñas
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '2rem',
  };

  const columnStyle = {
    flex: 1,
    minWidth: '200px', // Asegura que las columnas no sean demasiado delgadas
    margin: '1rem',
  };

  const columnTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#fff',
  };

  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    color: '#bdc3c7', // Un gris claro para los enlaces
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.7rem',
    fontSize: '0.95rem',
  };

  const bottomBarStyle = {
    borderTop: '1px solid #34495e',
    textAlign: 'center',
    paddingTop: '1.5rem',
    marginTop: '2rem',
  };

  const copyrightStyle = {
    fontSize: '0.9rem',
    color: '#bdc3c7',
  };

  // --- JSX del Componente ---

  return (
    <footer style={footerStyle}>
      <div style={linksContainerStyle}>
        {/* Columna 1: Navegación Principal */}
        <div style={columnStyle}>
          <h4 style={columnTitleStyle}>Leernos</h4>
          <ul style={linkListStyle}>
            <li><a href="/about" style={linkStyle}>Sobre Nosotros</a></li>
            <li><a href="/profesores" style={linkStyle}>Profesores</a></li>
            <li><a href="/blog" style={linkStyle}>Blog</a></li>
            <li><a href="/careers" style={linkStyle}>Trabaja con Nosotros</a></li>
          </ul>
        </div>

        {/* Columna 2: Comunidad */}
        <div style={columnStyle}>
          <h4 style={columnTitleStyle}>Comunidad</h4>
          <ul style={linkListStyle}>
            <li><a href="/register-teacher" style={linkStyle}>Conviértete en Instructor</a></li>
            <li><a href="/help" style={linkStyle}>Centro de Ayuda</a></li>
            <li><a href="/forums" style={linkStyle}>Foros</a></li>
          </ul>
        </div>

        {/* Columna 3: Legal */}
        <div style={columnStyle}>
          <h4 style={columnTitleStyle}>Legal</h4>
          <ul style={linkListStyle}>
            <li><a href="/terms" style={linkStyle}>Términos de Servicio</a></li>
            <li><a href="/privacy" style={linkStyle}>Política de Privacidad</a></li>
            <li><a href="/cookies" style={linkStyle}>Política de Cookies</a></li>
          </ul>
        </div>
      </div>

      <div style={bottomBarStyle}>
        <p style={copyrightStyle}>
          © {new Date().getFullYear()} Leernos, Inc. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;