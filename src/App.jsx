import { useState } from "react";
import { AppLayout } from "./AppLayout";

export function App() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");
	const [message, setMessage] = useState("");
	const [edit, setEdit] = useState(false);
	const [taskId, setTaskId] = useState("");
	const [filter, setFilter] = useState("All");

	function addTask(input) {
		const isRepeatTask = tasks.some((task) => task.title === input);

		if (!input.trim()) {
			setMessage("Enter a task name");
			return;
		}

		if (isRepeatTask) {
			setMessage("A task with this name already exists");
			return;
		}

		const newTask = { title: input, id: Date.now(), isCompleted: false };
		setTasks((prev) => [...prev, newTask]);
		setInput("");
		setMessage("");
	}

	function onClose() {
		setMessage("");
		setInput("");
	}

	function editTask(id) {
		const oldText = tasks.find((task) => task.id === id)?.title;

		setTaskId(id);
		setInput(oldText);
		setEdit(true);
	}

	function rewriteTaskText(newText) {
		const isRepeatTask = tasks.some((task) => task.title === input);
		const updatedTask = tasks.map((task) =>
			task.id === taskId ? { ...task, title: newText } : task,
		);
		if (isRepeatTask) {
			setMessage("A task with this name already exists");
			return;
		}
		setTasks(updatedTask);
		setEdit(false);
		setInput("");
	}

	function confirmDeletion() {
		setMessage("Are you sure you want to delete this task?");
	}

	function deleteTask(id) {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
		setMessage("");
	}

	function handleComplete(id) {
		const newTasks = tasks.map((task) => {
			if (task.id === id) {
				task.isCompleted = !task.isCompleted;
			}
			return task;
		});
		setTasks(newTasks);
	}

	function filterTasks() {
		if (filter === "Active") {
			return tasks.filter((task) => !task.isCompleted);
		}
		if (filter === "Completed") {
			return tasks.filter((task) => task.isCompleted);
		}
		if (filter === "All") {
			return tasks;
		}
	}

	const filteredTasks = filterTasks();

	return (
		<AppLayout
			input={input}
			setInput={setInput}
			addTask={addTask}
			tasks={filteredTasks}
			message={message}
			onClose={onClose}
			editTask={editTask}
			deleteTask={deleteTask}
			edit={edit}
			rewriteTaskText={rewriteTaskText}
			confirmDeletion={confirmDeletion}
			taskId={taskId}
			setTaskId={setTaskId}
			handleComplete={handleComplete}
			filterTasks={filterTasks}
			filter={filter}
			setFilter={setFilter}
		/>
	);
}
