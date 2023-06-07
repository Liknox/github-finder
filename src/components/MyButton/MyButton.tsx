import styles from "./MyButton.module.scss"

interface IMyButtonProps {
	children: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MyButton = ({ children, onClick }: IMyButtonProps) => {
	return (
		<button className={styles.myButton} onClick={onClick}>
			{children}
		</button>
	)
}
