import { ILocalUser } from "../../types"
import styles from "./UserStatsInfo.module.scss"

interface UserStatsInfoProps extends Pick<ILocalUser, "name"> {
	section: string
	quantity: number
}

export const UserStatsInfo = ({ name, section, quantity }: UserStatsInfoProps) => {
	return (
		<div className={styles.info}>
			<div className={styles.infoTitle}>{section}</div>
			<div className={styles.infoNumber}>{quantity}</div>
		</div>
	)
}
