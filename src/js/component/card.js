import React from "react";
import PropTypes from "prop-types";

//create your first component
export default function Card(props) {
	return (
		<div className="card mb-3">
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.body}</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	image: PropTypes.string,
	button: PropTypes.string
};
