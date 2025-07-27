import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import Hero from '../components/Hero/Hero'

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const qualifications = [
    {
      title: "Bachelor of Advanced Computing",
      institution: "University of Sydney",
      details: "Major in Computer Science",
      grade: "Distinction"
    },
    {
      title: "Bachelor of Commerce",
      institution: "University of Sydney",
      details: "Major in Business Information Systems",
      grade: "Distinction"
    }
  ]

  const skills = [
    "Python", "Java", "Machine Learning", "React", "Node", "Web Devs",
    "C/C++", "Kotlin", "Cloud", "Consulting"
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      <Hero />
      
      <motion.section 
        ref={ref}
        className="container"
        style={{ padding: '4rem 2rem' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #fff 0%, #c0c0c0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}>
            Qualifications
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.15 } }}
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                  padding: '2rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(192, 192, 192, 0.2)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>
                  {qual.title}
                </h3>
                <p style={{ color: '#c0c0c0', marginBottom: '0.5rem' }}>{qual.institution}</p>
                <p style={{ color: '#999', fontSize: '0.9rem' }}>{qual.details}</p>
                <p style={{ 
                  color: '#e5e5e5', 
                  fontWeight: '600',
                  marginTop: '1rem',
                  fontSize: '1.1rem'
                }}>
                  Grade: {qual.grade}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '2rem',
              borderRadius: '15px',
              border: '1px solid rgba(192, 192, 192, 0.2)',
              marginBottom: '3rem'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Additional Information
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center'
            }}>
              <div>
                <h4 style={{ color: '#c0c0c0', marginBottom: '0.5rem' }}>IELTS Score</h4>
                <a 
                  href="/pdfs/ielts.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'white',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(192, 192, 192, 0.1)'
                    e.target.style.color = '#c0c0c0'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.color = 'white'
                  }}
                  title="Click to download IELTS certificate"
                >
                  7.5
                </a>
              </div>
              <div>
                <h4 style={{ color: '#c0c0c0', marginBottom: '0.5rem' }}>Visa Status</h4>
                <p style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Full Working Rights</p>
                <p style={{ fontSize: '1rem', color: '#a0a0a0' }}>Temporary Graduate Visa (485)</p>
              </div>
              <div>
                <h4 style={{ color: '#c0c0c0', marginBottom: '0.5rem' }}>Academic Transcript</h4>
                <a 
                  href="https://www.myequals.net/sharelink/a05c96ac-c35e-466a-9937-3d12fdfd4af5/8bf21b5b-a6f2-4912-beeb-e6d579f838e5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1.2rem',
                    color: '#c0c0c0',
                    textDecoration: 'none',
                    border: '1px solid #c0c0c0',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#c0c0c0'
                    e.target.style.color = '#000'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.color = '#c0c0c0'
                  }}
                >
                  View Transcript
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 style={{ 
              fontSize: '2rem', 
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#fff'
            }}>
              Technical Skills
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: 'linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%)',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '25px',
                    border: '1px solid rgba(192, 192, 192, 0.3)',
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: '#e5e5e5'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home