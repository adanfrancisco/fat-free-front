import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'
import { columns, data}  from './dataSource2'

export const ReactTable = () => {
     


    return (
        <>
            <DataTable
            columns={columns}
            data={data}
            title='Mi Tabla'
            />
        </>
    )
}
