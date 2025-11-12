
import React from 'react';
// En: src/pages/HomePage.jsx



import  HomePage  from './pages/HomePage';// <-- ¡Añade las llaves!
// Si tienes estilos globales, mantenlos
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpProfessor from './pages/SignUpProfessor';
import StudentSchedule from './pages/StudentSchedule';
import ProfessorSchedule from './pages/ProfessorSchedule';
import CourseDetailsPage from './pages/CourseDetailsPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <div>
      <SignUp/> {/* <-- 2. Renderiza la página de inicio */}
    </div>
  );
}

export default App;