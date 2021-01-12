import React from "react";

//create your first component
export default function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
				vel cursus mauris. Donec elementum ligula quis dui convallis, et
				fringilla mauris pellentesque. Proin vehicula sit amet quam et
				malesuada. Nam vulputate mauris tortor, quis feugiat ex lacinia
				vel. Vestibulum hendrerit ligula dui, vel vehicula libero
				efficitur non.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
}
