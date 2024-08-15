import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'; // Adjust path as needed
import Web from './pages/Web';

import Marketing from './pages/Marketing';
import Credits from './pages/Credits';
import Home from './pages/Home';

function App() {
    return (
      
        <Router>
            <Nav /> 
            <Routes>
                <Route path="/web" element={<Web />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/" element={<Home />} />
            </Routes>     
        </Router>
        
    );
}

export default App;
