import React, { useState } from 'react'

export const RegistroVehiculo = ({ handleCreateVehiculo }) => {
    const [vehiculo, setVehiculo] = useState({
        id: null,
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        tipo: '',
        placa: '',
        marca: '',
        modelo: '',
        entidad: "México",
        anio: null,
        cilindraje: null,
        serie: '',
        motor: '',
        tarjeta: '',
        seguro: null,
        tenencia: null,
        verificacion: '',
        mantenimiento: '',
        observaciones: '',
    });


    return (
        <>
            <div className="modal fade" id="registroVehiculoModal" tabIndex="-1" aria-labelledby="registroVehiculoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title text-dark" id="registroVehiculoModalLabel">Registrar Vehiculo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='row g-3 needs-validation' novalidate>
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label htmlFor="tipo" className="form-label">Tipo de Vehiculo:</label>
                                        <select onChange={(e) => { setVehiculo({ ...vehiculo, tipo: e.target.value }) }} value={vehiculo.tipo} className="form-control" id="tipo" required>
                                            <option value="Automovil">Automovil</option>
                                            <option value="Motocicleta">Motocicleta</option>
                                        </select>
                                    </div>
                                    <div className='col-md-3'>
                                        <labe htmlFor="placa" className="form-label">Placa:</labe >
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, placa: e.target.value }) }} value={vehiculo.placa} type="text" className="form-control mt-2" id="placa" aria-describedby="placa" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="marca" className="form-label">Marca:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, marca: e.target.value }) }} value={vehiculo.marca} type='text' className="form-control" id="marca" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor='modelo' className='form-label'>Modelo:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, modelo: e.target.value }) }} value={vehiculo.modelo} type='text' className="form-control" id="modelo" required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={(e) => { handleCreateVehiculo(vehiculo) }}>Registrar</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
