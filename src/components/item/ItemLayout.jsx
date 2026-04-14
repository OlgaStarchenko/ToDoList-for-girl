import { Button } from "../button/Button";
import styles from "../item/item.module.css";

export function ItemLayout({ task }) {
	return (
		<li className={styles.todo__item}>
			<label className={styles.checkbox}>
				<input type="checkbox" />
				<span className={styles.customCheckbox}></span>
			</label>

			<span className={styles.item}>{task.title}</span>

			<Button name={"/"} classBtn={"edit__btn"} />
			<Button name={"X"} classBtn={"delete__btn"} />
		</li>
	);
}
