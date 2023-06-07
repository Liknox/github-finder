import styles from "./UserCard.module.scss"

interface UserCardProps {}

export const UserCard = ({}: UserCardProps) => {
	return <div className={styles.userCard}>UserCard Component</div>
}
