import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Qualifications', href: '#qualifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#home" className="footer-brand no-underline" style={{ textDecoration: 'none' }}>
              {personalInfo.shortName}<span>.</span>
            </a>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '6px' }}>
              Information Systems Undergraduate · Sabaragamuwa University of Sri Lanka
            </p>
          </div>

          <div className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link no-underline" style={{ textDecoration: 'none' }}>
                {link.label}
              </a>
            ))}
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with React, Vite & modern web standards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
