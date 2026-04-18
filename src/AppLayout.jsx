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
}) {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.title}>To Do List for Girls</h1>
				<Input input={input} setInput={setInput} addTask={addTask} />
				{tasks.length > 0 ? (
					<List
						tasks={tasks}
						editTask={editTask}
						deleteTask={deleteTask}
					/>
				) : (
					<Empty />
				)}

				{message && (
					<Modal
						message={message}
						onConfirm={onClose}
						nameConfirm={"OK"}
					/>
				)}
				<FilterPanel />
			</div>
		</div>
	);
}
