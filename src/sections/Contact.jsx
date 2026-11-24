import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          subtitle="GET IN TOUCH"
          title="Contact Me"
          description="Interested in discussing internship opportunities, academic collaboration, or technology projects? Reach out directly!"
        />

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Let's Connect & Collaborate</h3>
            <p className="contact-info-text">
              I am actively seeking internship opportunities where I can apply my analytical thinking, technical skills, and problem-solving abilities to contribute to impactful digital solutions.
            </p>

            <div className="contact-channels">
              <a href={`mailto:${personalInfo.email}`} className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-channel-label">Email Address</div>
                  <div className="contact-channel-value">{personalInfo.email}</div>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-channel-label">Phone / WhatsApp</div>
                  <div className="contact-channel-value">{personalInfo.phone}</div>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="contact-channel-label">LinkedIn Profile</div>
                  <div className="contact-channel-value">linkedin.com</div>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Github size={20} />
                </div>
                <div>
                  <div className="contact-channel-label">GitHub Profile</div>
                  <div className="contact-channel-value">github.com/JMIG-Jayasooriya</div>
                </div>
              </a>

              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-channel-label">Location</div>
                  <div className="contact-channel-value">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong>Immediate Status:</strong> Open for Internship Opportunities & Professional Collaborations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#E8EEFF', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px auto' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  Thank you for reaching out, {personalInfo.name} will respond to your message promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', marginBottom: '18px' }}>
                  Send a Direct Message
                </h3>

                {error && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', color: '#B91C1C', fontSize: '0.88rem', marginBottom: '18px' }}>
                    <AlertCircle size={18} />
                    <span>{error}</span>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="e.g. Hiring Manager / Recruiter"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="e.g. Internship Opportunity / Interview Invitation / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Write your inquiry or message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
