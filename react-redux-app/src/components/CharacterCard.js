import React from 'react';


const CharacterCard = (props) =>{

    return (
    <div className='characterCard'>
    <h2>Name: {props.name}</h2>
        <img alt='' src={props.img}/>
    <p>Ocupation: {props.ocupation}</p>
    <p>Status: {props.status}</p>
        </div>
    )
}
export default CharacterCard