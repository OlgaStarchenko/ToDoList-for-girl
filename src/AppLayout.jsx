import styles from "./App.module.css";
import { Button } from "./components/button/Button";
import { Empty } from "./components/empty/Empty";
import { FilterPanel } from "./components/filterPanel/FilterPanel";
import { Input } from "./components/input/Input";
import { List } from "./components/list/List";
import { Modal } from "./components/modal/Modal";
import { Search } from "./components/search/Search";

export function AppLayout({
	input,
	setInput,
	addTask,
	tasks,
	message,
	onClose,
	editTask,
	deleteTask,
	edit,
	rewriteTaskText,
	confirmDeletion,
	taskId,
	setTaskId,
	handleComplete,
	filter,
	setFilter,
	clearCompleted,
	search,
	setSearch,
	handleSearch,
	searchTasks,
	clearSearch,
}) {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.title}>To Do List for Girls</h1>
				<Input
					input={input}
					setInput={setInput}
					addTask={addTask}
					edit={edit}
					rewriteTaskText={rewriteTaskText}
				/>
				<Search
					input={search}
					setInput={setSearch}
					handleSearch={handleSearch}
					clearSearch={clearSearch}
				/>
				<div className={styles.app__body}>
					{searchTasks.length > 0 && (
						<>
							<div className={styles.search__result}>
								<h2>Search Result:</h2>
								<Button
									classBtn={"add__btn"}
									onClick={() => handleSearch(input)}
								>
									X
								</Button>
							</div>

							<List
								tasks={searchTasks}
								message={message}
								editTask={editTask}
								deleteTask={deleteTask}
								confirmDeletion={confirmDeletion}
								setTaskId={setTaskId}
								handleComplete={handleComplete}
							/>
						</>
					)}
					{tasks.length > 0 ? (
						<List
							tasks={tasks}
							message={message}
							editTask={editTask}
							deleteTask={deleteTask}
							confirmDeletion={confirmDeletion}
							setTaskId={setTaskId}
							handleComplete={handleComplete}
						/>
					) : (
						<Empty />
					)}
				</div>
				{message === "Enter a task name" && (
					<Modal
						message={message}
						onConfirm={onClose}
						nameConfirm={"OK"}
					/>
				)}
				{message === "A task with this name already exists" && (
					<Modal
						message={message}
						onConfirm={onClose}
						nameConfirm={"OK"}
					/>
				)}
				{message === "Are you sure you want to delete this task?" && (
					<Modal
						message={message}
						onConfirm={() => deleteTask(taskId)}
						onCancel={onClose}
						nameConfirm={"Delete"}
						nameCancel={"Cancel"}
					/>
				)}
				<FilterPanel
					filter={filter}
					setFilter={setFilter}
					clearCompleted={clearCompleted}
				/>
			</div>
		</div>
	);
}
