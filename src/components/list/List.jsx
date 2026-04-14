import { ListLayout } from "./ListLayout";

export function List({ tasks, editTask, deleteTask }) {
	return (
		<ListLayout tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
	);
}
