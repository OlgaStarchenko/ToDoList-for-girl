import { Button } from "../button/Button";
import styles from "../filterPanel/filterPanel.module.css";

export function FilterPanel({ filter, setFilter }) {
	return (
		<div className={styles.filter__container}>
			<div className={styles.filter__top}>
				<Button
					classBtn={filter === "All" ? "active__btn" : "filter__btn"}
					onClick={() => setFilter("All")}
				>
					All
				</Button>
				<Button
					classBtn={
						filter === "Active" ? "active__btn" : "filter__btn"
					}
					onClick={() => setFilter("Active")}
				>
					Active
				</Button>
				<Button
					classBtn={
						filter === "Completed" ? "active__btn" : "filter__btn"
					}
					onClick={() => setFilter("Completed")}
				>
					Completed
				</Button>
			</div>

			<div className={styles.filter__bottom}>
				<Button classBtn={"filter__btn"}>Clear Completed</Button>
			</div>
		</div>
	);
}
