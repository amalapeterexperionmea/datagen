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

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  width: 97%;
  height: 50px;
  margin-bottom: 20px; 
  margin-top: -105px;
`;

const Button = styled.button`
  background-color: #2a6f97;
  width: 100px;
  margin-right: -35px;
  margin-top: -10px;
  color: white; 
  &:hover {
    background-color: #303f9f; 
  }
`;

const TableWrapper = styled.div`
  width: 1300px;
  margin: 20px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
`;

const Th = styled.th`
  cursor: pointer;
  padding: 10px;
  background: #e0e0e0;
  color: #333;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
`;
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
const DataTable = ({ columns, data, onAdd, basePath }) => {
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
    },
    useSortBy,
    usePagination
  );

  return (
    <PageWrapper>
      <TableWrapper>
        <Header>
          <Button onClick={onAdd}>Add</Button>
        </Header>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
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
            })}
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
