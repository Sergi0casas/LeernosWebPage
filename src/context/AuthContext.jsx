import React, { createContext, useContext, useState } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  // Intentar recuperar el usuario desde localStorage al iniciar
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Función para registrar un usuario
  const register = (userData) => {
    const newUser = {
      id: Date.now(), // Generar un ID único basado en timestamp
      fullName: userData.fullName,
      email: userData.email,
      role: userData.role, // 'student' o 'teacher'
      institution: userData.institution || null,
      teachingTime: userData.teachingTime || null,
      timePeriod: userData.timePeriod || null,
    };
    setUser(newUser);
    // Guardar en localStorage para persistencia
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    // En una app real, aquí harías la petición al backend
    console.log('Usuario registrado:', newUser);
  };

  // Función para hacer login
  const login = (email, password) => {
    // Simulación de login (en una app real, verificarías con el backend)
    const mockUser = {
      fullName: 'Usuario Demo',
      email: email,
      role: 'student', // Puedes cambiar esto para probar
    };
    setUser(mockUser);
    console.log('Usuario logueado:', mockUser);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    console.log('Usuario deslogueado');
  };

  // Verificar si el usuario está autenticado
  const isAuthenticated = () => {
    return user !== null;
  };

  // Verificar si el usuario es estudiante
  const isStudent = () => {
    return user?.role === 'student';
  };

  // Verificar si el usuario es profesor
  const isTeacher = () => {
    return user?.role === 'teacher';
  };

  const value = {
    user,
    register,
    login,
    logout,
    isAuthenticated,
    isStudent,
    isTeacher,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

