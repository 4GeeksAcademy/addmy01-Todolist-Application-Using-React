import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

//include images into your bundle

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className=" container">
			<div className="card">
				<header>
					todos
				</header>
				<ul>
					<li >
						<input
							type="text"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									setTodos([...todos, inputValue]);
									setInputValue("");
								}
							}}
							placeholder="What needs to done?"
						/>
					</li>
					<div>
						{todos.map((item, index) => (
							<li key={index} className="card-footer d-flex justify-content-between">
								{item}
								<button type="button" className="btn-close" aria-label="Close" onClick={() => setTodos(todos.filter((item, currentIndex) => index != currentIndex))}></button>

								
							</li>
						))}
					</div>
				</ul>

				<div className="m-2 card-footer">
					{todos.length === 0 ? (
						<p>No item left</p>
					) : (
						<p>{todos.length} items left</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
