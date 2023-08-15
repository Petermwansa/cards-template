import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      {/* <Card /> */}
    </div>
  );
}

export default App;
