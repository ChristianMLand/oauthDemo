import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard } from '~/views';
import { AuthContext } from './components/AuthContext';

function App() {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </AuthContext>
  );
}

export default App;
