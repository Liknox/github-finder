import { ThemeSwitcher } from "../ThemeSwitcher"
import styles from "./Header.module.scss"

interface IHeaderProps {
	handleReset: () => void
}

export const Header = ({ handleReset }: IHeaderProps) => {
	return (
		<div className={styles.header}>
			<div className={styles.logo} onClick={handleReset}>
				devfinder
			</div>
			<ThemeSwitcher />
		</div>
	)
}
