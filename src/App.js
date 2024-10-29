

import Layout from './Layout/Layout'; 
import LoginPage from './Pages/Login/Loginpage';
import Client from './Pages/Client/SearchClient'; 
import Form from './Pages/Client/Add'; 
import Update from './Pages/Client/edit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Pages/User/Add';
import EditUser from './Pages/User/Edit';
import SearchUser from './Pages/User/Search';
import DataGenerationForm from './Pages/Generate/Add';
import GeneratedGrid from './Pages/Generate/Search';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} /> 
          <Route element={<Layout/>}>
            <Route path="/"/> 
            <Route path="/generated-grid/data-generation" element={<DataGenerationForm />} />
            <Route path="/generated-grid" element={<GeneratedGrid />} />
            <Route path="/client" element={<Client />} />
            <Route path="/client/form" element={<Form />} />
            <Route path="/client/update" element={<Update />} />
            <Route path="/searchuser" element={<SearchUser />} />
            <Route path="/searchuser/adduser" element={<AddUser />} /> 
            <Route path="/searchuser/edituser" element={<EditUser />} /> 
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
