import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. RECIBE LA PROP 'onRegister' AQUÍ
const SignUp = ({ onRegister }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [institution, setInstitution] = useState('');
  const [teachingTime, setTeachingTime] = useState('');
  const [timePeriod, setTimePeriod] = useState('years'); // 'years' o 'months'

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { 
      fullName, 
      email, 
      password, 
      role,
      ...(role === 'teacher' && { 
        institution, 
        teachingTime, 
        timePeriod 
      })
    };
    
    // 2. LLAMA A LA FUNCIÓN RECIBIDA Y PÁSALE LOS DATOS
    onRegister(userData); 
  };

  // ... (El resto de tus estilos y el return JSX no cambian)
  // ... (Recuerda mantener todo el código de estilos y el return)

  // --- Estilos Responsive ---
  const backgroundStyle = { backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: '20px' };
  const overlayStyle = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' };
  const formContainerStyle = { backgroundColor: '#ffffff', padding: 'clamp(25px, 5vw, 40px)', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', width: '100%', maxWidth: '420px', zIndex: 1, position: 'relative', textAlign: 'center', colorScheme: 'light' };
  const logoStyle = { fontFamily: "'Pacifico', cursive", fontSize: 'clamp(2.5rem, 7vw, 3.5rem)', color: '#0056d2', marginBottom: '10px' };
  const subtitleStyle = { fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#555', marginBottom: 'clamp(20px, 4vw, 25px)' };
  const labelStyle = { display: 'block', textAlign: 'left', fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', color: '#333', fontWeight: '600', marginBottom: '5px', marginLeft: '5px' };
  const inputStyle = { width: '100%', padding: 'clamp(10px, 2vw, 12px)', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', boxSizing: 'border-box', backgroundColor: '#ffffff', color: '#333' };
  const roleSelectorContainerStyle = { display: 'flex', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', marginBottom: 'clamp(20px, 4vw, 25px)', backgroundColor: '#ffffff' };
  const roleButtonStyle = { flex: 1, padding: 'clamp(8px, 2vw, 10px)', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', color: '#555', transition: 'background-color 0.3s, color 0.3s', backgroundColor: '#ffffff' };
  const activeRoleButtonStyle = { ...roleButtonStyle, backgroundColor: '#0056d2', color: '#fff' };
  const experienceContainerStyle = { display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' };
  const experienceInputStyle = { ...inputStyle, flex: '1 1 calc(50% - 5px)', minWidth: '120px', marginBottom: '0' };
  const periodSelectorStyle = { ...inputStyle, flex: '1 1 calc(50% - 5px)', minWidth: '120px', marginBottom: '0', cursor: 'pointer' };
  const submitButtonStyle = { width: '100%', padding: 'clamp(12px, 2.5vw, 15px)', backgroundColor: '#0056d2', color: 'white', border: 'none', borderRadius: '5px', fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', transition: 'background-color 0.3s ease' };
  const loginLinkStyle = { display: 'block', marginTop: '20px', fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', color: '#555', textDecoration: 'none' };
  const loginLinkAnchorStyle = { color: '#0056d2', fontWeight: '600', marginLeft: '5px' };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={formContainerStyle} data-color-scheme="light">
        <div style={logoStyle}>Leernos</div>
        <p style={subtitleStyle}>Crea tu cuenta para empezar a aprender</p>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Nombre Completo</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} style={inputStyle} required />
          <label style={labelStyle}>Correo Electrónico</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
          <label style={labelStyle}>Contraseña</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
          
          {role === 'teacher' && (
            <>
              <label style={labelStyle}>Institución Educativa</label>
              <input 
                type="text" 
                value={institution} 
                onChange={(e) => setInstitution(e.target.value)} 
                style={inputStyle} 
                placeholder="Ej: Universidad Nacional de Colombia"
                required 
              />
              <label style={labelStyle}>Experiencia Impartiendo Clases</label>
              <div style={experienceContainerStyle}>
                <input 
                  type="number" 
                  value={teachingTime} 
                  onChange={(e) => setTeachingTime(e.target.value)} 
                  style={experienceInputStyle} 
                  placeholder="Ej: 5"
                  min="0"
                  required 
                />
                <select 
                  value={timePeriod} 
                  onChange={(e) => setTimePeriod(e.target.value)}
                  style={periodSelectorStyle}
                  required
                >
                  <option value="months">Meses</option>
                  <option value="years">Años</option>
                </select>
              </div>
            </>
          )}
          
          <label style={labelStyle}>Selecciona tu rol</label>
          <div style={roleSelectorContainerStyle}>
            <button type="button" style={role === 'student' ? activeRoleButtonStyle : roleButtonStyle} onClick={() => setRole('student')}>🎓 Estudiante</button>
            <button type="button" style={role === 'teacher' ? activeRoleButtonStyle : roleButtonStyle} onClick={() => setRole('teacher')}>🧑‍🏫 Profesor</button>
          </div>
          
          <button type="submit" style={submitButtonStyle}>Crear Cuenta</button>
        </form>
        <p style={loginLinkStyle}>¿Ya tienes una cuenta?<Link to="/login" style={loginLinkAnchorStyle}>Inicia sesión</Link></p>
      </div>
    </div>
  );
};

export default SignUp;