import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';
import { Route, NavLink, withRouter } from 'react-router-dom';
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
      },
      isUpdating: false
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
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  addFriend = () => {
    axios.post(`${baseUrl}/friends`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }

  populateForm = (e, id) => {
    e.preventDefault();
    this.setState({ 
      newFriend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    });
    this.props.history.push("/friends")
  }

  deleteFriend = (e, friendID) => {
    e.preventDefault()
    axios.delete(`${baseUrl}/friends/${friendID}`)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }

  updateFriend = () => {
    axios.put(`${baseUrl}/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
        <div>
          <nav>
            <NavLink to="/friends">
              {this.state.isUpdating ? "Update" : "Add"} Friend
            </NavLink>
          </nav>
          {this.state.friends.map((friend, i) => (
            <FriendsList 
              key={i} 
              populateForm={this.populateForm}
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
                isUpdating={this.state.isUpdating}
                updateFriend={this.updateFriend}
              />
            )}
          />
        </div>
    );
  }
}

export default withRouter(App);
