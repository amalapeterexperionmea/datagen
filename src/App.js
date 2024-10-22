import Layout from './Components/Layout/Layout';
import LoginPage from './Components/Login/Loginpage';
import User from './Components/User/User';
import Client from './Components/Client/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="" element={<LoginPage />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/user" element={<User />} />
          <Route path='/client' element={<Client/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
