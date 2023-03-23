import React, {useState} from 'react';
import PlayerForm from './PlayerForm';

const NewPlayers = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const changeEditing = () => {
        setIsEditing(true);
    }

    return (
        <div className="player-form-container">
            {!isEditing && <button className="reset" onClick={changeEditing}>New Players</button>}
            {isEditing && <PlayerForm addPlayers={props.addPlayers} stopEditing={setIsEditing}/>}
        </div>
    )
}

export default NewPlayers;