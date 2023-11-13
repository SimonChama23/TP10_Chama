import React, { useState, useContext } from 'react';
import './Home.css';
import Modal from 'react-bootstrap/Modal';
import { CreacionesContext } from '../Context/CreacionesContext';
import { FavoritosContext } from '../Context/FavoritosContext';
import { UsuarioContext } from '../Context/UsuarioContext';

const Favoritos = (props) => {
    const { creaciones } = useContext(CreacionesContext);
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const estaEnFavoritos = favoritos.some((element) => element.id === props.id);

    const [showModal, setShowModal] = useState(false);
    const { usuario, setUsuario, contraseña, setContraseña } = useContext(UsuarioContext);

    const handleClose = () => setShowModal(false);

    const accionBoton = () => {
        if (usuario !== null) {
            if (estaEnFavoritos) {
                const indice = favoritos.findIndex((element) => element.id === props.id);
                const nuevosFavoritos = [...favoritos];
                nuevosFavoritos.splice(indice, 1);
                setFavoritos(nuevosFavoritos);
            } else {
                setFavoritos([...favoritos, creaciones[props.id - 1]]);
            }
        } else {
            setShowModal(true);
        }
    };

    return (
        <div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicie sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column text-center">
                        <form>
                            <div className="form-group">
                                <input
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="email1"
                                    placeholder="Escriba su mail..."
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    value={contraseña}
                                    onChange={(e) => setContraseña(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="password1"
                                    placeholder="Contraseña..."
                                />
                            </div>
                            <button type="button" className="btn btn-info btn-block btn-round" onClick={handleClose}>
                                Login
                            </button>
                        </form>

                        <div className="text-center text-muted delimiter">or use a social network</div>
                        <div className="d-flex justify-content-center social-buttons">
                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                                <i className="fab fa-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                <i className="fab fa-linkedin"></i>
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div>
                <button className="estiloBoton" onClick={accionBoton}>
                    {estaEnFavoritos ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
                </button>
            </div>
        </div>
    );
};

export default Favoritos;
