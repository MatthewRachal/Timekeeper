import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScreenA from './Components/ScreenA/ScreenA';
import ScreenB from './Components/ScreenB/ScreenB';
import ScreenC from './Components/ScreenC/ScreenC';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/screen-a" element={<ScreenA />} />
          <Route path="/screen-b" element={<ScreenB />} />
          <Route path="/screen-c" element={<ScreenC />} />
          <Route path="/" element={<ScreenA />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
