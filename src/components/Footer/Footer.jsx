import React from 'react'
import './Footer.css'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Shoppio</div>
        <nav className="footer-nav">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Shoppio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer