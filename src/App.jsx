import './App.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar.jsx"
import Footer from "../src/components/Footer/Footer.jsx"
import WareThreats from './pages/WareThreat/WareThreat';
import WebThreats from './pages/WebThreat/WebThreat';
import CyberNews from './pages/CyberNews/CyberNews';
import Home from './pages/Home/Home';



function App() {
  return (
<Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warethreats" element={<WareThreats />} />
          <Route path="/webthreats" element={<WebThreats />} />
          <Route path="/cybernews" element={<CyberNews />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;