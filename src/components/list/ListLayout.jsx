import { Item } from "../item/Item";
import styles from "../list/list.module.css";

export function ListLayout({ tasks }) {
	return (
		<div className={styles.todo__list}>
			<ul>
				{tasks.map((task) => (
					<Item key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
}
