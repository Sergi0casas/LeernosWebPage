import React, { useState } from 'react';

// El componente ahora recibe props con la información del usuario
const SignUpProfessor = ({ fullName, email, institution, teachingTime, timePeriod, onComplete }) => {
  // Ya no necesitamos los estados para nombre, email o contraseña
  const [idFile, setIdFile] = useState(null);
  const [certificateFile, setCertificateFile] = useState(null);

  const handleFileChange = (e, setFile) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Usamos los props directamente
    const formData = {
      fullName, // Viene de props
      email,    // Viene de props
      institution, // Viene de props
      teachingTime, // Viene de props
      timePeriod, // Viene de props
      idFile: idFile ? idFile.name : 'No subido',
      certificateFile: certificateFile ? certificateFile.name : 'No subido',
    };
    console.log('Datos del profesor:', formData);
    
    // Llamar a la función onComplete para completar el registro
    if (onComplete) {
      onComplete();
    }
  };

  // --- ESTILOS --- (Sin cambios)
  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
    backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex',
    justifyContent: 'center', alignItems: 'center', position: 'relative',
  };
  const overlayStyle = {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };
  const formContainerStyle = {
    backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', width: '100%', maxWidth: '450px',
    zIndex: 1, position: 'relative', textAlign: 'center', colorScheme: 'light',
  };
  const logoStyle = { fontFamily: "'Pacifico', cursive", fontSize: '3.5rem', color: '#0056d2', marginBottom: '10px' };
  const welcomeTitleStyle = { color: '#333', marginBottom: '5px' };
  const welcomeEmailStyle = { color: '#777', marginTop: '0', fontSize: '0.9rem', marginBottom: '25px' };
  const labelStyle = { display: 'block', textAlign: 'left', fontSize: '0.9rem', color: '#333', fontWeight: '600', marginBottom: '5px', marginLeft: '5px' };
  const fileInputStyle = { width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem', boxSizing: 'border-box', backgroundColor: '#f9f9f9', cursor: 'pointer', color: '#333' };
  const submitButtonStyle = { width: '100%', padding: '15px', backgroundColor: '#0056d2', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={formContainerStyle} data-color-scheme="light">
        <div style={logoStyle}>Leernos</div>
        
        {/* Mensaje de bienvenida con los datos recibidos */}
        <h3 style={welcomeTitleStyle}>¡Hola, {fullName}!</h3>
        <p style={welcomeEmailStyle}>
          {institution} • {teachingTime} {timePeriod === 'months' ? (teachingTime === '1' ? 'mes' : 'meses') : (teachingTime === '1' ? 'año' : 'años')} de experiencia
        </p>
        <p style={{...welcomeEmailStyle, marginTop: '-15px'}}>Solo un paso más para completar tu registro como profesor.</p>

        <form onSubmit={handleSubmit}>
          {/* SE ELIMINARON LOS CAMPOS DE NOMBRE, CORREO Y CONTRASEÑA */}
          
          <label style={labelStyle}>📄 Cédula de Ciudadanía (PDF)</label>
          <input type="file" onChange={(e) => handleFileChange(e, setIdFile)} style={fileInputStyle} accept=".pdf" required />

          <label style={labelStyle}>🎓 Certificado Laboral (PDF)</label>
          <p style={{textAlign: 'left', fontSize: '0.8rem', color: '#777', marginTop: '-10px', marginBottom: '10px', marginLeft: '5px'}}>
            Debe ser de una universidad colombiana.
          </p>
          <input type="file" onChange={(e) => handleFileChange(e, setCertificateFile)} style={fileInputStyle} accept=".pdf" required />
          
          <button type="submit" style={submitButtonStyle}>
            Finalizar Registro
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpProfessor;