import styles from "./App.module.css";
import { Empty } from "./components/empty/Empty";
import { FilterPanel } from "./components/filterPanel/FilterPanel";
import { Input } from "./components/input/Input";
import { List } from "./components/list/list";
import { Modal } from "./components/modal/Modal";

export function AppLayout({
	input,
	setInput,
	addTask,
	tasks,
	isRepeatTask,
	error,
	onClose,
}) {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.title}>To Do List for Girls</h1>
				<Input
					input={input}
					setInput={setInput}
					addTask={addTask}
					isRepeatTask={isRepeatTask}
					error={error}
				/>
				{tasks.length > 0 ? <List tasks={tasks} /> : <Empty />}
				{isRepeatTask && <Modal error={error} onClose={onClose} />}
				{!input && <Modal error={error} onClose={onClose} />}
				<FilterPanel />
			</div>
		</div>
	);
}
