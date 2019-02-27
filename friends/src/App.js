import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';
import { Route, NavLink } from 'react-router-dom';
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

  addFriend = e => {
    e.preventDefault();
    axios.post(`${baseUrl}/friends`, this.state.newFriend)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteFriend = (e, friendID) => {
    axios.delete(`${baseUrl}/friends/${friendID}`)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
        <div>
          <nav>
            <NavLink to="/friends">
              Add Friend
            </NavLink>
          </nav>
          {this.state.friends.map((friend, i) => (
            <FriendsList 
              key={i} 
              deleteFriend={this.deleteFriend} 
              individualFriends={friend}
            />
          ))}
          <Route
            path="/friends"
            render={props => (
              <FriendForm 
                {...props} 
                addFriend={this.addFriend}
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
