import { ILocalUser } from "../../types"
import { UserInfo } from "../UserInfo"
import { UserStats } from "../UserStats"
import { UserTitle } from "../UserTitle"

import styles from "./UserCard.module.scss"

type UserCardPropsType = ILocalUser

export const UserCard = (props: UserCardPropsType) => {
	return (
		<div className={styles.userCard}>
			<img src={props.avatar} alt={props.name} className={styles.avatar} />
			<UserTitle name={props.name} login={props.login} created={props.created} url={props.url} />
			<p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>{props.bio || "This profile has no bio."}</p>
			<UserStats repos={props.repos} followers={props.followers} following={props.following} name={props.login} />
			<UserInfo blog={props.blog} company={props.company} location={props.location} twitter={props.twitter} />
		</div>
	)
}
