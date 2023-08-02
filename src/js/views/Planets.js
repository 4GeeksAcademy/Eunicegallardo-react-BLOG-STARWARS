import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Planets = () => {
    const { store, actions } = useContext(Context);

    const handleAddToFavorites = (planet) => {
        actions.addFavorite('planet', planet);
    };

    return (
        <div className='container-card mb-5'>
            {store.planetsStarWars.map((planet, index) => {
                return <div key={planet.url} className="custom-card m-2 border rounded">
                    <img className="card-img-top custom-img" src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>

                        {/* boton de learnmore */}

                        <Link to={`/infoPlanet/${planet.uid}`} >
                            <button type='button' className='btn btn-dark me-3'>
                                Learn more
                            </button>
                        </Link>

                        <button type='button' className='btn btn-danger' onClick={() => handleAddToFavorites(planet)}>
                            ♡
                        </button>
                    </div>
                </div>
            })}

        </div>
    );
}

export default Planets