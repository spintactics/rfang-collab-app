import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateDocument from './pages/CreateDocument';

const App = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout/', {}, { withCredentials: true });
      navigate('/login'); // Redirect to login after logout
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div>
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/">Login</Link>
        <Link to="/create">Create Document</Link>
        <button onClick={handleLogout}>Logout</button> {/* Logout button */}
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<CreateDocument />} />
      </Routes>
    </div>
  );
};

export default App;
