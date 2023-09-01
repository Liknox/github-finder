import { memo } from "react"
import { MyButton } from "../MyButton"
import SearchIcon from "../../assets/icon-search.svg"

import styles from "./Search.module.scss"

interface ISearchProps {
	hasError: boolean
	onSubmit: (text: string) => void
}

export const Search = memo(({ hasError, onSubmit }: ISearchProps) => {
	function handleSubmit(e: React.FormEvent<HTMLFormElement & { username: HTMLInputElement }>) {
		e.preventDefault()
		const text = e.currentTarget.username.value

		if (text.trim()) {
			onSubmit(text)
			e.currentTarget.reset()
		}
	}

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<div className={styles.search}>
				<label htmlFor="search" className={styles.label}>
					<SearchIcon />
				</label>
				<input type="text" className={styles.textField} id="search" name="username" placeholder="Search GitHub user..." />
				{hasError && <div className={styles.error}>No result</div>}
				<MyButton>Search</MyButton>
			</div>
		</form>
	)
})
