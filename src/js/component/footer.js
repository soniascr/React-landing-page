import React from "react";

//create your first component
export default function Jumbotron() {
	return (
		<div>
			<footer id="main-footer" class="bg-dark">
				<div class="container">
					<div class="row">
						<div class="col text-center py-4 text-light">
							<p>
								Copyright &copy; Your Website 2021
								<span id="year" />
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

// ¿Habría que añadir funció para el year del Copyright? algo con new Date().getFullYear());
