
import { useNavigate } from "react-router-dom"
import { Shield, Users, Code, Server, Award, Cpu,Layers, Eye, Search } from "lucide-react"
import { useDetection } from "../context/DetectionContext"
import "../styles/AboutPage.css"
import Footer from "../components/Footer"

const AboutPage = () => {
  const navigate = useNavigate()
  const { startPageTransition } = useDetection()

  const handleNavigation = (path) => {
    startPageTransition()
    setTimeout(() => {
      navigate(path)
    }, 300)
  }

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About VisionDetective</h1>
          <p>
            We're on a mission to revolutionize security systems with advanced computer vision technology that makes
            threat detection more accurate, efficient, and accessible.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="about-section-content">
          <h2>About </h2>
          <div className="about-story">
            <div className="about-story-image">
              <div className="image-placeholder">
                <Shield className="placeholder-icon" />
              </div>
            </div>
            <div className="about-story-text">
            <p>
  Vision Detective was developed to revolutionize security through AI-driven image analysis. Traditional surveillance systems often rely on human monitoring, making threat detection slow and inefficient.
</p>
<p>
  Our team designed an intelligent system capable of analyzing images to extract crucial details such as age, gender, height, weight, and objects carried by a suspect. This technology enhances identification and provides instant, data-driven insights without requiring constant human supervision.
</p>
<p>
  Through advanced computer vision and machine learning, Vision Detective delivers real-time, accurate reports, empowering law enforcement and security teams to accelerate suspect recognition and improve safety measures.
</p>

            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="about-section technology-section">
        <div className="about-section-content">
          <h2>Our Technology</h2>
          <div className="technology-grid">
            <div className="technology-card">
              <div className="technology-icon">
                <Cpu />
              </div>
              <h3>Computer Vision</h3>
              <p>
                Our system uses advanced computer vision algorithms to analyze images and video streams, identifying
                people, objects, and activities with remarkable accuracy.
              </p>
            </div>

            <div className="technology-card">
              <div className="technology-icon">
                <Code />
              </div>
              <h3>Machine Learning</h3>
              <p>
                We employ sophisticated machine learning models trained on diverse datasets to recognize suspicious
                behavior patterns and potential security threats.
              </p>
            </div>

            <div className="technology-card">
              <div className="technology-icon">
                <Server />
              </div>
              <h3>Cloud Processing</h3>
              <p>
                Our cloud-based architecture enables rapid processing of complex visual data, delivering results in
                seconds while maintaining system scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="vision-benefits">
  <div className="vision-benefits-content">
    <h2 className="benefits-title">Why Choose Vision Detective?</h2>
    <div className="benefits-intro">
      <Shield className="benefits-main-icon" />
      <p>
        Vision Detective offers cutting-edge AI-powered identification and analysis, ensuring advanced security insights and rapid detection.
      </p>
    </div>

    <div className="benefits-grid">
      <div className="benefit-card">
        <div className="benefit-icon-container">
        <Eye />
  </div>
  <h3 className="title3">Instant Risk Assessment</h3>
  <p>Analyzes key indicators in real-time to assess potential risks, enabling proactive security measures.</p>
</div>

      <div className="benefit-card">
        <div className="benefit-icon-container">
        <Search />
  </div>
  <h3 className="title3">AI-Driven Identification</h3>
  <p>Utilizes advanced AI to recognize individuals with high accuracy, ensuring faster and more reliable identification.</p>
</div>

      <div className="benefit-card">
      <div className="benefit-icon-container">
    <Layers />
  </div>
  <h3 className="title3">Multi-Factor Analysis</h3>
  <p>Evaluates multiple parameters, including facial features, behavior, and anomalies, for comprehensive identification.</p>
</div>

    </div>
  </div>
</section>
{/* Values Section */}
<section className="about-section values-section">
  <div className="about-section-content">
    <h2>Our Core Values</h2>
    <div className="values-grid">
      
      <div className="value-card">
        <h3>Accuracy & Reliability</h3>
        <p>
          We are committed to delivering <b>high-precision AI-powered identification</b>, ensuring accurate and trustworthy results.
        </p>
      </div>

      <div className="value-card">
        <h3>Real-Time Intelligence</h3>
        <p>
          Our system provides <b>instant analysis</b> and actionable insights, enabling <b>faster decision-making and response.</b>
        </p>
      </div>

      <div className="value-card">
        <h3>Innovation & AI Excellence</h3>
        <p>
          We continuously advance <b>computer vision and AI technologies</b> to enhance detection and identification capabilities.
        </p>
      </div>

      <div className="value-card">
        <h3>Ethical AI & Privacy</h3>
        <p>
          We ensure <b>strict data privacy</b> and <b>ethical AI use</b> protecting user information while maintaining top-tier security.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Experience the Future of Security</h2>
          <p>
            Try our advanced thief detection system and see how computer vision technology can transform your security
            approach.
          </p>
          <button className="about-cta-button" onClick={() => handleNavigation("/detect")}>
            Start Detection Now
          </button>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  )
}

export default AboutPage

