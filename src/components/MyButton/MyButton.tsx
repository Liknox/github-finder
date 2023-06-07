import styles from "./MyButton.module.scss"

interface MyButtonProps {
	children: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MyButton = ({ children, onClick }: MyButtonProps) => {
	return (
		<button className={styles.myButton} onClick={onClick}>
			{children}
		</button>
	)
}
