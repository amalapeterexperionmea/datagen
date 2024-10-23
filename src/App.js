import Data_generation from './Components/Data_generation/Data_generation';
import Layout from './Components/Layout/Layout';
import LoginPage from './Components/Login/Loginpage';
import User from './Components/User/User';
import Client from './Components/Client/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserTable from './Components/User/UserTable';
import Form from './Components/Client/clientreg';


function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="" element={<LoginPage />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/data-generation"  element ={<Data_generation/>}/>
          <Route path="/user" element={<User />} />
          <Route path="/client" element={<Client/>}/>
          <Route path="/userlist" element={<UserTable />} />
          <Route path="/form" element={<Layout> <Form /></Layout>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

