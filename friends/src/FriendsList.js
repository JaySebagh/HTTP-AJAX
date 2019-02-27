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
                <button onClick={e => this.props.deleteFriend(e, this.props.individualFriends.id)}>Delete Friend</button>
                {/* <button>Delete Friend</button> */}
            </div>
        )
    }
}

export default FriendsList;