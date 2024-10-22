
import Data_generation from './Components/Data_generation/Data_generation';
import Layout from './Components/Layout/Layout';
import LoginPage from './Components/Login/Loginpage';
import User from './Components/User/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/layout" element={<Layout />} />
          <Route path="" element={<LoginPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/data-generation" element={<Data_generation/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
