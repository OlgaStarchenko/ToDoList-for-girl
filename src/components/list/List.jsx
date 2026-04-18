import { Item } from "../item/Item";
import styles from "../list/list.module.css";

export function List({ tasks, editTask, deleteTask }) {
	return (
		<div className={styles.todo__list}>
			<ul>
				{tasks.map((task) => (
					<Item
						key={task.id}
						task={task}
						editTask={editTask}
						deleteTask={deleteTask}
					/>
				))}
			</ul>
		</div>
	);
}
