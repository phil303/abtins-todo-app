import React, { Component} from 'react';
import Course from './Course';


class CourseList extends Component {
  render () {
    return (
      <div className="Welcome">Pick a course to enroll!
        <ul>
          <li><Course />Test</li>
          <li><Course /></li>
          <li><Course /></li>
          <li><Course /></li>
        </ul>
      </div>
    )
  }
}

export default CourseList
