import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap'; // Asegúrate de tener instalada la librería react-bootstrap
import { Context } from '../store/appContext';

const Favorites = () => {
    const { store } = useContext(Context);
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Favorites ({store.favorites.length})
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {store.favorites.map((favorite, index) => (
                        <Dropdown.Item key={index}>{favorite.data.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Favorites