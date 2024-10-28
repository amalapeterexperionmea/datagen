import React from 'react'; 
import { useTable, useSortBy, usePagination } from 'react-table';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  height: 97vh;
`;
const AddButton = styled.button`
  position: fixed; 
  top: 90px; 
  right: 40px; 
  background-color: #2a6f97; 
  color: white; 
  width: 100px;
  height: 40px;
  border: none; 
  border-radius: 4px; 
  padding: 10px 20px; 
  cursor: pointer;  
`;
const BackButton = styled.button`
  position: fixed; 
  top: 90px; 
  right: 40px; 
  background-color: #2a6f97; 
  color: white; 
  width: 100px;
  height: 40px;
  border: none; 
  border-radius: 4px; 
  padding: 10px 20px; 
  cursor: pointer; 
`;
const TableWrapper = styled.div`
  width: 1300px;
  margin: 20px;
  text-align: center;
  padding: 20px;
  
`;

const Table = styled.table`
  width: 1205px;
  margin-top:-150px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
`;

const Th = styled.th`
  cursor: pointer;
  padding: 10px;
  background: #e0e0e0;
   width: 150px;
  color: #333;
  border: 1px solid #ddd;
  
  ${({ isSorted }) => isSorted && `
    background-color: #f0f0f0;
    font-weight: bold;
  `}
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
  width: 100px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const NoDataMessage = styled.div`
  color: Black;
  font-size: 22px;
  margin-top: 20px;
`;
const PaginationButton = styled.button`
  height:25px;
  width:80px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top:2px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const DataTable = ({ columns, data, onAdd, basePath , isSearchActive,onBack   }) => {
  const navigate = useNavigate();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
      disableSortRemove: true,
    },
    useSortBy,
    usePagination
  );

  return (
    <PageWrapper>
      <TableWrapper>
      {!isSearchActive && <AddButton onClick={onAdd} >Add</AddButton>}
      {isSearchActive && <BackButton onClick={onBack} >Back</BackButton>}
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                    
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
          {page.length > 0 ? (
            page.map(row => {
              prepareRow(row);
              return (
                <tr
                    {...row.getRowProps()}
                    onClick={() => navigate(`${basePath}`)}
                  >
                    {row.cells.map(cell => (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <Td colSpan={columns.length}>
                  <NoDataMessage>No Data </NoDataMessage> 
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
        <PaginationWrapper>
          <PaginationButton onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </PaginationButton>
          <PaginationButton onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </PaginationButton>
        </PaginationWrapper>
      </TableWrapper>
    </PageWrapper>
  );
};

export default DataTable;
