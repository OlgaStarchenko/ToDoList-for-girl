import { Button } from "../button/Button";
import styles from "../input/input.module.css";

export function InputLayout({ input, setInput, addTask }) {
	return (
		<div className={styles.input__container}>
			<input
				className={styles.input}
				id="1"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>

			<Button
				classBtn={"add__btn"}
				input={input}
				onClick={() => addTask(input)}
			>
				Add
			</Button>
		</div>
	);
}
