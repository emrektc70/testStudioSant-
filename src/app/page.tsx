import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';

export default function App() {
  const navigate = useNavigate();
  navigate('/');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
