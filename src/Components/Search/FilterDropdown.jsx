import React from 'react';
import styled from 'styled-components';

const FilterInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding:10px;
`;
const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px; 
`;

const FilterDropdown = ({ columns }) => {
  const rows = [];
  for (let i = 0; i < columns.length; i += 5) {
    rows.push(columns.slice(i, i + 5));
  }
  return (
    <FilterInputContainer>
      {rows.map((row, rowIndex) => (
        <FilterRow key={rowIndex}>
          {row.map((column) => (
            <div key={column.accessor}>
              <label htmlFor={`${column.accessor}-input`}>{column.Header}:</label>
              <input
                type="text"
                id={`${column.accessor}-input`}
                placeholder={`Enter ${column.Header.toLowerCase()}`}
              />
            </div>
          ))}
        </FilterRow>
      ))}
    </FilterInputContainer>
  );
};

export default FilterDropdown;