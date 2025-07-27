import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm/ContactForm'
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <FiLinkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: <FiGithub size={24} />,
      label: "GitHub",
      value: "github.com/yourusername",
      link: "https://github.com/yourusername"
    },
    {
      icon: <FiMapPin size={24} />,
      label: "Location",
      value: "Sydney, NSW, Australia",
      link: null
    }
  ]

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff 0%, #c0c0c0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Get In Touch
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'var(--metallic)',
            marginBottom: '4rem',
            maxWidth: '600px',
            margin: '0 auto 4rem'
          }}>
            I'm always open to discussing new opportunities and interesting projects
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Information</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                      borderRadius: '15px',
                      border: '1px solid rgba(192, 192, 192, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px)'
                      e.currentTarget.style.borderColor = 'rgba(192, 192, 192, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)'
                      e.currentTarget.style.borderColor = 'rgba(192, 192, 192, 0.1)'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(192, 192, 192, 0.1)',
                      borderRadius: '50%',
                      color: 'var(--metallic)'
                    }}>
                      {info.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: 'var(--metallic)', marginBottom: '0.25rem' }}>{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ 
                            color: 'var(--primary-white)', 
                            fontSize: '1.1rem',
                            textDecoration: 'none'
                          }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ color: 'var(--primary-white)', fontSize: '1.1rem' }}>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact