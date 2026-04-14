import { Button } from "../button/Button";
import styles from "../item/item.module.css";

export function ItemLayout({ task, editTask, deleteTask }) {
	return (
		<li className={styles.todo__item}>
			<label className={styles.checkbox}>
				<input type="checkbox" />
				<span className={styles.customCheckbox}></span>
			</label>

			<span className={styles.item}>{task.title}</span>

			<Button classBtn={"edit__btn"} onClick={() => editTask(task.id)}>
				/
			</Button>
			<Button
				classBtn={"delete__btn"}
				onClick={() => {
					deleteTask(task.id);
				}}
			>
				X
			</Button>
		</li>
	);
}
