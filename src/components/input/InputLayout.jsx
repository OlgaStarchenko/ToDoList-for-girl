import styles from "../input/input.module.css";

export function InputLayout() {
	return (
		<div className={styles.input__container}>
			<input className={styles.input} id="1" />
			<button className={styles.add__btn}>Add</button>
		</div>
	);
}
