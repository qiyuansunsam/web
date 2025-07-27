import express from 'express'
import { body, validationResult } from 'express-validator'
import { sendEmail } from '../config/email.js'

const router = express.Router()

const contactValidation = [
  body('name').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('subject').notEmpty().trim().escape(),
  body('message').notEmpty().trim().escape()
]

router.post('/', contactValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, subject, message } = req.body

  try {
    await sendEmail({
      to: process.env.RECIPIENT_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    res.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ success: false, message: 'Failed to send email' })
  }
})

export default router