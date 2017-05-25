import React, { Component } from 'react';
import Header from './Header';
import CourseList from './CourseList';
import Course from './Course'


const data = {
	name: "Learn JavaScript",
	courses: [{
		name: "Javascript 101",
		subscribers: [],
		tags: ["Webdev", "Javascript"],
	},
	{
		name: "HTML/CSS",
		subscribers: [],
		tags: [],
	},
	{
		name: "Python",
		subscribers: [],
		tags: [],
	}],
}

// Container for our todo list
class CommunityPage extends Component {
  render () {

    return (
      <div className="CommunityPage">
        <Header name={ data.name } />
				<CourseList courses={ data.courses } onCourseClick={ this.props.onCourseClick } />
      </div>
    );
  }
}

export default CommunityPage;
