import React, { Component } from 'react';
import Header from './Header';
import CourseList from './CourseList';
import Course from './Course'


const props = {
	name: "Learn JavaScript",
	courses: [{
		name: "name",
		subscribers: [],
		tags: [],
	}],
}

// Container for our todo list
class CommunityPage extends Component {
  render () {
    return (
      <div className="CommunityPage">
        <Header name={ props.name } />
			{/*What is wrong here? When removed the page loads*/}
				<CourseList />
      </div>
    );
  }
}

export default CommunityPage;
