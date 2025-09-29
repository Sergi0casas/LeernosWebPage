import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo:', email, 'Contraseña:', password);
    alert('Intento de login con: ' + email + ' y ' + password);
  };

  const backgroundStyle = {
    // Nueva imagen de fondo con gente estudiando y un color de superposición ligeramente más oscuro
    backgroundImage: `url('https://images.unsplash.com/photo-1596495578065-6f9f743c52d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Un poco más oscuro para resaltar el formulario
  };

  const formContainerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    zIndex: 1,
    position: 'relative',
  };

  const logoStyle = {
    fontFamily: 'Pacifico, cursive', // ¡Aquí aplicamos la fuente Pacifico!
    fontSize: '3rem',
    color: '#0056d2',
    marginBottom: '15px',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '30px',
  };

  const inputStyle = {
    width: 'calc(100% - 20px)',
    padding: '12px 10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#0056d2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
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
    fontSize: '0.9rem',
    color: '#0056d2',
    textDecoration: 'none',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div> {/* Overlay oscuro */}
      <div style={formContainerStyle}>
        <div style={logoStyle}>Leernos</div> {/* Título con la fuente Pacifico */}
        <p style={subtitleStyle}>Ingresa tus credenciales para continuar</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Acceder
          </button>
        </form>
        <a href="/forgot-password" style={forgotPasswordLinkStyle}>
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
};

export default Login;