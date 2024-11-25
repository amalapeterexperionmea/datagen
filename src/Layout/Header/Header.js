import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const StyledHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  padding: 0 1rem; 
  background: linear-gradient(135deg, #5FA8D3 0%, #2A6F97 50%, #1B4965 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 900;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 20rem; 
  overflow: hidden; 
  white-space: nowrap; 
`;

const Username = styled.span`
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  text-overflow: ellipsis; 
`;

const UserIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: white;
`;

const Header = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username') || 'Guest';

    
    const formatText = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setUsername(formatText(storedUsername));
  }, []);

  return (
    <StyledHeaderContainer>
      <UserContainer>
        <UserIcon icon={faUser} />
        <Username>{username}</Username>
      </UserContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
