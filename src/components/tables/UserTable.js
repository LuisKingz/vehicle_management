import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { User } from '../../helpers/Users';
import { configColumns, paginationComponentOptions } from '../../helpers/TableConfigUser';
import { RegistroUsuario } from '../modals/RegistroUsuario'
import edit from "../../img/edit.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faEye, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
const columns = configColumns;
const paginationOptions = paginationComponentOptions;
export const UserTable = () => {

    useEffect(() => {

        const buttons = {
            name: 'ACCIONES',
            cell: (row) => [
                <button style={{ marginRight: '5px' }} onClick={() => handleEdit(row.id)} className="btn btn-warning btn-acciones">
                    <FontAwesomeIcon icon={faEdit} />
                </button>,
                <button style={{ marginRight: '5px' }} onClick={() => handleDelete(row.id)} className="btn btn-danger btn-acciones">
                    <FontAwesomeIcon icon={faTrash} />
                </button>,
                <button style={{ marginRight: '45px'}} onClick={() => handleView(row.id)} className="btn btn-info btn-acciones">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                </button>
            ],
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        };
        columns.push(buttons);
    }, [])


    const [data, setData] = useState(User)

    const handleFilter = (filter) => {

        const temp = User.filter((item) => {
            return item.placa.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        })

        if (temp.length === 0) {
            setData([])
            return
        }
        setData(temp)
    }

    const handleCreateUser = (values) => {

        console.log(values)
        setData([...data, values])

    }

    const handleDelete = (id) => {
        const temp = data.filter((item) => item.id !== id);
        setData(temp);
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
                    <button className='btn btn-primary m-1' data-bs-toggle="modal" data-bs-target="#registroModal">Registrar Usuario</button>
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
            <RegistroUsuario handleCreateUser={handleCreateUser} data={data} />
        </>

    )
}
