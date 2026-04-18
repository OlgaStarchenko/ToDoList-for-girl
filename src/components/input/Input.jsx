import styles from "../input/input.module.css";
import { Button } from "../button/Button";

export function Input({ input, setInput, addTask, edit, rewriteTaskText }) {
	return (
		<div className={styles.input__container}>
			<input
				className={styles.input}
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			{edit ? (
				<Button
					classBtn={"add__btn"}
					onClick={() => rewriteTaskText(input)}
				>
					Edit
				</Button>
			) : (
				<Button classBtn={"add__btn"} onClick={() => addTask(input)}>
					Add
				</Button>
			)}
		</div>
	);
}
