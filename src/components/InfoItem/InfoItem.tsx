import styles from "./InfoItem.module.scss"

export interface IInfoItemProps {
	icon: React.ReactNode
	text?: string | null
	isLink?: boolean
	twit?: boolean
}

export const InfoItem = ({ icon, text, isLink, twit }: IInfoItemProps) => {
	const currentText = text || "Not Available"
	let currentHref = ""

	if (isLink) {
		currentHref = text && text.startsWith("http") ? text : `https://${text}`
	} else if (twit) {
		currentHref = `https://twitter.com/${text}`
	}

	return (
		<div className={`${styles.infoItem}${text ? "" : ` ${styles.empty}`}`}>
			{icon}
			<div>
				{(isLink && text) || (twit && text) ? (
					<a href={currentHref} target="_blank" rel="noreferrer" className={styles.link}>
						{currentText}
					</a>
				) : (
					currentText
				)}
			</div>
		</div>
	)
}
