import { ItemLayout } from "./ItemLayout";

export function Item({ task, editTask, deleteTask }) {
	return (
		<ItemLayout task={task} editTask={editTask} deleteTask={deleteTask} />
	);
}
