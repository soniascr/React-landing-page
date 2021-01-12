import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Card
							title={"Card 1 title"}
							image={
								"https://images.pexels.com/photos/1257105/pexels-photo-1257105.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							}
							body={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque augue."
							}
							button={"Click here"}
						/>
					</div>
					<div className="col-md-3">
						<Card
							title={"Card 2 title"}
							image={
								"https://images.pexels.com/photos/1639051/pexels-photo-1639051.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							}
							body={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque augue."
							}
							button={"Click here"}
						/>
					</div>
					<div className="col-md-3">
						<Card
							title={"Card 3 title"}
							image={
								"https://images.pexels.com/photos/6341415/pexels-photo-6341415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							}
							body={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque augue."
							}
							button={"Click here"}
						/>
					</div>
					<div className="col-md-3">
						<Card
							title={"Card 4 title"}
							image={
								"https://images.pexels.com/photos/5645173/pexels-photo-5645173.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							}
							body={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque augue."
							}
							button={"Click here"}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
