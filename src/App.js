import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';  // Ensure this import is correct
import About from './pages/About/About';  // Ensure this import is correct
import Enroll from './pages/Enroll/Enroll';  // Ensure this import is correct
import Tutor from './pages/Tutor/Tutor';  // Ensure this import is correct
import Contact from './pages/Contact/Contact';  // Ensure this import is correct

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Add About route */}
            <Route path="/enroll" element={<Enroll />} /> {/* Add About route */}
            <Route path="/tutor" element={<Tutor />} /> {/* Add About route */}
            <Route path="/contact" element={<Contact />} /> {/* Add About route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
