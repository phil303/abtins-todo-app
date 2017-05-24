import React, { Component} from 'react';
import Course from './Course';




class CourseList extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="Welcome">Pick a course to enroll!
        <ul>
          { this.props.courses.map((obj) => <li>{ obj.name }</li>)}
        </ul>
      </div>
    )
  }
}

export default CourseList
