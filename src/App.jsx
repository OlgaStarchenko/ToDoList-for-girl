import { useState } from "react";
import { AppLayout } from "./AppLayout";

export function App() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");
	const [error, setError] = useState("");

	const isRepeatTask = tasks.some((task) => task.title === input);

	function addTask(input) {
		const isRepeatTask = tasks.some((task) => task.title === input);

		if (!input) {
			setError("Enter a task name");
			return;
		}

		if (isRepeatTask) {
			setError("A task with this name already exists");
			return;
		}

		const newTask = { title: input, id: Date.now(), isCompleted: false };
		setTasks([...tasks, newTask]);
		setInput("");
		setError("");
	}

	function onClose() {
		setError("");
		setInput("");
	}

	return (
		<AppLayout
			input={input}
			setInput={setInput}
			addTask={addTask}
			tasks={tasks}
			isRepeatTask={isRepeatTask}
			error={error}
			onClose={onClose}
		/>
	);
}
