import React, { Component } from 'react';
import Cards from '../components/Cards.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  return resp.json();
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetchUsers().then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="center">Loading!</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboBuddies</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <Cards robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
