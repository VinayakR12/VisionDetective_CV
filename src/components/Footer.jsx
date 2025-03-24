import React from 'react'
import "../styles/Footer.css"
import { Shield } from "lucide-react"

function Footer() {
  return (
    <footer className="home-footer" id="contact">
        <div className="footer-content">
          <div className="footer-logo">
            <Shield className="footer-logo-icon" />
            <span>VisionDetective</span>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#features" className='f1'>Features</a>
                </li>
                <li>
                  <a href="#how-it-works" className='f1'>How It Works</a>
                </li>
                <li>
                  <a href="#pricing" className='f1'>Pricing</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <button onClick={() => handleNavigation("/about")} className='f1'>About Us</button>
                </li>
                <li>
                  <a href="#contact" className='f1'>Contact</a>
                </li>
                <li>
                  <a href="#careers" className='f1'>Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-column" >
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#blog" className='f1'>Blog</a>
                </li>
                <li>
                  <a href="#documentation" className='f1'>Documentation</a>
                </li>
                <li>
                  <a href="#support" className='f1'>Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className='p2'> © 2025 VisionDetective. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
