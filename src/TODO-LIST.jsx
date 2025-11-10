import {useState, useEffect} from "react";
import MyImage from "./assets/complete.png";

function TodoList() {
	const [actions, setActions] = useState(() => {
		const savedData = localStorage.getItem("data");
		return savedData ? JSON.parse(savedData) : [];
	});

	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(actions));
	}, [actions]);

	function addList() {
		const newListItem = document.getElementById("myinput").value;
		if (newListItem.trim()) {
			setActions((a) => [...a, {text: newListItem, completed: false}]);
			document.getElementById("myinput").value = "";
		}
		saveData();
		showList();
	}

	function removeList(index) {
		setActions(actions.filter((_, i) => i !== index));
		saveData();
		showList();
	}

	//const MyImage = ``;
	function complete(index) {
		setActions(actions.map((action, i) => (i === index ? {...action, completed: !action.completed} : action)));
	}

	let actionList = actions.map((action, index) => (
		<li key={index} onClick={() => complete(index)} className={action.completed ? "checked" : ""}>
			{action.text}
			<span
				onClick={(stop) => {
					stop.stopPropagation();
					removeList(index);
				}}
			>
				&#xD7;{" "}
			</span>
		</li>
	));

	function saveData() {
		localStorage.setItem("data", actionList);
	}
	function showList() {
		actionList = localStorage.getItem("data");
	}

	return (
		<>
			<div className="main_container">
				<h1 className="main_heder">
					TODO-LIST APP <img src="src/assets/image.png" />
				</h1>

				<input className="the_input" type="text" id="myinput" placeholder="add activity" />
				<button className="my_button" onClick={addList}>
					+Add
				</button>

				<ul className="list_items">{actionList}</ul>
			</div>
		</>
	);
}

export default TodoList;
