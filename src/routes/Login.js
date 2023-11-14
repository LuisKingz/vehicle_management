import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home');
        if (username === 'admin' && password === 'admin') {
            //alert('Sesión iniciada');
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                <div className="card" style={{ width: '25rem', height: '22rem' }}>
                    <div className='card-body'>
                        <h2 className="card-title text-center mb-5">Gestión Vehicular</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="username" className="form-label">Usuario:</label>
                                <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" className="form-control" id="username" aria-describedby="username" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Contraseña:</label>
                                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" id="password" aria-describedby='password' />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
