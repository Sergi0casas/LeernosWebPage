import React, { useState } from 'react';
import SignUp from './SignUp';
import SignUpProfessor from './SignUpProfessor';

const RegistrationPage = () => {
  const [userData, setUserData] = useState(null);
  const [isProfessorFlow, setIsProfessorFlow] = useState(false);

  const handleInitialSignUp = (data) => {
    if (data.role === 'teacher') {
      setUserData({ fullName: data.fullName, email: data.email });
      setIsProfessorFlow(true);
    } else {
      alert(`¡Bienvenido, estudiante ${data.fullName}!`);
    }
  };

  if (!isProfessorFlow) {
    // AQUÍ ESTÁ EL CAMBIO: Le pasamos la función al componente SignUp
    return <SignUp onRegister={handleInitialSignUp} />;
  } else {
    return <SignUpProfessor fullName={userData.fullName} email={userData.email} />;
  }
};

export default RegistrationPage;