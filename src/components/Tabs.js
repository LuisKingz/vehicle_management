import React from 'react'
import { VehiclesTable } from './tables/VehiclesTable'
import { UserTable } from './tables/UserTable'

export const Tabs = () => {
    return (
        <>
            <div className='table-container mt-5'>
                <ul className="nav nav-tabs" id='myTab'>
                    <li className="nav-item">
                        <a className="nav-link active" id="user-tab" data-bs-toggle="tab" href="#user" role="tab" aria-controls="user" aria-selected="true">Usuarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="vehicles-tab" data-bs-toggle="tab" href="#vehicles" role="tab" aria-controls="vehicles" aria-selected="false">Vehiculos</a>
                    </li>
                </ul>
                <div className="tab-content mt-2">
                    <div className="tab-pane fade show active" id="user" role="tabpanel" aria-labelledby="user-tab">
                        <UserTable />
                    </div>
                    <div className="tab-pane fade" id="vehicles" role="tabpanel" aria-labelledby="vehicles-tab">
                        <VehiclesTable />
                    </div>
                </div>
            </div>
        </>
    )
}
