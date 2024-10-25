



// import React from 'react';
// import styled from 'styled-components';
// import { useLocation } from 'react-router-dom'; 
// import Header from './Header/Header';
// import Sidebar from './Sidebar/Sidebar';
// import { Breadcrumb } from './Breadcrumb/Breadcrumb'; 
// import { Outlet } from 'react-router-dom'; 

// // Wrapper for the entire layout: sidebar, header, content
// const LayoutWrapper = styled.div`
//   display: flex;
// `;

// // The area for the main content (next to the sidebar)
// const MainContent = styled.div`
//   margin-left: 200px;
//   padding: 30px;
//   width: calc(100% - 250px); /* Adjust based on sidebar width */
//   height: 100vh; /* Ensure it takes the full viewport height */
//   display: flex; /* Use flexbox */
//   justify-content: center; /* Horizontally center the content */
//   align-items: center; /* Vertically center the content */
//   box-sizing: border-box; /* Ensure padding is included in width/height */
// `;

// // The wrapper for the content to control its max width and text alignment
// const ContentWrapper = styled.div`
//   width: 100%;
//   max-width: 1200px; /* Set a max width for the content */
//   text-align: center; /* Center text inside the content */
// `;

// const Layout = () => {
//   const location = useLocation(); // Get the current location
//   const currentPath = location.pathname; // Use pathname from useLocation

//   return (
//     <LayoutWrapper>
//       <Sidebar />
//       <div style={{ width: '100%' }}> {/* Header now takes the full width */}
//         <Header />
//         <Breadcrumb currentPath={currentPath} /> 
//         <MainContent>
//           <ContentWrapper>
//             <Outlet /> {/* Render child routes here */}
//           </ContentWrapper>
//         </MainContent>
//       </div>
//     </LayoutWrapper>
//   );
// };

// export default Layout;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useLocation } from 'react-router-dom'; 
// import Header from './Header/Header';
// import Sidebar from './Sidebar/Sidebar';
// import { Breadcrumb } from './Breadcrumb/Breadcrumb'; 
// import { Outlet } from 'react-router-dom'; 

// // Wrapper for the entire layout: sidebar, header, content
// const LayoutWrapper = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
// `;

// // Sidebar styling with hide/show behavior
// const SidebarWrapper = styled.div`
//   width: 250px;
//   flex-shrink: 0;
//   transition: transform 0.3s ease;
//   background-color: #333;
//   color: white;
//   position: fixed;
//   height: 100vh;
//   z-index: 1000;
//   transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
//   @media (min-width: 768px) {
//     transform: translateX(0); /* Sidebar visible on larger screens */
//     position: relative;
//   }
// `;

// // Toggle button to show/hide the sidebar
// const SidebarToggle = styled.button`
//   position: fixed;
//   top: 15px;
//   left: ${(props) => (props.isOpen ? '250px' : '15px')};
//   z-index: 1100;
//   background-color: #333;
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   transition: left 0.3s ease;
//   @media (min-width: 768px) {
//     display: none; /* Hide the toggle button on larger screens */
//   }
// `;

// // Main content area with dynamic margin-left
// const MainContent = styled.div`
//   flex-grow: 1;
//   padding: 0px;
//   margin-left: ${(props) => (props.isOpen ? '0px' : '0')};
//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
//   overflow: auto;
  
//   transition: margin-left 0.3s ease;
//   width: 100%;
// `;

// // Wrapper for the content to control its max width and text alignment
// const ContentWrapper = styled.div`
//   width: 100%;

//   text-align: center;
//   margin: 0 auto;
//   @media (max-width: 768px) {
//     padding: 0 20px; /* Add padding for smaller screens */
//   }
// `;

// // Header wrapper
// const HeaderWrapper = styled.div`
//   position: sticky;
//   top: 0;
//   width: 100%;
//   z-index: 100;
//   background-color: white;
// `;

// // Breadcrumb wrapper to ensure no overlap with content
// const BreadcrumbWrapper = styled.div`
//   width: 100%;
//   padding: 10px 0;
//   background-color: #f9f9f9;
//   border-bottom: 1px solid #ddd;
// `;

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
//   const location = useLocation(); // Get the current location
//   const currentPath = location.pathname; // Use pathname from useLocation

//   return (
//     <LayoutWrapper>
//       {/* Sidebar */}
//       <SidebarWrapper isOpen={isSidebarOpen}>
//         <Sidebar />
//       </SidebarWrapper>

//       {/* Sidebar Toggle Button */}
//       <SidebarToggle
//         isOpen={isSidebarOpen}
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
//       </SidebarToggle>

//       {/* Main Content */}
//       <MainContent isOpen={isSidebarOpen}>
//         <HeaderWrapper>
//           <Header />
//         </HeaderWrapper>
//         <BreadcrumbWrapper>
//           <Breadcrumb currentPath={currentPath} /> 
//         </BreadcrumbWrapper>
//         <ContentWrapper>
//           <Outlet /> {/* Render child routes here */}
//         </ContentWrapper>
//       </MainContent>
//     </LayoutWrapper>
//   );
// };

// export default Layout;


import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'; 
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { Breadcrumb } from './Breadcrumb/Breadcrumb'; 
import { Outlet } from 'react-router-dom'; 

// Wrapper for the entire layout: sidebar, header, content
const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Prevents scroll bars on entire layout */
`;

// Sidebar styling with hide/show behavior
const SidebarWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  background-color: #333;
  color: white;
  position: fixed;
  height: 100vh;
  z-index: 1000;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  overflow: hidden; /* Prevents sidebar from causing scroll */
  @media (min-width: 768px) {
    transform: translateX(0); /* Sidebar visible on larger screens */
    position: relative;
  }
`;

// Toggle button to show/hide the sidebar
const SidebarToggle = styled.button`
  position: fixed;
  top: 15px;
  left: ${(props) => (props.isOpen ? '250px' : '15px')};
  z-index: 1100;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: left 0.3s ease;
  @media (min-width: 768px) {
    display: none; /* Hide the toggle button on larger screens */
  }
`;

// Main content area with dynamic margin-left
const MainContent = styled.div`
  flex-grow: 1;
  padding: 0px;
  margin-left: ${(props) => (props.isOpen ? '0px' : '0')};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden; /* Prevents scroll on main content */
  width: 100%;
`;

// Wrapper for the content to control its max width and text alignment
const ContentWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  overflow: hidden; /* Prevents scroll on content */
  @media (max-width: 768px) {
    padding: 0 20px; /* Add padding for smaller screens */
  }
`;

// Header wrapper
const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
`;

// Breadcrumb wrapper to ensure no overlap with content
const BreadcrumbWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
`;

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // Use pathname from useLocation

  return (
    <LayoutWrapper>
      {/* Sidebar */}
      <SidebarWrapper isOpen={isSidebarOpen}>
        <Sidebar />
      </SidebarWrapper>

      {/* Sidebar Toggle Button */}
      <SidebarToggle
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </SidebarToggle>

      {/* Main Content */}
      <MainContent isOpen={isSidebarOpen}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BreadcrumbWrapper>
          <Breadcrumb currentPath={currentPath} /> 
        </BreadcrumbWrapper>
        <ContentWrapper>
          <Outlet /> {/* Render child routes here */}
        </ContentWrapper>
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
