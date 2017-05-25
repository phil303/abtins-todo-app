import React, { Component} from 'react';
import Course from './Course';



class CourseList extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="Welcome">Pick a course to enroll!
        <ul>
          { this.props.courses.map((course, idx) => <Course key={ idx } name={ course.name }  tags={ course.tags } /> )}
        </ul>
      </div>
    )
  }
}

export default CourseList


// const newCourses = this.props.courses.map(course => {
//   return {
//     name: course.title,
//     number: course.number + 1,
//   }
// })