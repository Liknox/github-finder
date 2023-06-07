import { ILocalUser } from "../../types"
import { UserStats } from "../UserStats"

import styles from "./UserCard.module.scss"

type UserCardProps = ILocalUser

export const UserCard = (props: UserCardProps) => {
	return (
		<div className={styles.userCard}>
			<UserStats repos={props.repos} followers={props.followers} following={props.following} />
		</div>
	)
}
