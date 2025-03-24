
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Shield, Menu, X } from "lucide-react"
import { useDetection } from "../context/DetectionContext"
import logo from "../styles/image.png"
import "../styles/Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { startPageTransition } = useDetection()

  const handleNavigation = (path) => {
    startPageTransition()
    setIsMenuOpen(false)
    setTimeout(() => {
      navigate(path)
    }, 300)
  }

  const isActive = (path) => {
    return location.pathname === path
  }
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scroll to the bottom of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault()
            handleNavigation("/")
          }}
        >
          {/* <Shield className="logo-icon" /> */}
          <img src={logo} style={{height:"70px", weight:"70px"}}/>
          <span className="logo-text">VisionDetective</span>
        </Link>

        <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className={`navbar-item ${isActive("/") ? "active" : ""}`}>
            <button className="navbar-link" onClick={() => handleNavigation("/")}>
              Home
            </button>
          </li>
          <li className={`navbar-item ${isActive("/about") ? "active" : ""}`}>
            <button className="navbar-link" onClick={() => handleNavigation("/about")}>
              About
            </button>
          </li>
          <li className={`navbar-item ${isActive("/contact") ? "active" : ""}`}>
  <button className="navbar-link" onClick={scrollToBottom}>
    Contact
  </button>
</li>
          <li className="navbar-item action">
            <button className="action-button" onClick={() => handleNavigation("/detect")}>
              Start Detection
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

