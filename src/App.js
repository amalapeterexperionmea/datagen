
import Layout from './Components/Layout/Layout';
import LoginPage from './Components/Login/Loginpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/layout" element={<Layout />} />
          <Route path="" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
