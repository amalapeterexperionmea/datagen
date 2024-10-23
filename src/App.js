// import Data_generation from './Components/Data_generation/Data_generation';
// import Layout from './Components/Layout/Layout';
// import LoginPage from './Components/Login/Loginpage';
// import User from './Components/User/User';
// import Client from './Components/Client/client'; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserTable from './Components/User/UserTable';
// import Form from './Components/Client/clientreg';


// function App() {
//   return (
//     <Router>
//       <div >
//         <Routes>
//           <Route path="" element={<LoginPage />} />
//           <Route path="/layout" element={<Layout />} />
//           <Route path="/data-generation"  element ={<Data_generation/>}/>
//           <Route path="/user" element={<User />} />
//           <Route path="/client" element={<Client/>}/>
//           <Route path="/userlist" element={<UserTable />} />
//           <Route path="/form" element={<Layout><Form /></Layout>} />
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import Data_generation from './Pages/Generate/Data_generation'; // Corrected path
import Layout from './Layout/Layout'; // Corrected path
import LoginPage from './Pages/Login/Loginpage'; // Corrected path
import User from './Pages/User/User'; // Corrected path
import Client from './Pages/Client/client'; // Corrected path
import UserTable from './Pages/User/UserTable'; // Corrected path
import Form from './Pages/Client/clientreg'; // Corrected path
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* Updated default path */}
          <Route path="/layout" element={<Layout />} />
          <Route path="/data-generation" element={<Data_generation />} />
          <Route path="/user" element={<User />} />
          <Route path="/client" element={<Client />} />
          <Route path="/userlist" element={<UserTable />} />
          <Route path="/form" element={<Layout><Form /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
