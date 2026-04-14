import styles from "../item/item.module.css";

export function ItemLayout({ task }) {
	return (
		<li className={styles.todo__item}>
			<label className={styles.checkbox}>
				<input type="checkbox" />
				<span className={styles.customCheckbox}></span>
			</label>

			<span className={styles.item}>{task.title}</span>
			<button className={styles.edit__btn}>/</button>
			<button className={styles.delete__btn}>X</button>
		</li>
	);
}
