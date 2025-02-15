import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({showFilter, toggleSort}) => {
	return (
		<div className="navWrapper">

			<select onChange={e => toggleSort( e.target.value ) }>
				<option></option>
				<option value='name'>Name</option>
				<option value='weight'>Weight</option>
			</select>

			<span className="headerText">HogWild</span>
			<div onClick={showFilter} className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;

