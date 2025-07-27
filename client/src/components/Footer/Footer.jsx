import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtext}>
            Built with React, Node.js, and a passion for clean code
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer