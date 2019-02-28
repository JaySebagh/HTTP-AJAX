import React from 'react';

function FriendForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
        if(props.isUpdating) {
            props.updateFriend();
        } else {
            props.addFriend();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit>
                <input 
                    type="text" 
                    name="name" 
                    value={props.newFriend.name} 
                    placeholder="Name" 
                    onChange={props.handleChanges}
                />

                <input 
                    type="number" 
                    name="age" 
                    value={props.newFriend.age} 
                    placeholder="Age" 
                    onChange={props.handleChanges}
                />

                <input 
                    type="text" 
                    name="email" 
                    value={props.newFriend.email} 
                    placeholder="email" 
                    onChange={props.handleChanges}
                />

                <button type="submit">
                    {props.isUpdating ? "Update Friend" : "Add Friend"}
                </button>
            </form>
        </div>
    )
}

export default FriendForm;