import styles from "../input/input.module.css";

export function InputLayout({ input, setInput, addTask }) {
	console.log(input);

	return (
		<div className={styles.input__container}>
			<input
				className={styles.input}
				id="1"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button className={styles.add__btn} onClick={() => addTask(input)}>
				Add
			</button>
		</div>
	);
}
