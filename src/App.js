import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Newsletter from './pages/Newletter';
import './App.css';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;