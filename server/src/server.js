import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import path from 'path'
import { fileURLToPath } from 'url'
import contactRoutes from './routes/contact.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(cors())
app.use(express.json())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})

app.use('/api/', limiter)

app.use('/api/contact', contactRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Serve static files from the client build directory
const clientBuildPath = path.join(__dirname, '../../client/dist')
app.use(express.static(clientBuildPath))

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(clientBuildPath, 'index.html'))
  } else {
    res.status(404).json({ error: 'API route not found' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})