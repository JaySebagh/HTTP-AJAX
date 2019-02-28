import React from 'react';

const FriendsList = props => {
        return(
            <div>
                <p>{props.individualFriends.name}</p>
                <p>{props.individualFriends.age}</p>
                <p>{props.individualFriends.email}</p>
                <button onClick={e => props.populateForm(e, props.individualFriends.id)}>Edit Friend</button>
                <button onClick={e => props.deleteFriend(e, props.individualFriends.id)}>Delete Friend</button>
            </div>
        )
}

export default FriendsList;