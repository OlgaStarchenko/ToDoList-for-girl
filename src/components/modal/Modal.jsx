import styles from "../modal/modal.module.css";

export function Modal({
	message,
	onConfirm,
	onCancel,
	nameConfirm,
	nameCancel,
}) {
	return (
		<div className={styles.overlay} onClick={onConfirm}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<p>{message}</p>
				<button className={styles.OK__btn} onClick={onConfirm}>
					{nameConfirm}
				</button>
				{nameCancel && (
					<button className={styles.OK__btn} onClick={onCancel}>
						{nameCancel}
					</button>
				)}
			</div>
		</div>
	);
}
