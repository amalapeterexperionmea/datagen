import React from 'react'; 
import { useTable, useSortBy, usePagination } from 'react-table';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdAddCircleOutline,MdOutlineFileDownload} from 'react-icons/md';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  height: 97vh;
`;
const IconButton = styled.button`
  position: fixed; 
  top: 90px; 
  right:90px; 
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
const IconDownload = styled.button`
  position: fixed; 
  top: 90px; 
  right:45px; 
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
const BackButton = styled.button`
 position: fixed; 
  top: 90px; 
  right: 40px; 
  background-color: #2a6f97; 
  color: white; 
  width: 100px;
  height: 32px;
  border: none; 
  border-radius: 4px; 
  padding: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  cursor: pointer; 
`;
const TableWrapper = styled.div`
  position: fixed;
  width: 1300px;
  margin: 20px;
  left:250px;
  top:260px;
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
  padding: 15px;
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
  position: fixed;
  bottom: 30px;
  right:-76px;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const PaginationButton = styled.button`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height:25px;
  width:30px;
  background-color: #2A6F97;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top:1px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const NoDataMessage = styled.div`
  color: Black;
  font-size: 22px;
  margin-top: 20px;
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
    gotoPage,
    state: { pageIndex },
    pageOptions,

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
      {!isSearchActive ? (
          <>
            <IconButton onClick={onAdd}>
              <MdAddCircleOutline />
            </IconButton>
            <IconDownload>
              <MdOutlineFileDownload />
            </IconDownload>
          </>
        ) : (
          <BackButton onClick={onBack}>Back</BackButton>
        )}
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
                    onClick={() => navigate(`${basePath}`, { state: { rowData: row.original } })}
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
          <PaginationButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <BiFirstPage />
          </PaginationButton>
          <PaginationButton onClick={previousPage} disabled={!canPreviousPage}>
            <MdKeyboardArrowLeft />
          </PaginationButton>
          <span>
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
          <PaginationButton onClick={nextPage} disabled={!canNextPage}>
            <MdKeyboardArrowRight />
          </PaginationButton>
          <PaginationButton onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
            <BiLastPage />
          </PaginationButton>
        </PaginationWrapper>
      </TableWrapper>
    </PageWrapper>
  );
};

export default DataTable;
