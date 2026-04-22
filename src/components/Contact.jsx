import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'Email',
    value: 'preethpreeth854@gmail.com'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 9840841183'
  },
]

export default function Contact() {
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Log the configuration check (optional, but helpful for debugging)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      publicKey
    )
      .then((result) => {
        alert('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, (error) => {
        console.error('EmailJS Error:', error)
        alert('Oops! Something went wrong. Please check your .env credentials or try again later.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          Let's build something <span className="gradient-text">immersive</span>
        </h2>
        <p className="section-subtitle">Have an XR project in mind? Let's create the next breakthrough immersive experience together.</p>

        <div className="contact__grid">
          <div className="contact__info">
            {contactInfo.map((info, index) => (
              <div className="contact__info-card" key={index}>
                <div className="contact__info-icon">{info.icon}</div>
                <div>
                  <div className="contact__info-label">{info.label}</div>
                  <div className="contact__info-value">{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form ref={formRef} className="contact__form" onSubmit={handleSubmit} id="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="input-name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="input-email"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Project Type (VR / AR / MR)"
                value={formData.subject}
                onChange={handleChange}
                required
                id="input-subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell me about your XR project..."
                value={formData.message}
                onChange={handleChange}
                required
                id="input-message"
              />
            </div>
            <button
              type="submit"
              className={`btn btn--primary btn--submit ${isSubmitting ? 'btn--loading' : ''}`}
              id="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
