

// import Layout from './Layout/Layout'; 
// import LoginPage from './Pages/Login/Loginpage';
// import Client from './Pages/Client/SearchClient'; 
// import Form from './Pages/Client/Add'; 
// import Update from './Pages/Client/edit';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AddUser from './Pages/User/Add';
// import EditUser from './Pages/User/Edit';
// import SearchUser from './Pages/User/Search';
// import DataGenerationForm from './Pages/Generate/Add';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
          
//           <Route path="/login" element={<LoginPage />} /> 
          
         
//           <Route element={<Layout/>}>
//             <Route path="/"/> 
//             <Route path="data-generation" element={<DataGenerationForm/>} />
//             <Route path="client" element={<Client />} />
//             <Route path="/client/update" element={<Update />} />
//             <Route path="/client/form" element={<Form />} />
//             <Route path="adduser" element={<AddUser />} />
//             <Route path="edituser" element={<EditUser />} />
//             <Route path="searchuser" element={<SearchUser />} />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// app.js

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

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} /> 
          <Route element={<Layout/>}>
            <Route path="/" element={<Client />} /> {/* Default or home route */}
            <Route path="/data-generation" element={<DataGenerationForm />} />
            <Route path="/client" element={<Client />} />
            <Route path="/client/form" element={<Form />} />
            <Route path="/client/update" element={<Update />} />
            <Route path="/searchuser" element={<SearchUser />} />
            <Route path="/searchuser/adduser" element={<AddUser />} /> {/* Nested route for Add User */}
            <Route path="/searchuser/edituser" element={<EditUser />} /> {/* Nested route for Edit User */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
