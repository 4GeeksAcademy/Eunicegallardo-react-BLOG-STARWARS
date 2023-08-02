import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Context } from '../store/appContext';
import { FaTrash } from "react-icons/fa";

const Favorites = () => {
    const { store, actions } = useContext(Context);

    const handleRemoveFromFavorites = (index) => {
        actions.removeFavorite(index);
    };

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Favorites ({store.favorites.length})
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {store.favorites.map((favorite, index) => (
                        <Dropdown.Item key={index} onClick={() => handleRemoveFromFavorites(index)}>
                            {favorite.data.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Favorites