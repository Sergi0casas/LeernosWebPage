import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowMobileMenu(false);
  };

  // --- Estilos CSS en formato de objeto JavaScript ---

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? '1rem' : '1rem 2rem',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#fff',
    colorScheme: 'light',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  };

  const logoStyle = {
    fontSize: isMobile ? '1.5rem' : '1.8rem',
    fontWeight: 'bold',
    color: '#0047b3',
    textDecoration: 'none',
  };

  const navStyle = {
    display: isMobile ? 'none' : 'flex',
    gap: '2rem',
  };

  const mobileNavStyle = {
    display: showMobileMenu ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderBottom: '1px solid #e0e0e0',
    padding: '1rem',
    gap: '1rem',
    zIndex: 1001,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: '2px solid #0047b3',
    borderRadius: '5px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem 0.8rem',
    color: '#0047b3',
    transition: 'all 0.3s ease',
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
    display: isMobile ? 'none' : 'flex',
    gap: '1rem',
  };

  const mobileActionsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid #e0e0e0',
  };

  const mobileNavLinkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    padding: '0.8rem',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    textAlign: 'center',
  };

  const baseButtonStyle = {
    padding: '0.6rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  const mobileButtonStyle = {
    ...baseButtonStyle,
    width: '100%',
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
    zIndex: 1002,
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

      {/* Botón Hamburguesa para móvil */}
      <button 
        style={hamburgerStyle}
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0047b3';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#0047b3';
        }}
        aria-label="Toggle menu"
      >
        {showMobileMenu ? '✕' : '☰'}
      </button>

      {/* Centro: Navegación Desktop */}
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
                {user?.role === 'teacher' && (
                  <Link 
                    to="/create-course"
                    style={{
                      ...dropdownItemStyle,
                      backgroundColor: '#e8f4ff',
                      color: '#0056d2',
                      fontWeight: '600',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d0e8ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8f4ff';
                    }}
                  >
                    ✨ Crear Curso
                  </Link>
                )}
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

      {/* Menú Móvil */}
      {isMobile && (
        <nav style={mobileNavStyle}>
          <Link 
            to="/" 
            style={mobileNavLinkStyle}
            onClick={() => setShowMobileMenu(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056d2';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#333';
            }}
          >
            Inicio
          </Link>
          <Link 
            to={isAuthenticated() ? (user?.role === 'teacher' ? '/professor-schedule' : '/student-schedule') : '/login'}
            style={mobileNavLinkStyle}
            onClick={() => setShowMobileMenu(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056d2';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#333';
            }}
          >
            Mis Cursos
          </Link>
          <Link 
            to="/#profesores" 
            style={mobileNavLinkStyle}
            onClick={(e) => {
              e.preventDefault();
              setShowMobileMenu(false);
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
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#333';
            }}
          >
            Profesores
          </Link>

          {/* Acciones en móvil */}
          <div style={mobileActionsStyle}>
            {isAuthenticated() ? (
              <>
                <div style={{ textAlign: 'center', fontWeight: '600', color: '#333', padding: '0.5rem' }}>
                  👤 {user?.fullName}
                </div>
                {user?.role === 'teacher' && (
                  <Link 
                    to="/create-course"
                    style={{
                      ...mobileNavLinkStyle,
                      backgroundColor: '#e8f4ff',
                      color: '#0056d2',
                      fontWeight: '600',
                      border: '1px solid #b3d9ff',
                    }}
                    onClick={() => setShowMobileMenu(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d0e8ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8f4ff';
                    }}
                  >
                    ✨ Crear Curso
                  </Link>
                )}
                <Link 
                  to={user?.role === 'student' ? '/student-schedule' : '/professor-schedule'}
                  style={mobileNavLinkStyle}
                  onClick={() => setShowMobileMenu(false)}
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
                  style={{
                    ...mobileNavLinkStyle,
                    backgroundColor: '#ffebee',
                    color: '#d32f2f',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffcdd2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffebee';
                  }}
                >
                  🚪 Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: 'none' }} onClick={() => setShowMobileMenu(false)}>
                  <button style={{...loginButtonStyle, ...mobileButtonStyle}}>
                    Iniciar Sesión
                  </button>
                </Link>
                <Link to="/registro" style={{ textDecoration: 'none' }} onClick={() => setShowMobileMenu(false)}>
                  <button style={{...registerButtonStyle, ...mobileButtonStyle}}>
                    Registrarse
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;