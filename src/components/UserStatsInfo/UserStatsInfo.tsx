import { ILocalUser } from "../../types"
import styles from "./UserStatsInfo.module.scss"

interface UserStatsInfoProps extends Pick<ILocalUser, "name"> {
	section: string
	quantity: number
}

export const UserStatsInfo = ({ name, section, quantity }: UserStatsInfoProps) => {
	const reqSection = section.toLowerCase()
	return (
		<div className={styles.info}>
			<div className={styles.infoTitle}>
				<a href={`https://github.com/${name}?tab=${reqSection === "repos" ? "repositories" : reqSection}`} target="_blank" rel="noreferrer">
					{section}
				</a>
			</div>
			<div className={styles.infoNumber}>{quantity}</div>
		</div>
	)
}
