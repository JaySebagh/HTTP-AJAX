import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';

const baseUrl = 'http://localhost:5000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}/friends`)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        {this.state.friends.map((friend, i) => (
          <FriendsList key={i} individualFriends={friend}/>
        ))}
      </div>
    );
  }
}

export default App;
