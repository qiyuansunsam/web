import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { projectsData } from '../utils/projectsData'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff 0%, #c0c0c0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <motion.p
          style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'var(--metallic)',
            marginBottom: '4rem',
            maxWidth: '800px',
            margin: '0 auto 4rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore my portfolio of projects showcasing full-stack development, 
          AI integration, and innovative solutions
        </motion.p>

        <motion.div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            padding: '0 1rem'
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard 
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '2rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--secondary-black)',
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflow: 'auto',
                border: '1px solid var(--metallic-dark)'
              }}
            >
              <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


const ProjectDetail = ({ project, onClose }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem' }}>{project.title}</h2>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: '2px solid var(--metallic)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'var(--metallic)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--metallic)'
            e.target.style.color = 'var(--primary-black)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.color = 'var(--metallic)'
          }}
        >
          ×
        </button>
      </div>

      {(project.demo || (project.images && project.images.length > 0)) && (
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: project.images && project.images.length === 1 
              ? '1fr' 
              : 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem',
            alignItems: 'start'
          }}>
            {project.demo && (
              <motion.video
                src={project.demo}
                controls
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0 }}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  border: '1px solid var(--metallic-dark)',
                  maxHeight: '400px'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            {project.images && project.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: project.demo ? (index + 1) * 0.1 : index * 0.1 }}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  border: '1px solid var(--metallic-dark)',
                  maxHeight: '400px'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--metallic-light)' }}>
        {project.fullDescription.split('\n\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            {paragraph}
          </p>
        ))}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Key Features</h3>
        <ul style={{ listStyle: 'none' }}>
          {project.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                marginBottom: '0.8rem', 
                color: 'var(--metallic)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ color: 'var(--metallic-light)' }}>▹</span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technologies Used</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                background: 'var(--gradient-1)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: '1px solid var(--metallic-dark)',
                fontSize: '0.9rem'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.8rem 1.5rem',
              background: 'var(--gradient-2)',
              color: 'var(--primary-black)',
              borderRadius: '25px',
              fontWeight: '600',
              transition: 'transform 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            View on GitHub
          </a>
        )}
        
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.8rem 1.5rem',
              background: 'transparent',
              color: 'var(--metallic)',
              border: '2px solid var(--metallic)',
              borderRadius: '25px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--metallic)'
              e.target.style.color = 'var(--primary-black)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = 'var(--metallic)'
            }}
          >
            Live Demo
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.8rem 1.5rem',
              background: 'var(--gradient-1)',
              color: 'var(--primary-black)',
              borderRadius: '25px',
              fontWeight: '600',
              transition: 'transform 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            View Demo Video
          </a>
        )}

        {project.downloadLink && (
          <a
            href={project.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.8rem 1.5rem',
              background: 'transparent',
              color: 'var(--metallic-light)',
              border: '2px solid var(--metallic-light)',
              borderRadius: '25px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--metallic-light)'
              e.target.style.color = 'var(--primary-black)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = 'var(--metallic-light)'
            }}
          >
            Download PDF
          </a>
        )}
      </div>
    </div>
  )
}

export default Projects