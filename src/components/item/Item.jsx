import { Button } from "../button/Button";
import styles from "../item/item.module.css";

export function Item({
	task,
	editTask,
	confirmDeletion,
	setTaskId,
	handleComplete,
}) {
	return (
		<li className={styles.todo__item}>
			<label className={styles.checkbox}>
				<input
					type="checkbox"
					checked={task.isComplete}
					onChange={() => handleComplete(task.id)}
				/>
				<span className={styles.customCheckbox}></span>
			</label>
			<span
				className={
					task.isCompleted
						? `${styles.item} ${styles.item__completed}`
						: styles.item
				}
			>
				{task.title}
			</span>
			<Button classBtn={"edit__btn"} onClick={() => editTask(task.id)}>
				<img src="/src/assets/edit_24dp_D16D6A_FILL0_wght400_GRAD0_opsz24.svg" />
			</Button>
			<Button
				classBtn={"delete__btn"}
				onClick={() => {
					setTaskId(task.id);
					confirmDeletion();
				}}
			>
				<img src="/src/assets/delete_24dp_D16D6A_FILL0_wght400_GRAD0_opsz24.svg" />
			</Button>
		</li>
	);
}
