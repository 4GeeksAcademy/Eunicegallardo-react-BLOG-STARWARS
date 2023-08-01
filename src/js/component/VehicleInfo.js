import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

const VehicleInfo = () => {
    let { theid } = useParams();

    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.getVehicleById(theid)
    }, [theid, store]);

    const { name, model, created, passengers} = store.vehicleInfo;


    return (
        <div className='row me-0'>
            <div className='container-img col-4'>
                <img className="card-img-top m-5" src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }} alt="img" />
            </div>
            <div className='col-8 text-center'>
                <div className='row text-danger'>
                    <h1>{name}</h1>
                </div>
                <div className='container row p-5 text-light'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt, platea lacinia cursus dictumst sed morbi nunc nisl cubilia, phasellus urna molestie mollis felis etiam neque. Rutrum molestie egestas cursus tincidunt morbi nostra elementum accumsan integer varius dis quam, erat non sociis bibendum condimentum malesuada suscipit fringilla tempor eget. Eu magnis ad lectus cursus nunc integer dictum nam ligula suscipit, per senectus tincidunt phasellus porta odio maecenas inceptos blandit est, netus ultrices sociosqu dictumst imperdiet proin turpis rhoncus varius.</p>
                </div>
                <div className='container'>
                    <div className='border-bottom border-danger mx-4 mt-2'></div>
                    <div className='row text-danger'>
                        <div className='col-3'>
                            <h5>Name:</h5>
                            <p>{name}</p>
                        </div>
                        <div className='col-3'>
                            <h5>Model:</h5>
                            <p>{model}</p>
                        </div>
                        <div className='col-3'>
                            <h5>Created:</h5>
                            <p>{created}</p>
                        </div>
                        <div className='col-3'>
                            <h5>Passengers:</h5>
                            <p>{passengers}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default VehicleInfo