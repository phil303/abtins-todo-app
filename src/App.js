import React, { Component } from 'react';
import './App.css';
import CommunityPage from './CommunityPage';
import CourseList from './CourseList';
import Course from './Course';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const onPageTransition = (course) => {
  console.log('This click works!');
}


class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <CommunityPage onCourseClick={ onPageTransition } />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;

// - Closure
// - This keyword
// - Inheritance -use case

