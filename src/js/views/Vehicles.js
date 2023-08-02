import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const Vehicles = () => {
    const { store, actions } = useContext(Context);

    const handleAddToFavorites = (vehicle) => {
        actions.addFavorite('vehicle', vehicle);
    };

    return (
        <div className='container-card mb-5'>
            {store.vehiclesStarWars.map((vehicle, index) => {
                return <div key={vehicle.url} className="custom-card m-2 border rounded">
                    <img className="card-img-top custom-img" src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 4}.jpg`} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>

                        {/* boton de learnmore */}

                        <Link to={`/infoVehicle/${vehicle.uid}`} >
                            <button type='button' className='btn btn-dark me-3'>
                                Learn more
                            </button>
                        </Link>

                        <button type='button' className='btn btn-danger' onClick={() => handleAddToFavorites(vehicle)}>
                            ♡
                        </button>
                    </div>
                </div>
            })}

        </div>
    )
}

export default Vehicles