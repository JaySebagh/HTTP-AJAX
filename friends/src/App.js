import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';
import { Route } from 'react-router-dom';
import FriendForm from './FriendForm';

const baseUrl = 'http://localhost:5000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
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

  handleChanges = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
        <div>
          {this.state.friends.map((friend, i) => (
            <FriendsList key={i} individualFriends={friend}/>
          ))}
          <Route
            path="/friend"
            render={props => (
              <FriendForm 
                {...props} 
                newFriend={this.state.newFriend} 
                handleChanges={this.handleChanges}
              />
            )}
          />
        </div>
    );
  }
}

export default App;
