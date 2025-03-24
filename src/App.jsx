import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DetectionProvider } from "./context/DetectionContext"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ThiefInput from "./components/ThiefInput"
import ThiefOutput from "./components/ThiefOutput"
import Navbar from "./components/Navbar"
import "./styles/global.css"

function App() {
  return (
    <DetectionProvider>
      <Router>
        {/* <div className="app-container"> */}
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/detect" element={<ThiefInput />} />
            <Route path="/output" element={<ThiefOutput />} />
          </Routes>
        </div>
      </Router>
    </DetectionProvider>
  )
}

export default App

