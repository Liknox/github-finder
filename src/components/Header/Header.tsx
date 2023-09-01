import { memo } from "react"
import { ThemeSwitcher } from "../ThemeSwitcher"
import styles from "./Header.module.scss"

interface IHeaderProps {
	handleReset: () => void
}

export const Header = memo(({ handleReset }: IHeaderProps) => {
   console.log(123)
	return (
		<div className={styles.header}>
			<div className={styles.logo} onClick={handleReset}>
				devfinder
			</div>
			<ThemeSwitcher />
		</div>
	)
})
