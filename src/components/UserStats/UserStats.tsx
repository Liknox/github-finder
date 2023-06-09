import { ILocalUser } from "../../types"
import { UserStatsInfo } from "../UserStatsInfo"
import styles from "./UserStats.module.scss"

export type UserStatsPropsType = Pick<ILocalUser, "followers" | "following" | "repos" | "name">

interface IStats {
	title: string
	quantity: number
}

export const UserStats = ({ repos, following, followers, name }: UserStatsPropsType) => {
	const stats: IStats[] = [
		{ title: "Repos", quantity: repos },
		{ title: "Followers", quantity: following },
		{ title: "Following", quantity: followers },
	]

	return (
		<div className={styles.userStats}>
			{stats.map((el, i) => (
				<UserStatsInfo section={el.title} quantity={el.quantity} name={name} key={i} />
			))}
			{/* <div className={styles.info}>
				<div className={styles.infoTitle}>Repos</div>
				<div className={styles.infoNumber}>{repos}</div>
			</div>
			<div className={styles.info}>
				<div className={styles.infoTitle}>Followers</div>
				<div className={styles.infoNumber}>{followers}</div>
			</div>
			<div className={styles.info}>
				<div className={styles.infoTitle}>Following</div>
				<div className={styles.infoNumber}>{following}</div>
			</div> */}
		</div>
	)
}
