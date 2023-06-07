import { useRef } from "react"
import { MyButton } from "../MyButton"
import SearchIcon from "../../assets/icon-search.svg"

import styles from "./Search.module.scss"

interface ISearchProps {
	hasError: boolean
	onSubmit: (text: string) => void
}

export const Search = ({ hasError, onSubmit }: ISearchProps) => {
	const searchRef = useRef<HTMLFormElement | null>(null)

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()

		const text = searchRef.current ? searchRef.current.username.value : ""

		if (text) {
			onSubmit(text)
			if (searchRef.current) searchRef.current.username.value = ""
		}
	}

	return (
		<form onSubmit={handleSubmit} ref={searchRef} autoComplete="off">
			<div className={styles.search}>
				<label htmlFor="search" className={styles.label}>
					<SearchIcon />
				</label>
				<input type="text" className={styles.textField} id="search" name="username" placeholder="Search Github user..." />
				{hasError && <div className={styles.error}>No result</div>}
				<MyButton>Search</MyButton>
			</div>
		</form>
	)
}
