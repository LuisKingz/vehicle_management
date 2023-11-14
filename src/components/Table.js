import React from 'react'
import DataTable from 'react-data-table-component';
import { configColumns } from '../helpers/TableConfig';
import { dataTemp } from '../helpers/data';

const columns = configColumns;
export const Table = () => {
    const data = dataTemp;
    return (
        <>
            <div className='table-container'>
                <DataTable
                    className='table'
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                    pointerOnHover
                    responsive
                    fixedHeader
                />
            </div>
        </>
    )
}
