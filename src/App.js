
import React, { useState, useEffect } from "react";
import Layout from './Layout/Layout'; 
import LoginPage from './Pages/Login/Loginpage';
import Search from './Pages/Client/Search'; 
import Form from './Pages/Client/Add'; 
import Update from './Pages/Client/edit';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddUser from './Pages/User/Add';
import EditUser from './Pages/User/Edit';
import SearchUser from './Pages/User/Search';
import DataGenerationForm from './Pages/Generate/Add';
import GeneratedGrid from './Pages/Generate/Search';
import SearchConnect from "./Pages/Connection/Search";

function App() {


  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("isAuthenticated") === "true"; 
  });
  useEffect(() => {
    sessionStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);
  

  

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        
       
        <Route
          path="/"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route path="/generated-grid/data-generation" element={<DataGenerationForm />} />
          <Route path="/generated-grid" element={<GeneratedGrid />} />
          <Route path="/client" element={<Search />} />
          <Route path="/client/form" element={<Form />} />
          <Route path="/client/update" element={<Update />} />
          <Route path="/searchuser" element={<SearchUser />} />
          <Route path="/searchuser/adduser" element={<AddUser />} /> 
          <Route path="/searchuser/edituser" element={<EditUser />} /> 
          <Route path="/connect" element={<SearchConnect />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
