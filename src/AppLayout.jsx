import styles from "./App.module.css";
export function AppLayout() {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.title}>To Do List for Girls</h1>
				<div className={styles.input__container}>
					<input className={styles.input} id="1" />
					<button className={styles.add__btn}>Add</button>
				</div>

				<div className={styles.todo__list}>
					<ul>
						<div className={styles.todo__item}>
							<label className={styles.checkbox}>
								<input type="checkbox" />
								<span className={styles.customCheckbox}></span>
							</label>

							<li className={styles.item}>
								Купить картошки, пожарить и съесть
							</li>
							<button className={styles.edit__btn}>/</button>
							<button className={styles.delete__btn}>X</button>
						</div>
					</ul>
				</div>

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
