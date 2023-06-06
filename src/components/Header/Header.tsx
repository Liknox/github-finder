import styles from "./Header.module.scss"

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
	return <div className={styles.header}>Header Component</div>
}
