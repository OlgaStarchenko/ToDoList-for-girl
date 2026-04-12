import styles from "./App.module.css";
import { InputLayout } from "./components/input/InputLayout";
import { List } from "./components/list/list";
export function AppLayout() {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.title}>To Do List for Girls</h1>

				<InputLayout />

				<List />

				<div className={styles.filter__container}>
					<div className={styles.filter__top}>
						<button className={styles.filter__btn}>All</button>
						<button className={styles.filter__btn}>Active</button>
						<button className={styles.filter__btn}>
							Completed
						</button>
					</div>

					<div className={styles.filter__bottom}>
						<button className={styles.filter__btn}>
							Clear Completed
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
