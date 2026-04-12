import styles from "./App.module.css";
import { FilterPanel } from "./components/filterPanel/FilterPanel";
import { InputLayout } from "./components/input/InputLayout";
import { List } from "./components/list/list";
export function AppLayout() {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.title}>To Do List for Girls</h1>

				<InputLayout />

				<List />

				<FilterPanel />
			</div>
		</div>
	);
}
