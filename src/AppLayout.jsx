import styles from "./App.module.css";
import { Empty } from "./components/empty/Empty";
import { FilterPanel } from "./components/filterPanel/FilterPanel";
import { Input } from "./components/input/Input";
import { List } from "./components/list/List";
import { Modal } from "./components/modal/Modal";

export function AppLayout({
	input,
	setInput,
	addTask,
	tasks,
	message,
	onClose,
	editTask,
	deleteTask,
	edit,
	rewriteTaskText,
	confirmDeletion,
	taskId,
	setTaskId,
}) {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.title}>To Do List for Girls</h1>
				<Input
					input={input}
					setInput={setInput}
					addTask={addTask}
					edit={edit}
					rewriteTaskText={rewriteTaskText}
				/>
				{tasks.length > 0 ? (
					<List
						tasks={tasks}
						message={message}
						editTask={editTask}
						deleteTask={deleteTask}
						confirmDeletion={confirmDeletion}
						setTaskId={setTaskId}
					/>
				) : (
					<Empty />
				)}
				{message === "Enter a task name" && (
					<Modal
						message={message}
						onConfirm={onClose}
						nameConfirm={"OK"}
					/>
				)}
				{message === "A task with this name already exists" && (
					<Modal
						message={message}
						onConfirm={onClose}
						nameConfirm={"OK"}
					/>
				)}
				{message === "Are you sure you want to delete this task?" && (
					<Modal
						message={message}
						onConfirm={() => deleteTask(taskId)}
						onCancel={onClose}
						nameConfirm={"Delete"}
						nameCancel={"Cancel"}
					/>
				)}
				<FilterPanel />
			</div>
		</div>
	);
}
