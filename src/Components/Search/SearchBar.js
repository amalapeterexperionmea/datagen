import React,{ useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { TbFilterDown } from "react-icons/tb";
import FilterDropdown from './FilterDropdown';

const { Search } = Input;

const Stylebar = styled(Search)`
  position: fixed;
  top: 110px;
  left: 1156px; 
  width: 200px;
`;

const IconContainer = styled.div`
  position:fixed;
  left:1370px;
  top:110px;
  background-color: #2a6f97; 
  color: white; 
  width: 32px;
  height: 32px;
  border: none; 
  border-radius: 4px; 
  padding: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  cursor: pointer; 
`;
const DropdownContainer = styled.div`
  border: 1.5px solid #2a6f97; 
  border-radius: 4px; 
  display:flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  width: 93%; 
  height:135px;
  margin-left:42px;
  margin-top:90px;
`;

const SearchBar = ({ onSearch,onToggleFilter }) => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilterDropdown = () => {
    setFilterVisible(prev => !prev); 
    onToggleFilter(!isFilterVisible); 
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Stylebar
        placeholder="Search..."
        onSearch={onSearch}  
        enterButton
      />
      <IconContainer onClick={toggleFilterDropdown} >
        <TbFilterDown title="Filter" />
      </IconContainer>
      {isFilterVisible && ( 
        <DropdownContainer>
          <FilterDropdown />
        </DropdownContainer>
      )}
    </div>
  );
};
export default SearchBar;
