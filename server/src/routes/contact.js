import express from 'express'
import { body, validationResult } from 'express-validator'
import fs from 'fs'
import path from 'path'

const router = express.Router()

const contactValidation = [
  body('name').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('subject').notEmpty().trim().escape(),
  body('message').notEmpty().trim().escape()
]

const logContactMessage = (messageData) => {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    ...messageData
  }
  
  const logMessage = `
=== CONTACT FORM SUBMISSION ===
Date: ${timestamp}
Name: ${messageData.name}
Email: ${messageData.email}
Subject: ${messageData.subject}
Message: ${messageData.message}
=====================================

`
  
  const logDir = path.join(process.cwd(), 'logs')
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true })
  }
  
  const logFile = path.join(logDir, 'contact-messages.log')
  fs.appendFileSync(logFile, logMessage)
  
  console.log('📧 New contact message received:', logEntry)
}

router.post('/', contactValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, subject, message } = req.body

  try {
    logContactMessage({ name, email, subject, message })
    res.json({ success: true, message: 'Message recorded successfully' })
  } catch (error) {
    console.error('Logging error:', error)
    res.status(500).json({ success: false, message: 'Failed to record message' })
  }
})

export default router