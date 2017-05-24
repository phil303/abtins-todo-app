import React, { Component } from 'react';
import './App.css';
import CommunityPage from './CommunityPage';
import CourseList from './CourseList';
import Course from './Course';

const onPageTransition = (course) => {

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <CommunityPage onCourseClick={ onPageTransition } />
      </div>
    );
  }
}

export default App;

// - Closure
// - This keyword
// - Inheritance -use case

