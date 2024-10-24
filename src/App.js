
import Data_generation from './Pages/Generate/Data_generation'; 
import Layout from './Layout/Layout'; 
import LoginPage from './Pages/Login/Loginpage';
import Client from './Pages/Client/client'; 
import Form from './Pages/Client/clientreg'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from './Pages/Client/updateclient';
import AddUser from './Pages/User/Add';
import EditUser from './Pages/User/Edit';
import SearchUser from './Pages/User/Search';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for LoginPage without Layout */}
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/layout" element={<Layout />} />
          {/* Wrap all other routes with Layout */}
          <Route element={<Layout />}>
            <Route path="data-generation" element={<Data_generation />} />
            <Route path="client" element={<Client />} />
            <Route path="update" element={<Update />} />
            <Route path="form" element={<Form />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="edituser" element={<EditUser />} />
            <Route path="searchuser" element={<SearchUser />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
