// import React ,{ useState } from 'react';
import React  from 'react';
import { useTable, useSortBy } from 'react-table';
import { columns, data} from './dataSource.js';

function ListTabla() {


  // const [lines, setLines] = useState([data]);

  // const updateMyData = (rowIndex, columnID, value) => {
  //   setLines(old =>
  //     old.map((row, index) => {
  //       console.log(row, index)
  //       if (index === rowIndex) {
  //         return {
  //           ...old[rowIndex],
  //           [columnID]: value
  //         };
  //       }
  //       // console.log(`fila ${row}, indice ${index}`)
  //       // console.log(lines)
  //       return row;
  //     })
  //   );
  // };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        
        prepareRow,
    } = useTable({
        columns,
        data,
        // updateMyData
    },
        useSortBy
    );

    return (
        <table border='1' {...getTableProps()}>
            <thead bgcolor= '#aaeeaa' >
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
                                </th>

                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200" 
            {...getTableBodyProps()}>
  {rows.map((row, i) => {
    prepareRow(row)
    // {dni}=row.values
    // console.log(row.values.dni)
    return (
      <tr   {...row.getRowProps()}>
        {row.cells.map((cell,index) => {
          if(index===0)console.log(index)
          return (
            <td
              className="px-6 py-2 whitespace-no-wrap text-sm leading-2 font-medium text-gray-900"
              {
                ...cell.getCellProps()
              
              }
            >
              {cell.render("Cell")}
            </td>
          )
        })}
      </tr>
    )
  })}
</tbody>
        </table>
    );
}

export default ListTabla;