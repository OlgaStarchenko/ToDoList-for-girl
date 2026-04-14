import styles from "./button.module.css";

export function Button({ name, input, addTask, classBtn }) {
	console.log(classBtn);

	return (
		<button
			className={`${styles.btn}  ${styles[classBtn]}`}
			onClick={() => addTask(input)}
		>
			{name}
		</button>
	);
}
