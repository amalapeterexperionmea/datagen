// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import '@fortawesome/fontawesome-free/css/all.min.css';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );


// // reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import reportWebVitals from './reportWebVitals';
// import { BreadcrumbProvider } from './Components/Layout/Breadcrumb'; // Adjust this import path

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BreadcrumbProvider>  {/* Wrap App with BreadcrumbProvider */}
//       <App />
//     </BreadcrumbProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

// datagen/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Remove BreadcrumbProvider wrapping if not needed */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
