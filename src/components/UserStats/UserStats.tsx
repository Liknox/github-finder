import { ILocalUser } from "../../types"
import styles from "./UserStats.module.scss"

export type UserStatsProps = Pick<ILocalUser, "followers" | "following" | "repos">

export const UserStats = ({ repos, following, followers }: UserStatsProps) => {
	return (
		<div className={styles.userStat}>
			<div className={styles.info}>
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
			</div>
		</div>
	)
}
