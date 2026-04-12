import { useState } from "react";
import { AppLayout } from "./AppLayout";

export function App() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");
	console.log(tasks);

	function addTask(input) {
		if (input === "") {
			return;
		}

		const newTask = { title: input, id: Date.now(), isCompleted: false };
		setTasks([...tasks, newTask]);
		setInput("");
	}

	return <AppLayout input={input} setInput={setInput} addTask={addTask} />;
}
