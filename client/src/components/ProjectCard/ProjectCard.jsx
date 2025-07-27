import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi'
import Tilt from 'react-parallax-tilt'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project, onClick }) => {
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
            <img 
              src={project.images[0]} 
              alt={project.title}
              className={styles.projectImage}
              style={{display: project.demo ? 'none' : 'block'}}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
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