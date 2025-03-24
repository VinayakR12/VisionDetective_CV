
import { createContext, useState, useContext } from "react"

const DetectionContext = createContext()


export const useDetection = () => {
  const context = useContext(DetectionContext)
  if (!context) {
    throw new Error("useDetection must be used")
  }
  return context
}


export const DetectionProvider = ({ children }) => {
  const [detectionResult, setDetectionResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(false)

  const startPageTransition = () => {
    setPageLoading(true)
    setTimeout(() => {
      setPageLoading(false)
    }, 800)
  }


  const value = {
    detectionResult,
    setDetectionResult,
    isLoading,
    setIsLoading,
    pageLoading,
    setPageLoading,
    startPageTransition,
  }

  return (
    <DetectionContext.Provider value={value}>
      {children}
      {pageLoading && (
        <div className="page-transition-loader">
          <div className="loader-content">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      )}
    </DetectionContext.Provider>
  )
}

