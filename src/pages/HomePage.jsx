import { useNavigate } from "react-router-dom"
import { Eye, Zap, UserCheck, FileText } from "lucide-react"
import { useDetection } from "../context/DetectionContext"
import "../styles/HomePage.css"
import eye from "../styles/EyeScanner.mp4"
import Footer from "../components/Footer"

const HomePage = () => {
  const navigate = useNavigate()
  const { startPageTransition } = useDetection()
  const handleNavigation = (path, elementId) => {
  const element = document.getElementById(elementId);
  
  if (element) {
  
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    
    startPageTransition();
    setTimeout(() => {
      navigate(path);
    }, 300);
  }
};

  return (
    <div className="home-container">
      {/* Hero Section */}
      {/* <Notice/> */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero1">
          <h2><p style={{color: "darkblue", fontSize: "33px", fontWeight: "bold" ,  margin:0 }}>VisionDetective :</p>
          Smart AI for Fast & Accurate Intruder Identification</h2>
          <p>
          Our AI-powered system helps detect intruders and quickly analyze key details to support identification. Whether day or night, VisionDetective enhances security, making it easier to recognize potential threats.
          </p>
          <b style={{ 
   marginBottom: "20px", 
    fontSize: "20px", 
    fontWeight: "bold", 
    // textAlign: "center", 
    display: "block", 
}}>
    🔍 Fast Detection. Better Protection.
</b>
</div>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => handleNavigation("/detect")}>
              Start Detection
            </button>
            <button className="secondary-button" onClick={() => handleNavigation("/about")}>
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
      <div className="image-container">
        <div className="security-camera">
          <video className="eye-scanner-video" autoPlay loop muted>
            <source src={eye} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
        <div className="feature-card">
  <div className="feature-icon">
    <Eye />
  </div>
  <h3>Intruder Identification</h3>
  <p>Detect and recognize unauthorized individuals using AI-driven facial and body analysis.</p>
</div>

<div className="feature-card">
  <div className="feature-icon">
    <Zap />
  </div>
  <h3>Night Vision Surveillance</h3>
  <p>Enhanced detection in low-light conditions ensures security even in complete darkness.</p>
</div>

<div className="feature-card">
  <div className="feature-icon">
    <UserCheck />
  </div>
  <h3>Suspect Profiling</h3>
  <p>Estimate age, gender, height, and weight to assist law enforcement in suspect identification.</p>
</div>

<div className="feature-card">
  <div className="feature-icon">
    <FileText />
  </div>
  <h3>Detailed Reporting</h3>
  <p>Generate comprehensive security reports with detection logs, images, and recommended actions.</p>
</div>
</div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Upload Evidence</h3>
            <p>Submit an image from your security camera or surveillance system to our advanced detection platform.</p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Analysis</h3>
            <p>
              Our computer vision algorithms analyze the image to identify people, objects, and potential security
              threats.
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Threat Detection</h3>
            <p>
              The system determines if an intruder is present and identifies any dangerous objects or suspicious
              activities.
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">4</div>
            <h3>Detailed Results</h3>
            <p>
              Receive comprehensive analysis with subject profiles, threat assessments, and recommended security
              actions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Identify and Recognize with VisionDetective</h2>
          <p>
          Utilize our advanced AI-powered system to analyze images and extract crucial details for swift and precise identification. Instantly generate comprehensive reports to enhance suspect recognition and aid in efficient verification.
          </p>
          <button className="cta-button" onClick={() => handleNavigation("/detect")}> 
            Start Detection Now 
          </button>
        </div>
      </section>
    

     <Footer/>
     
    </div>
  )
}

export default HomePage

