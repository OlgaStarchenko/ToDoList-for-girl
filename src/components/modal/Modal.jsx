import { ModalLayout } from "./ModalLayout";

export function Modal({
	message,
	onConfirm,
	onCancel,
	nameConfirm,
	nameCancel,
}) {
	return (
		<ModalLayout
			message={message}
			onConfirm={onConfirm}
			onCancel={onCancel}
			nameConfirm={nameConfirm}
			nameCancel={nameCancel}
		/>
	);
}
