import React from 'react';

class FriendsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    render () {
        return(
            <div>
                <p>{this.props.individualFriends.name}</p>
                <p>{this.props.individualFriends.age}</p>
                <p>{this.props.individualFriends.email}</p>
            </div>
        )
    }
}

export default FriendsList;