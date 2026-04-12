import styles from "./App.module.css";
import { FilterPanel } from "./components/filterPanel/FilterPanel";
import { Input } from "./components/input/Input";
import { List } from "./components/list/list";

export function AppLayout({ input, setInput, addTask }) {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.title}>To Do List for Girls</h1>

				<Input input={input} setInput={setInput} addTask={addTask} />

				<List />

				<FilterPanel />
			</div>
		</div>
	);
}
