import styles from "../filterPanel/filterPanel.module.css";

export function FilterPanelLayout() {
	return (
		<div className={styles.filter__container}>
			<div className={styles.filter__top}>
				<button className={styles.filter__btn}>All</button>
				<button className={styles.filter__btn}>Active</button>
				<button className={styles.filter__btn}>Completed</button>
			</div>

			<div className={styles.filter__bottom}>
				<button className={styles.filter__btn}>Clear Completed</button>
			</div>
		</div>
	);
}
