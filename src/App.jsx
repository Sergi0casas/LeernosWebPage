import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Importar todas las páginas
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpProfessor from './pages/SignUpProfessor';
import StudentSchedule from './pages/StudentSchedule';
import ProfessorSchedule from './pages/ProfessorSchedule';
import CourseDetailsPage from './pages/CourseDetailsPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgotPassword from './pages/ForgotPassword';
import CreateCourse from './pages/CreateCourse';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        {/* Ruta principal - HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Rutas de cursos */}
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/create-course" element={<CreateCourse />} />
        
        {/* Rutas de horarios */}
        <Route path="/student-schedule" element={<StudentSchedule />} />
        <Route path="/professor-schedule" element={<ProfessorSchedule />} />
        
        {/* Ruta 404 - Si no existe la ruta */}
        <Route path="*" element={
          <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>404 - Página no encontrada</h1>
            <p>La página que buscas no existe.</p>
            <a href="/" style={{ color: '#0056d2' }}>Volver al inicio</a>
          </div>
        } />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;