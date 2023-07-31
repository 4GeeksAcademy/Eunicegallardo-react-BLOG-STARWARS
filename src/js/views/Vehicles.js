import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const Vehicles = () => {
    const { store, actions } = useContext(Context)


    return (
        <div className='container-card mb-5'>
            {store.vehiclesStarWars.map((vehicle, index) => {
                return <div key={index} className="custom-card m-2 border rounded">
                    <img className="card-img-top custom-img" src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>
                        <p className="card-text">Population:</p>
                        <p className="card-text"> Terrain:</p>

                        {/* boton de learnmore */}

                        <Link to={"/infoVehicle"} >
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
    )
}

export default Vehicles