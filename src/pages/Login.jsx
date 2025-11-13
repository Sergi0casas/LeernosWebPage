import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo:', email, 'Contraseña:', password);
    alert('Intento de login con: ' + email + ' y ' + password);
  };

  // --- 1. FONDO COPIADO DE ForgotPassword.jsx ---
  const backgroundStyle = {
    backgroundColor: '#000000',
    backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(0, 86, 210, 0.15) 0%, transparent 50%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    zIndex: 1,
    position: 'relative',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };
  
  const logoStyle = { fontFamily: 'Pacifico, cursive', fontSize: '3rem', color: '#E0E0E0', marginBottom: '15px' };
  const subtitleStyle = { fontSize: '1rem', color: '#B0B0B0', marginBottom: '30px' };
  const inputStyle = { width: 'calc(100% - 20px)', padding: '12px 10px', margin: '10px 0', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#E0E0E0' };
  
  // --- 2. COLORES AJUSTADOS PARA CONSISTENCIA ---
  const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#0056d2', // Color azul principal
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0040a0', // Azul más oscuro
  };

  const forgotPasswordLinkStyle = { 
    display: 'block', 
    marginTop: '20px', 
    fontSize: '0.9rem', 
    color: '#00aaff', // Azul claro para el enlace
    textDecoration: 'none',
  };

  return (
    <div style={backgroundStyle}>
      <div style={formContainerStyle}>
        <div style={logoStyle}>Leernos</div>
        <p style={subtitleStyle}>Ingresa tus credenciales para continuar</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
          
          <button
            type="submit"
            style={{ 
              ...buttonStyle, 
              ...(isButtonHovered ? buttonHoverStyle : {}) 
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Acceder
          </button>
        </form>
        <Link to="/forgot-password" style={forgotPasswordLinkStyle}>
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  );
};

export default Login;