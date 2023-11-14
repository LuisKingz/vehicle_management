import React from 'react'
import DataTable from 'react-data-table-component';
import { configColumns } from '../helpers/TableConfig';
import { dataTemp } from '../data';

const columns = configColumns;
export const Table = () => {
    const data = dataTemp;
    return (
        <>
            <div style={{ width: '80%', margin: 'auto' }}>
                <DataTable
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
