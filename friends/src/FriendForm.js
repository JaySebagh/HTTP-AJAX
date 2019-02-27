import React from 'react';

function FriendForm(props) {
    console.log("the props", props)
    return (
        <div>
            <form onSubmit={props.addFriend}>
                <input 
                    type="text" 
                    name="name" 
                    value={props.newFriend.name} 
                    placeholder="Name" 
                    onChange={props.handleChanges}
                />
                <div className="baseline" />

                <input 
                    type="number" 
                    name="age" 
                    value={props.newFriend.age} 
                    placeholder="Age" 
                    onChange={props.handleChanges}
                />
                <div className="baseline" />

                <input 
                    type="text" 
                    name="email" 
                    value={props.newFriend.email} 
                    placeholder="email" 
                    onChange={props.handleChanges}
                />
                <div className="baseline" />
            </form>
        </div>
    )
}

export default FriendForm;