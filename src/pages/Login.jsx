import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear un usuario estudiante automáticamente con el email proporcionado
    const studentData = {
      fullName: email.split('@')[0] || 'Estudiante', // Usa el nombre del email como nombre
      email: email,
      role: 'student',
    };
    
    // Registrar al usuario como estudiante
    register(studentData);
    
    // Mostrar mensaje de bienvenida
    alert(`¡Bienvenido! Has iniciado sesión como estudiante.`);
    
    // Redirigir a la página principal
    navigate('/');
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

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '25px',
    flexWrap: 'wrap',
  };

  const secondaryButtonStyle = {
    flex: '1 1 calc(50% - 5px)',
    minWidth: '120px',
    padding: 'clamp(10px, 2vw, 12px)',
    borderRadius: '8px',
    fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
  };

  const registerButtonStyle = {
    ...secondaryButtonStyle,
    backgroundColor: 'rgba(0, 86, 210, 0.2)',
    color: '#00aaff',
    border: '1px solid rgba(0, 170, 255, 0.3)',
  };

  const homeButtonStyle = {
    ...secondaryButtonStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#E0E0E0',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  return (
    <div style={backgroundStyle}>
      <div style={formContainerStyle}>
        <div style={logoStyle}>Leernos</div>
        <p style={subtitleStyle}>Ingresa cualquier correo para acceder como estudiante</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
          <input type="password" placeholder="Contraseña (cualquiera)" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
          
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

        {/* Botones adicionales */}
        <div style={buttonsContainerStyle}>
          <Link 
            to="/registro" 
            style={registerButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 86, 210, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 86, 210, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            📝 Registrarse
          </Link>
          <Link 
            to="/" 
            style={homeButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            🏠 Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;