import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CharacterInfo = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className='row m-0'>
            <div className='container col-4'>
                <img className="card-img-top ps-3 pt-3" src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`} alt="img" />
            </div>
            <div className='col-8 text-center' >
                <div className='row text-danger'>
                    <h1>Character</h1>
                </div>
                <div className='container row p-3 text-light'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt, platea lacinia cursus dictumst sed morbi nunc nisl cubilia, phasellus urna molestie mollis felis etiam neque. Rutrum molestie egestas cursus tincidunt morbi nostra elementum accumsan integer varius dis quam, erat non sociis bibendum condimentum malesuada suscipit fringilla tempor eget. Eu magnis ad lectus cursus nunc integer dictum nam ligula suscipit, per senectus tincidunt phasellus porta odio maecenas inceptos blandit est, netus ultrices sociosqu dictumst imperdiet proin turpis rhoncus varius.</p>
                </div>
                <div className='container'>
                    <div className='border-bottom border-danger mx-4 mt-2'></div>
                    <div className='row text-danger'>
                        <div className='col-3'>
                            <h5>Name:</h5>
                            <p>name</p>
                        </div>
                        <div className='col-3'>
                            <h5>Birth year:</h5>
                            <p>n/a</p>
                        </div>
                        <div className='col-3'>
                            <h5>Heigth:</h5>
                            <p>n/a</p>
                        </div>
                        <div className='col-3'>
                            <h5>Eye color:</h5>
                            <p>n/a</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default CharacterInfo