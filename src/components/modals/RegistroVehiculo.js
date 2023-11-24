import React, { useState } from 'react'
import defaultImg from '../../img/default.jpg';

export const RegistroVehiculo = ({ handleCreateVehiculo , data}) => {
    const [imgSelected, setImgSelected] = useState(defaultImg);
    const [vehiculo, setVehiculo] = useState({

        id: Math.random().toString(36).substring(2),
        imgBase64: '',
        url: '',
        tipo: 'Automovil',
        placa: '',
        marca: '',
        modelo: '',
        entidad: "México",
        anio: null,
        cilindraje: null,
        serie: '',
        motor: '',
        tarjeta: '',
        seguro: 'si',
        tenencia: null,
        verificacion: '',
        mantenimiento: '',
        observaciones: '',
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            setImgSelected(URL.createObjectURL(file));
            reader.readAsDataURL(file);
            reader.onload = () => {
                setVehiculo({ ...vehiculo, imgBase64: reader.result, url: URL.createObjectURL(file) });
            };
        }
    }

    return (
        <>
            <div className="modal fade" id="registroVehiculoModal" tabIndex="-1" aria-labelledby="registroVehiculoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title text-dark" id="registroVehiculoModalLabel">Registrar Vehiculo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='row g-3 needs-validation' onSubmit={(e) => { e.stopPropagation(); e.preventDefault();  handleCreateVehiculo(vehiculo)} } novalidate>
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
                                        <label htmlFor="placa" className="form-label">Placa:</label >
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, placa: e.target.value }) }} value={vehiculo.placa} type="text" className="form-control" id="placa" aria-describedby="placa" required />
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
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label htmlFor="cilindraje" className="form-label">Cilindraje:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, cilindraje: e.target.value }) }} value={vehiculo.cilindraje} type='number' className="form-control" id="cilindraje" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="serie" className="form-label">No. Serie:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, serie: e.target.value }) }} value={vehiculo.serie} type='text' className="form-control" id="serie" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="entidad" className="form-label">Motor:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, motor: e.target.value }) }} value={vehiculo.motor} type='text' className="form-control" id="entidad" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="anio" className="form-label">Seguro:</label>
                                        {/* <input onChange={(e) => { setVehiculo({ ...vehiculo, seguro: e.target.value }) }} value={vehiculo.seguro} type='text' className="form-control" id="anio" required /> */}
                                        <select onChange={(e) => { setVehiculo({ ...vehiculo, seguro: e.target.value }) }} value={vehiculo.seguro} className="form-control" id="tipo" required>
                                            <option value="si">Si</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label htmlFor="cilindraje" className="form-label">Tarjeta:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, tarjeta: e.target.value }) }} value={vehiculo.tarjeta} type='text' className="form-control" id="cilindraje" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="serie" className="form-label">Tenencia:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, tenencia: e.target.value }) }} value={vehiculo.tenencia} type='text' className="form-control" id="serie" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="entidad" className="form-label">Verificación:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, verificacion: e.target.value }) }} value={vehiculo.verificacion} type='date' className="form-control" id="entidad" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="anio" className="form-label">Mantenimiento:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, mantenimiento: e.target.value }) }} value={vehiculo.mantenimiento} type='text' className="form-control" id="anio" required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label htmlFor="entidad" className="form-label">Entidad:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, entidad: e.target.value }) }} value={vehiculo.entidad} type='text' className="form-control" id="entidad" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="anio" className="form-label">Año:</label>
                                        <input onChange={(e) => { setVehiculo({ ...vehiculo, anio: e.target.value }) }} value={vehiculo.anio} type='text' className="form-control" id="anio" required />
                                    </div>
                                    <div className='col-md-3'>
                                        <label htmlFor="anio" className="form-label">Foto:</label>
                                        <input onChange={ (e) => handleImageChange(e)} type='file' className="form-control" id="anio" accept="image/png, image/jpeg image/jpg" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label htmlFor="observaciones" className="form-label">Observaciones:</label>
                                        <textarea onChange={(e) => { setVehiculo({ ...vehiculo, observaciones: e.target.value }) }} value={vehiculo.observaciones} className="form-control" id="observaciones" rows="3"></textarea>
                                    </div>
                                    <div className='col-md-6 mt-1'>
                                        <img src={imgSelected} className="img" style={{ width: '150px', height: '150px' }} alt="Sin imagen" />
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" >Registrar</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
