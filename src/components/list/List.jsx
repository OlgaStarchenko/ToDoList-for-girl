import { Item } from "../item/Item";
import styles from "../list/list.module.css";

export function List({
	tasks,
	message,
	editTask,
	deleteTask,
	confirmDeletion,
	setTaskId,
}) {
	return (
		<div className={styles.todo__list}>
			<ul>
				{tasks.map((task) => (
					<Item
						key={task.id}
						task={task}
						message={message}
						editTask={editTask}
						deleteTask={deleteTask}
						confirmDeletion={confirmDeletion}
						setTaskId={setTaskId}
					/>
				))}
			</ul>
		</div>
	);
}
