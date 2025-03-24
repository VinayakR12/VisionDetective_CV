import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Upload, AlertTriangle, Camera } from "lucide-react"
import { useDetection } from "../context/DetectionContext"
import "../styles/ThiefInput.css"
import Footer from "./Footer"
import Notice from "../components/Notice"
const apiUrl = import.meta.env.VITE_API_URL;

const ThiefInput = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState("")
  const [preview, setPreview] = useState(null)
  const navigate = useNavigate()
  const { setDetectionResult, isLoading, setIsLoading, startPageTransition } = useDetection()

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
    setError("")

    // Create preview
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("⚠️ Please select an image!")
      return
    }

    setIsLoading(true)
    const formData = new FormData()
    formData.append("image", selectedFile)

    try {
      const response = await axios.post(`${apiUrl}/detect_thief`, formData)

      setDetectionResult(response.data)

      startPageTransition()
      setTimeout(() => {
        navigate("/output")
      }, 300)
    } catch (error) {
      setError(" Error detecting thief! Try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (<>
  <Notice/>
    <div className="input-container">
      <div className="card">
        <div className="upload-section">
          <div className="upload-box">
            <Camera className="camera-icon" />
            <h2>Upload Surveillance Image</h2>
            <p>Select a clear image from your security camera for analysis</p>

            <label className="file-input-label">
              <input type="file" onChange={handleFileChange} accept="image/*" className="file-input" />
              <span className="custom-file-button">
                <Upload className="upload-icon" />
                Choose Image
              </span>
            </label>

            {selectedFile && (
              <div className="file-info">
                <p>{selectedFile.name}</p>
                <p className="file-size">{(selectedFile.size / 1024).toFixed(2)} KB</p>
              </div>
            )}

            {preview && (
              <div className="image-preview">
                <img src={preview || "/placeholder.svg"} alt="Preview" />
              </div>
            )}

            <button onClick={handleUpload} className="detect-button" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="button-spinner"></div>
                  Processing...
                </>
              ) : (
                "Analyze & Detect"
              )}
            </button>
          </div>

          {error && (
            <div className="error-message">
              <AlertTriangle className="error-icon" />
              <p>{error}</p>
            </div>
          )}
        </div>

        <div className="info-section">
          <h3>How It Works</h3>
          <ol>
            <li>Upload a surveillance image</li>
            <li>Our AI analyzes the image for suspicious activity</li>
            <li>View detailed detection results</li>
            <li>Take appropriate security measures</li>
          </ol>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <div className="feature-text">
                <h4>Advanced Detection</h4>
                <p>Identifies potential intruders with high accuracy</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <h4>Fast Processing</h4>
                <p>Results in seconds for quick response</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <div className="feature-text">
                <h4>Threat Assessment</h4>
                <p>Detects harmful objects and security risks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
       <Footer/>
       </>
  )
}

export default ThiefInput

