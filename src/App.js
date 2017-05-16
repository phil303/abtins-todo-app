import React, { Component } from 'react';
import './App.css';
import CommunityPage from './CommunityPage';
import CourseList from './CourseList';
import Course from './Course';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CommunityPage />
      </div>
    );
  }
}

export default App;
