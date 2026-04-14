import styles from "./button.module.css";

export function Button({ children, classBtn, onClick }) {
	return (
		<button
			className={`${styles.btn}  ${styles[classBtn]}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
