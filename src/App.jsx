import { useState } from "react";
import { AppLayout } from "./AppLayout";

export function App() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");
	const [message, setMessage] = useState("");

	const isRepeatTask = tasks.some((task) => task.title === input);

	function addTask(input) {
		if (!input) {
			setMessage("Enter a task name");
			return;
		}

		if (isRepeatTask) {
			setMessage("A task with this name already exists");
			return;
		}

		const newTask = { title: input, id: Date.now(), isCompleted: false };
		setTasks([...tasks, newTask]);
		setInput("");
		setMessage("");
	}

	function onClose() {
		setMessage("");
		setInput("");
	}

	function editTask(id) {
		console.log(id);
	}

	function deleteTask(id) {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	}

	return (
		<AppLayout
			input={input}
			setInput={setInput}
			addTask={addTask}
			tasks={tasks}
			isRepeatTask={isRepeatTask}
			message={message}
			onClose={onClose}
			editTask={editTask}
			deleteTask={deleteTask}
		/>
	);
}
