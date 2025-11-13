import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SignUp from './SignUp';
import SignUpProfessor from './SignUpProfessor';

const RegistrationPage = () => {
  const [userData, setUserData] = useState(null);
  const [isProfessorFlow, setIsProfessorFlow] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleInitialSignUp = (data) => {
    if (data.role === 'teacher') {
      // Guardar datos temporalmente para el flujo de profesor
      setUserData({ 
        fullName: data.fullName, 
        email: data.email,
        password: data.password,
        role: data.role,
        institution: data.institution,
        teachingTime: data.teachingTime,
        timePeriod: data.timePeriod
      });
      setIsProfessorFlow(true);
    } else {
      // Registrar estudiante y redirigir a su horario
      register(data);
      alert(`¡Bienvenido, estudiante ${data.fullName}!`);
      navigate('/student-schedule');
    }
  };

  const handleProfessorComplete = () => {
    // Registrar profesor y redirigir a su horario
    register(userData);
    alert(`¡Bienvenido, profesor ${userData.fullName}! Tu solicitud será revisada.`);
    navigate('/professor-schedule');
  };

  if (!isProfessorFlow) {
    // AQUÍ ESTÁ EL CAMBIO: Le pasamos la función al componente SignUp
    return <SignUp onRegister={handleInitialSignUp} />;
  } else {
    return <SignUpProfessor 
      fullName={userData.fullName} 
      email={userData.email}
      institution={userData.institution}
      teachingTime={userData.teachingTime}
      timePeriod={userData.timePeriod}
      onComplete={handleProfessorComplete}
    />;
  }
};

export default RegistrationPage;