import styles from "../item/item.module.css";

export function ItemLayout() {
	return (
		<div className={styles.todo__item}>
			<label className={styles.checkbox}>
				<input type="checkbox" />
				<span className={styles.customCheckbox}></span>
			</label>

			<li className={styles.item}>Купить картошки, пожарить и съесть</li>
			<button className={styles.edit__btn}>/</button>
			<button className={styles.delete__btn}>X</button>
		</div>
	);
}
