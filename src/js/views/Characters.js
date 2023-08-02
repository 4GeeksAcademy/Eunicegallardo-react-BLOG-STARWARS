import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext'


const Characters = () => {
    const { store, actions } = useContext(Context);

    const handleAddToFavorites = (character) => {
        actions.addFavorite('character', character);
    };

    return (
        <div className='container-card mb-5'>
            {store.characterStarWars.map((character, index) => {
                return <div key={character.url} className="custom-card m-2 border rounded">
                    <img className="card-img-top custom-img" src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>

                        {/* boton de learnmore */}

                        <Link to={`/infoCharacter/${character.uid}`}>
                            <button type='button' className='btn btn-dark me-3'>
                                Learn more
                            </button>
                        </Link>

                        <button type='button' className='btn btn-danger' onClick={() => handleAddToFavorites(character)}>
                            ♡
                        </button>
                    </div>
                </div>
            })}

        </div>
    );
};

export default Characters