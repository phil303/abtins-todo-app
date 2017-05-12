import React, { Component } from 'react';
import Header from './Header';


const props = {
	name: "Postgrad course",
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
        
        {/*<List /> */}
      </div>
    );
  }
}

export default CommunityPage;
