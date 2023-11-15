import React, { useState } from 'react'


export const RegistroUsuario = ({ handleCreateUser }) => {
    const [user, setUser] = useState({
        nombre: '',
        usuario: '',
        contrasena: '',
        rol: 'usuario',
    })
    return (
        <>
            <div className="modal fade" id="registroModal" tabIndex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registroModalLabel">Registrar Usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='row g-3 needs-validation' novalidate>
                            <div className="modal-body">
                                <div className='col-md-12'>
                                    <label htmlFor="username" className="form-label">Nombre Completo</label>
                                    <input onChange={(e) => { setUser({ ...user, nombre: e.target.value }) }} value={user.nombre} type="text" className="form-control" id="username" aria-describedby="username" required />
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label htmlFor="username" className="form-label">usuario</label>
                                        <input onChange={(e) => { setUser({ ...user, usuario: e.target.value }) }} value={user.usuario} type="text" className="form-control" id="username" aria-describedby="username" required />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        <input onChange={(e) => { setUser({ ...user, contrasena: e.target.value }) }} value={user.contrasena} type="password" className="form-control" id="password" required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label htmlFor="rol" className="form-label">Rol</label>
                                        <select onChange={(e) => { setUser({ ...user, rol: e.target.value }) }} value={user.rol} className="form-select" id="rol" required>
                                            <option value="usuario">Usuario</option>
                                            <option value="administrador">Administrador</option>
                                        </select>
                                    </div>
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={(e) => { handleCreateUser(user) }}>Registrar</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
