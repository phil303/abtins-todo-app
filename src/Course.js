import React from 'react';

const Course = (props) => {
	return(
		<li><span>{ props.name }</span><br /><span>{ props.tags }</span></li>) 
};

export default Course;
