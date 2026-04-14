import { InputLayout } from "./InputLayout";

export function Input({ input, setInput, addTask, isRepeatTask, error }) {
	return (
		<InputLayout
			input={input}
			setInput={setInput}
			addTask={addTask}
			isRepeatTask={isRepeatTask}
			error={error}
		/>
	);
}
