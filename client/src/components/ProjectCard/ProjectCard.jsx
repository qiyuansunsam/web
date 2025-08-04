import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi'
import Tilt from 'react-parallax-tilt'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Check if project is mobile/app related to use contain instead of cover
  const isMobileApp = project.title.toLowerCase().includes('android') || 
                      project.title.toLowerCase().includes('mobile') ||
                      project.title.toLowerCase().includes('app')

  useEffect(() => {
    if (!project.demo && project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
      }, 2000) // Change image every 2 seconds

      return () => clearInterval(interval)
    }
  }, [project.demo, project.images])

  return (
    <Tilt
      className={styles.tiltContainer}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1000}
    >
      <motion.div
        className={styles.card}
        whileHover={{ y: -5 }}
        onClick={onClick}
      >
        <div className={styles.imageContainer}>
          {project.demo ? (
            <video 
              src={project.demo} 
              className={styles.projectImage}
              muted
              loop
              autoPlay
              playsInline
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = project.images && project.images.length > 0 ? 'block' : 'none';
                if (e.target.nextElementSibling.nextElementSibling) {
                  e.target.nextElementSibling.nextElementSibling.style.display = project.images && project.images.length > 0 ? 'none' : 'flex';
                }
              }}
            />
          ) : null}
          {project.images && project.images.length > 0 ? (
            project.images.length > 1 && !project.demo ? (
              <div className={styles.imageCarousel} style={{display: project.demo ? 'none' : 'block'}}>
                {project.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${project.title} - ${index + 1}`}
                    className={styles.projectImage}
                    style={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                      objectFit: isMobileApp ? 'contain' : 'cover',
                      background: isMobileApp ? '#1a1a1a' : 'transparent'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ))}
              </div>
            ) : (
              <img 
                src={project.images[0]} 
                alt={project.title}
                className={styles.projectImage}
                style={{
                  display: project.demo ? 'none' : 'block',
                  objectFit: isMobileApp ? 'contain' : 'cover',
                  background: isMobileApp ? '#1a1a1a' : 'transparent'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
            )
          ) : null}
          <div className={styles.imagePlaceholder} style={{display: (project.demo || (project.images && project.images.length > 0)) ? 'none' : 'flex'}}>
            <span>{project.title.charAt(0)}</span>
          </div>
          <div className={styles.overlay}>
            <button className={styles.viewButton}>View Details</button>
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.shortDescription}</p>
          
          <div className={styles.technologies}>
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className={styles.tech}>{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className={styles.tech}>+{project.technologies.length - 3}</span>
            )}
          </div>

          <div className={styles.links}>
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub />
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink />
              </a>
            )}
            {project.downloadLink && (
              <a
                href={project.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                onClick={(e) => e.stopPropagation()}
                title="Download Paper"
              >
                <FiDownload />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default ProjectCard