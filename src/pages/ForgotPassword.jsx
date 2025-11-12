import React, { useState } from 'react';
// La importación de 'Link' se ha eliminado

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solicitud de recuperación para:', email);
    alert(`Si existe una cuenta asociada a ${email}, recibirás un enlace para recuperar tu contraseña.`);
  };

  // --- Estilos consistentes con la página de Login ---
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
  
  const titleStyle = { 
    fontSize: '1.8rem',
    fontWeight: 'bold', 
    color: '#E0E0E0', 
    marginBottom: '10px' 
  };
  const subtitleStyle = { 
    fontSize: '1rem', 
    color: '#B0B0B0', 
    marginBottom: '30px',
    lineHeight: '1.5',
  };
  const inputStyle = { 
    width: 'calc(100% - 20px)', 
    padding: '12px 10px', 
    margin: '10px 0', 
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    fontSize: '1rem', 
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#E0E0E0',
  };
  
  const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#0056d2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };
  
  const backLinkStyle = { 
    display: 'block', 
    marginTop: '25px', 
    fontSize: '0.9rem', 
    color: '#00aaff', 
    textDecoration: 'none',
  };

  return (
    <div style={backgroundStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Recuperar Contraseña</h2>
        <p style={subtitleStyle}>Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Tu Correo Electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={inputStyle} 
            required 
          />
          
          <button type="submit" style={buttonStyle}>
            Enviar Enlace
          </button>
        </form>

        {/* --- CAMBIO: Se reemplaza <Link> por <a> --- */}
        <a href="/login" style={backLinkStyle}>
          &larr; Volver a Iniciar Sesión
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;