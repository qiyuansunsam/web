import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { useSpring, animated } from '@react-spring/web'
import styles from './Hero.module.css'

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const springProps = useSpring({
    from: { transform: 'scale(0.9)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { tension: 200, friction: 20 }
  })

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect} />
      
      <motion.div 
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.h1 
          className={styles.title}
          variants={fadeIn}
        >
          <span className={styles.greeting}>Hello, I'm</span>
          <span className={styles.name}>Sam</span>
        </motion.h1>

        <motion.div 
          className={styles.typewriter}
          variants={fadeIn}
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Advanced Computing Graduate',
              2000,
              'Problem Solver',
              2000,
              'AI Enthusiast',
              2000,
              'Tech Consultant',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>


        <motion.div 
          className={styles.actions}
          variants={fadeIn}
        >
          <animated.a 
            href="/pdfs/CV.pdf" 
            className={styles.primaryButton}
            style={springProps}
            download
          >
            <FiDownload /> Download Resume
          </animated.a>
        </motion.div>
      </motion.div>

      <div className={styles.socialLinksWrapper}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/qiyuansunsam" target="_blank" rel="noopener noreferrer">
            <FiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/qiyuan-sun-6a19a615a/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={24} />
          </a>
          <a href="mailto:quiyuansunsam@gmail.com">
            <FiMail size={24} />
          </a>
        </div>
      </div>

    </section>
  )
}

export default Hero