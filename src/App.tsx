import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import HaditsKultum from './pages/HaditsKultum';
import SetorNgaji from './pages/SetorNgaji';
import Rekap from './pages/Rekap';
import Progress from './pages/Progress';
import NotFound from './pages/NotFound';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/haditskultum" element={<HaditsKultum />} />
          <Route path="/setorngaji" element={<SetorNgaji />} />
          <Route path="/rekap" element={<Rekap />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App