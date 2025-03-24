import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AlertTriangle, ArrowLeft, User, Ruler, Scale, Crosshair } from "lucide-react"
import { useDetection } from "../context/DetectionContext"
import { PDFDownloadLink } from "@react-pdf/renderer"
import ThiefReport from "./TheifReport"
import "../styles/ThiefOutput.css"
import Footer from "./Footer"
const apiUrl = import.meta.env.VITE_API_URL;

const ThiefOutput = () => {
  
  const navigate = useNavigate()
  const { detectionResult, startPageTransition } = useDetection()


  useEffect(() => {
    
    if (!detectionResult) {
      startPageTransition()
      setTimeout(() => {
        navigate("/detect")
      }, 300)
    }
  }, [detectionResult, navigate, startPageTransition])

  const handleNavigation = (path) => {
    startPageTransition()
    setTimeout(() => {
      navigate(path)
    }, 300)
  }

  const getThreatLevel = () => {
    if (!detectionResult) return "Unknown"

    if (detectionResult.thief_detected && detectionResult.harmful_objects.length > 0) {
      return "High"
    } else if (detectionResult.thief_detected) {
      return "Medium"
    } else {
      return "Low"
    }
  }

  const getThreatColor = () => {
    const level = getThreatLevel()
    if (level === "High") return "#ff3b30"
    if (level === "Medium") return "#ff9500"
    return "#34c759"
  }

  // If no result, show loading
  if (!detectionResult) {
    return (
      <div className="output-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading results...</p>
        </div>
      </div>
    )
  }

  return (<>
    <div className="output-container">
      <div className="results-card">
        <div className="results-header">
          <h2>Analysis Complete</h2>
          <div className="threat-indicator" style={{ backgroundColor: getThreatColor() }}>
            <Crosshair className="threat-icon" />
            <span>Threat Level: {getThreatLevel()}</span>
          </div>
        </div>

        <div className="results-content">
          <div className="results-data">
            {detectionResult.thief_detected ? (
              <div className="alert-box detected">
                <AlertTriangle className="alert-icon" />
                <h3>Intruder Detected!</h3>
              </div>
            ) : (
              <div className="alert-box safe">
                <h3>No Intruder Detected</h3>
                <p>The analyzed image appears to be clear of suspicious activity.</p>
              </div>
            )}

            {detectionResult.thief_detected && (
              <div className="profile-section">
                <h3>Intruder Profile</h3>

                <div className="profile-grid">
                  <div className="profile-item">
                    <User className="profile-icon" />
                    <div>
                      <h4>Age</h4>
                      <p>{detectionResult.age} years</p>
                    </div>
                  </div>

                  <div className="profile-item">
                    <div className="gender-icon">{detectionResult.gender === "Male" ? "♂️" : "♀️"}</div>
                    <div>
                      <h4>Gender</h4>
                      <p>{detectionResult.gender}</p>
                    </div>
                  </div>

                  <div className="profile-item">
                    <Ruler className="profile-icon" />
                    <div>
                      <h4>Height</h4>
                      <p>{detectionResult.estimated_height_cm} cm</p>
                    </div>
                  </div>

                  <div className="profile-item">
                    <Scale className="profile-icon" />
                    <div>
                      <h4>Weight</h4>
                      <p>{detectionResult.estimated_weight_kg} kg</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="objects-section">
              {detectionResult.harmful_objects.length > 0 && (
                <div className="object-list dangerous">
                  <h3>⚠️ Dangerous Objects Detected</h3>
                  <ul>
                    {detectionResult.harmful_objects.map((item, index) => (
                      <li key={`harmful-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {detectionResult.detected_objects.length > 0 && (
                <div className="object-list normal">
                  <h3>Other Objects Detected</h3>
                  <ul>
                    {detectionResult.detected_objects.map((item, index) => (
                      <li key={`normal-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="action-section">
              <h3>Recommended Actions</h3>
              <ul>
                {detectionResult.thief_detected ? (
                  <>
                    <li>Contact security personnel immediately</li>
                    <li>Lock down affected areas</li>
                    <li>Save this report for authorities</li>
                    {detectionResult.harmful_objects.length > 0 && (
                      <li className="urgent">Exercise extreme caution - dangerous objects detected</li>
                    )}
                  </>
                ) : (
                  <>
                    <li>Continue normal monitoring</li>
                    <li>Schedule regular security scans</li>
                    <li>Save this report for records</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="">
            <h3>Processed Image</h3>
            <div className="image-container">
              <img src={`${apiUrl}/get_image`} alt="Processed result" />
            </div>
            <p className="image-caption">Image with detection markers</p>
          </div>
        </div>

  
         <div className="actions">
            <button onClick={() => navigate("/detect")} className="back-button">
              <ArrowLeft className="back-icon" />
              Analyze Another Image
            </button>

            {detectionResult && (
              <PDFDownloadLink document={<ThiefReport detectionResult={detectionResult} />} fileName="thief_report.pdf">
                {({ loading }) => (
                  <button className="save-button">{loading ? "Generating PDF..." : "Download Report"}</button>
                )}
              </PDFDownloadLink>
            )}
          </div>
      </div>
      
    </div>
    <Footer/>
    </> );
}

export default ThiefOutput

