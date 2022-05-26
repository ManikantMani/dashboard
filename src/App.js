import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Section1 from './sections/section1/Section1';
import Footer from './components/RightFooter/Footer';
import Section8 from './sections/section8/Section8';

const App = () => {
  return (
    <>
    <div className="App_top">
      Lorem Ipsum is simply dummy text of the printing
    </div>
      <div className="App">
        <div className="navbar_components">
          <Navbar />
        </div>
        <div className="section_components">
          <Routes>
            <Route path="/" element={<Section8 />} />
            <Route path="/section8" element={<Section8 />} />
            <Route path="/dashboard" element={<Section8 />} />
          </Routes>
        </div>
        <div className="footer_components">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
