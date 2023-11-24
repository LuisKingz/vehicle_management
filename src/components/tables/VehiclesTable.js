import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { dataTemp } from '../../helpers/data';
import { configColumns, paginationComponentOptions } from '../../helpers/TableConfig';
import { RegistroUsuario } from '../modals/RegistroUsuario';
import { RegistroVehiculo } from '../modals/RegistroVehiculo';



const columns = configColumns;

const paginationOptions = paginationComponentOptions;
export const VehiclesTable = () => {

    useEffect(() => {

        const buttons = {
            name: 'ACCIONES',
            cell: (row) => [
                <button data-id={row.placa} onClick={() => handleEdit(row.id)} className="btn btn-warning btn-acciones">E</button>,
                <button data-id={row.placa} onClick={() => handleDelete(row.id)} className="btn btn-danger btn-acciones">E</button>,
                <button data-id={row.placa} onClick={() => handleView(row.id)} className="btn btn-info btn-acciones">D</button>
            ],
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        };
        columns.push(buttons);
    }, [])


    const [data, setData] = useState(dataTemp)
    const handleCreateUser = (values) => {

        console.log(values)
        setData([...data, values])
    }

    const handleCreateVehiculo = (values) => {
        console.log(values);
        setData([...data, values])
    }
    const handleFilter = (filter) => {
        const temp = dataTemp.filter((item) => {
            return item.placa.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        })

        if (temp.length === 0) {
            setData([])
            return
        }
        setData(temp)
    }
    const handleDelete = (id) => {
        const temp = data.filter((item) => {
            console.log(item.id, id)
            return item.id !== id
        })
        setData(temp)
    }

    const handleEdit = (id) => {
        console.log('====================================');
        console.log(id);
        console.log('====================================');
    }

    const handleView = (id) => {
        console.log('====================================');
        console.log(id);
        console.log('====================================');
    }
    return (
        <>
            <div className='table-container mt-5'>
                <div className='d-flex justify-content-end'>
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
