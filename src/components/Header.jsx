import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // --- Estilos CSS en formato de objeto JavaScript ---

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#fff',
    colorScheme: 'light',
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#0047b3', // Un azul oscuro similar al de la imagen
    textDecoration: 'none',
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem', // Espacio entre los enlaces
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    padding: '0.6rem 1rem',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  };

  const actionsStyle = {
    display: 'flex',
    gap: '1rem', // Espacio entre los botones
  };

  const baseButtonStyle = {
    padding: '0.6rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  const loginButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: '#fff',
    color: '#0056d2',
    border: '1px solid #0056d2',
  };

  const registerButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: '#0056d2',
    color: '#fff',
  };

  const userMenuStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const userNameStyle = {
    fontWeight: '600',
    color: '#333',
    cursor: 'pointer',
    padding: '0.6rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '10px',
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    minWidth: '200px',
    zIndex: 1000,
    overflow: 'hidden',
  };

  const dropdownItemStyle = {
    padding: '12px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    color: '#333',
    textDecoration: 'none',
    display: 'block',
    borderBottom: '1px solid #f0f0f0',
  };

  const logoutButtonStyle = {
    ...dropdownItemStyle,
    color: '#d32f2f',
    fontWeight: '600',
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left',
  };


  return (
    <header style={headerStyle} data-color-scheme="light">
      {/* Lado Izquierdo: Logo */}
      <div>
        <Link to="/" style={logoStyle}>Leernos</Link>
      </div>

      {/* Centro: Navegación */}
      <nav style={navStyle}>
        <Link 
          to="/" 
          style={navLinkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0056d2';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#333';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Inicio
        </Link>
        <Link 
          to={isAuthenticated() ? (user?.role === 'teacher' ? '/professor-schedule' : '/student-schedule') : '/login'}
          style={navLinkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0056d2';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#333';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Mis Cursos
        </Link>
        <Link 
          to="/#profesores" 
          style={navLinkStyle}
          onClick={(e) => {
            e.preventDefault();
            const profesoresSection = document.getElementById('profesores-section');
            if (profesoresSection) {
              profesoresSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigate('/');
              setTimeout(() => {
                const section = document.getElementById('profesores-section');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0056d2';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#333';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Profesores
        </Link>
      </nav>

      {/* Lado Derecho: Acciones o Menú de Usuario */}
      <div style={actionsStyle}>
        {isAuthenticated() ? (
          /* Usuario autenticado - Mostrar nombre y menú */
          <div 
            style={userMenuStyle}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div 
              style={userNameStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              👤 {user?.fullName}
            </div>
            
            {showDropdown && (
              <div style={dropdownStyle}>
                <Link 
                  to={user?.role === 'student' ? '/student-schedule' : '/professor-schedule'}
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  📅 Mi Horario
                </Link>
                <button 
                  onClick={handleLogout}
                  style={logoutButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffebee';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  🚪 Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Usuario no autenticado - Mostrar botones de login/registro */
          <>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={loginButtonStyle}>
                Iniciar Sesión
              </button>
            </Link>
            <Link to="/registro" style={{ textDecoration: 'none' }}>
              <button style={registerButtonStyle}>
                Registrarse
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;