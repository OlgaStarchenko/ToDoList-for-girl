import { ModalLayout } from "./ModalLayout";

export function Modal({ error, onClose }) {
	return <ModalLayout error={error} onClose={onClose} />;
}
