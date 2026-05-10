import styles from "../input/input.module.css";
import { Button } from "../button/Button";
import iconSearch from "../../assets/search.svg";

export function Search({ input, setInput, handleSearch }) {
	return (
		<div className={styles.search__container}>
			<div className={styles.input__container}>
				<input
					className={styles.input}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>

				<Button
					classBtn={"add__btn"}
					onClick={() => handleSearch(input)}
				>
					<img src={iconSearch} />
				</Button>
			</div>
		</div>
	);
}
