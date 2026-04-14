import styles from "../modal/modal.module.css";

export function ModalLayout({ error, onClose }) {
	if (!error) return null;
	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<p>{error}</p>
				<button className={styles.OK__btn} onClick={onClose}>
					OK
				</button>
			</div>
		</div>
	);
}
