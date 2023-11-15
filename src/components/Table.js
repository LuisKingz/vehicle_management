import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { configColumns, paginationComponentOptions } from '../helpers/TableConfig';
import { dataTemp } from '../helpers/data';
import { RegistroUsuario } from './modals/RegistroUsuario';
import { RegistroVehiculo } from './modals/RegistroVehiculo';


const columns = configColumns;
const paginationOptions = paginationComponentOptions;
export const Table = () => {

    const [data, setData] = useState(dataTemp)
    const handleCreateUser = (values) => {

        console.log(values)
        // setData([...data, values])
    }

    const handleCreateVehiculo = (values) => {
        console.log(values);
    }
    const handleFilter = (filter) => {
        const temp = dataTemp.filter((item) => {
            return item.placa.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        })

        if(temp.length === 0){
            setData([])
            return
        }
        setData(temp)
    }

    return (
        <>
            <div className='table-container mt-5'>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-primary m-1' data-bs-toggle="modal" data-bs-target="#registroModal">Registrar Usuario</button>
                    <button className='btn btn-primary m-1' data-bs-toggle="modal" data-bs-target="#registroVehiculoModal">Registrar Vehículo</button>
                    <input onChange={(e) => handleFilter(e.target.value)} className='form-control m-1' type="search" placeholder="filtrar por placa" aria-label="Search" style={{ width: '15rem', height: '2.5rem' }} />
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    paginationComponentOptions={paginationOptions}
                    highlightOnHover
                    pointerOnHover
                    responsive
                    fixedHeader
                />
            </div>
            <RegistroUsuario handleCreateUser={handleCreateUser} />
            <RegistroVehiculo handleCreateVehiculo={handleCreateVehiculo} />
        </>
    )
}
