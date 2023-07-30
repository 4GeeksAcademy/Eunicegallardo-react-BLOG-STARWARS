import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';



const Characters = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className='container-card mb-5'>
            {store.characterStarWars.map((character, index) => {
                return <div key={index} className="custom-card m-2 border rounded">
                    <img className="card-img-top custom-img" src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text" >Gender:{character.gender}</p>
                        <p className="card-text"> Mass:{character.mass}</p>
                        <p className="card-text"> Eye Color:{character.eye_color}</p>

                        {/* boton de learnmore */}

                        <Link to="/info">
                            <button type='button' className='btn btn-dark me-3'>
                                Learn more
                            </button>
                        </Link>

                        <button type='button' className='btn btn-danger'>
                            ♡
                        </button>
                    </div>
                </div>
            })}

        </div>
    );
};

export default Characters