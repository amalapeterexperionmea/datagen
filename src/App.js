import Data_generation from './Pages/Generate/Data_generation'; 
import Layout from './Layout/Layout'; 
import LoginPage from './Pages/Login/Loginpage'; 
import User from './Pages/User/User'; 
import Client from './Pages/Client/client'; 
import UserTable from './Pages/User/UserTable'; 
import Form from './Pages/Client/clientreg'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from './Pages/Client/updateclient';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/layout" element={<Layout />} />
          <Route path="/data-generation" element={<Data_generation />} />
          <Route path="/user" element={<User />} />
          <Route path="/client" element={<Client />} />
          <Route path="/userlist" element={<UserTable />} />
          <Route path="/update" element={<Layout><Update /></Layout>} />
          <Route path="/form" element={<Layout><Form /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
