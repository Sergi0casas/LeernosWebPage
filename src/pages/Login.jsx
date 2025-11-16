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

  // --- Estilos Responsive ---
  const backgroundStyle = {
    backgroundColor: '#000000',
    backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(0, 86, 210, 0.15) 0%, transparent 50%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
    padding: '20px',
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 'clamp(25px, 5vw, 40px)',
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
  
  const logoStyle = { fontFamily: 'Pacifico, cursive', fontSize: 'clamp(2.5rem, 7vw, 3rem)', color: '#E0E0E0', marginBottom: '15px' };
  const subtitleStyle = { fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#B0B0B0', marginBottom: 'clamp(25px, 5vw, 30px)' };
  const inputStyle = { width: '100%', padding: 'clamp(10px, 2vw, 12px)', margin: '10px 0', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', boxSizing: 'border-box', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#E0E0E0' };
  
  // --- 2. COLORES AJUSTADOS PARA CONSISTENCIA ---
  const buttonStyle = {
    width: '100%',
    padding: 'clamp(12px, 2.5vw, 15px)',
    backgroundColor: '#0056d2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0040a0',
  };

  const forgotPasswordLinkStyle = { 
    display: 'block', 
    marginTop: '20px', 
    fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', 
    color: '#00aaff',
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