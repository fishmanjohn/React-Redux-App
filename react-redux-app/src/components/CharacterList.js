import React from 'react';
import CharacterCard from './CharacterCard'

const CharacterList = (props) => {
        return (
             <div>
        <h2>{props.placeHolder}</h2>
        </div>
            // props.state.map(character=>{
            //     return (
            //         <CharacterCard key = {character.id} props={character} />
                    
            //     )
            // })
        )

        }
        export default CharacterList