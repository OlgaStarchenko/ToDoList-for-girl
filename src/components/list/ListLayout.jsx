import { Item } from "../item/Item";
import styles from "../list/list.module.css";

export function ListLayout() {
	return (
		<div className={styles.todo__list}>
			<ul>
				<Item />
			</ul>
		</div>
	);
}
