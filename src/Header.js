import React, { Component } from 'react';
import './Header.css';





class Header extends Component {
	render () {
		return (
			<div className="Header">
				<div className="Header__title">{ this.props.name }</div>
				<div className="Header__notifications">20 Notifications</div>
				<div className="Header__login">Log In</div>
			</div>
		)
	}
}

export default Header