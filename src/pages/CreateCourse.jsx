import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CreateCourse = () => {
  const { user, isAuthenticated, isTeacher } = useAuth();
  const navigate = useNavigate();

  // Estados para el formulario
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    duration: '',
    level: 'Principiante',
    topics: '',
    price: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Verificar autenticación y rol
  useEffect(() => {
    if (!isAuthenticated()) {
      alert('Por favor, inicia sesión para continuar');
      navigate('/login');
    } else if (!isTeacher()) {
      alert('Solo los profesores pueden crear cursos');
      navigate('/');
    }
  }, [isAuthenticated, isTeacher, navigate]);

  // Si no hay usuario o no es profesor, no renderizar
  if (!user || user.role !== 'teacher') {
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear el objeto del curso
    const newCourse = {
      id: Date.now(),
      title: courseData.title,
      description: courseData.description,
      imageUrl: courseData.imageUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&q=80&w=800',
      duration: courseData.duration,
      level: courseData.level,
      students: 0,
      rating: 5.0,
      topics: courseData.topics.split(',').map(topic => topic.trim()).filter(topic => topic !== ''),
      instructor: user.fullName,
      professorId: user.id,
      professors: [{
        id: user.id,
        name: user.fullName,
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&q=80&w=200',
        rating: 5.0,
        university: user.institution || 'Universidad',
        experience: `${user.teachingTime} ${user.timePeriod === 'months' ? 'meses' : 'años'} de experiencia`,
        recognitions: ['Profesor Verificado'],
        pricePerHour: parseInt(courseData.price) || 30000,
      }],
      createdAt: new Date().toISOString(),
    };

    // Guardar en localStorage
    const existingCourses = JSON.parse(localStorage.getItem('customCourses') || '[]');
    existingCourses.push(newCourse);
    localStorage.setItem('customCourses', JSON.stringify(existingCourses));

    // Mensaje de éxito
    alert(`✅ ¡Curso "${courseData.title}" creado exitosamente!`);

    // Redirigir al horario del profesor
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/professor-schedule');
    }, 500);
  };

  // --- Estilos ---
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7f9',
    minHeight: '100vh',
    colorScheme: 'light',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: 'clamp(20px, 4vw, 40px)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: 'clamp(30px, 5vw, 40px)',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    color: '#666',
  };

  const formContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    padding: 'clamp(25px, 5vw, 40px)',
  };

  const formGroupStyle = {
    marginBottom: 'clamp(20px, 4vw, 25px)',
  };

  const labelStyle = {
    display: 'block',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: 'clamp(10px, 2vw, 12px)',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
    fontFamily: 'inherit',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
  };

  const buttonStyle = {
    width: '100%',
    padding: 'clamp(12px, 2.5vw, 15px)',
    backgroundColor: isSubmitting ? '#999' : '#0056d2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    fontWeight: 'bold',
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  };

  const helpTextStyle = {
    fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)',
    color: '#777',
    marginTop: '5px',
  };

  const previewBoxStyle = {
    backgroundColor: '#f8f9fa',
    border: '2px dashed #ddd',
    borderRadius: '8px',
    padding: 'clamp(15px, 3vw, 20px)',
    marginTop: '15px',
  };

  const previewTitleStyle = {
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    fontWeight: '600',
    color: '#555',
    marginBottom: '10px',
  };

  return (
    <div style={pageStyle} data-color-scheme="light">
      <Header />
      
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>📚 Crear Nuevo Curso</h1>
          <p style={subtitleStyle}>Comparte tu conocimiento con estudiantes de todo el mundo</p>
        </div>

        <form onSubmit={handleSubmit} style={formContainerStyle}>
          {/* Título del Curso */}
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="title">
              Título del Curso *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={courseData.title}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Ej: Desarrollo Web con React"
              required
              onFocus={(e) => e.target.style.borderColor = '#0056d2'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Descripción */}
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="description">
              Descripción del Curso *
            </label>
            <textarea
              id="description"
              name="description"
              value={courseData.description}
              onChange={handleInputChange}
              style={textareaStyle}
              placeholder="Describe qué aprenderán los estudiantes en este curso..."
              required
              onFocus={(e) => e.target.style.borderColor = '#0056d2'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            <p style={helpTextStyle}>Mínimo 50 caracteres</p>
          </div>

          {/* URL de Imagen */}
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="imageUrl">
              URL de Imagen (opcional)
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={courseData.imageUrl}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="https://ejemplo.com/imagen.jpg"
              onFocus={(e) => e.target.style.borderColor = '#0056d2'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            <p style={helpTextStyle}>Deja en blanco para usar una imagen por defecto</p>
          </div>

          {/* Duración y Nivel */}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ ...formGroupStyle, flex: '1 1 calc(50% - 10px)', minWidth: '200px' }}>
              <label style={labelStyle} htmlFor="duration">
                Duración *
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={courseData.duration}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="Ej: 12 semanas"
                required
                onFocus={(e) => e.target.style.borderColor = '#0056d2'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={{ ...formGroupStyle, flex: '1 1 calc(50% - 10px)', minWidth: '200px' }}>
              <label style={labelStyle} htmlFor="level">
                Nivel *
              </label>
              <select
                id="level"
                name="level"
                value={courseData.level}
                onChange={handleInputChange}
                style={selectStyle}
                required
                onFocus={(e) => e.target.style.borderColor = '#0056d2'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              >
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
            </div>
          </div>

          {/* Temas */}
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="topics">
              Temas del Curso *
            </label>
            <textarea
              id="topics"
              name="topics"
              value={courseData.topics}
              onChange={handleInputChange}
              style={{ ...textareaStyle, minHeight: '100px' }}
              placeholder="Separa cada tema con una coma. Ej: React Básico, Hooks, Context API, Redux"
              required
              onFocus={(e) => e.target.style.borderColor = '#0056d2'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            <p style={helpTextStyle}>Separa los temas con comas</p>
            
            {/* Preview de temas */}
            {courseData.topics && (
              <div style={previewBoxStyle}>
                <p style={previewTitleStyle}>Vista previa de temas:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {courseData.topics.split(',').map((topic, index) => (
                    topic.trim() && (
                      <span
                        key={index}
                        style={{
                          backgroundColor: '#e8f4ff',
                          color: '#0056d2',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)',
                          border: '1px solid #b3d9ff',
                        }}
                      >
                        ✓ {topic.trim()}
                      </span>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Precio por Hora */}
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="price">
              Precio por Hora (COP) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={courseData.price}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Ej: 35000"
              min="10000"
              step="1000"
              required
              onFocus={(e) => e.target.style.borderColor = '#0056d2'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            <p style={helpTextStyle}>
              Precio que cobrarás por hora de clase (mínimo: $10,000 COP)
            </p>
          </div>

          {/* Botón de Envío */}
          <button
            type="submit"
            style={buttonStyle}
            disabled={isSubmitting}
            onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#0040a0')}
            onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#0056d2')}
          >
            {isSubmitting ? '⏳ Creando curso...' : '✨ Publicar Curso'}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreateCourse;

