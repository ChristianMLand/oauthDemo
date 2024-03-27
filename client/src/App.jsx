import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  )
}

export default App
