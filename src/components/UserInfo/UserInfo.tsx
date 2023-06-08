import CompanyIcon from "../../assets/icon-company.svg"
import LocationIcon from "../../assets/icon-location.svg"
import TwitterIcon from "../../assets/icon-twitter.svg"
import BlogIcon from "../../assets/icon-website.svg"

import { ILocalUser } from "../../types"
import { IInfoItemProps, InfoItem } from "../InfoItem"

import styles from "./UserInfo.module.scss"

type UserInfoPropsType = Pick<ILocalUser, "blog" | "company" | "location" | "twitter">

export const UserInfo = ({ blog, company, location, twitter }: UserInfoPropsType) => {
	const items: IInfoItemProps[] = [
		{ icon: <LocationIcon />, text: location },
		{ icon: <BlogIcon />, text: blog, isLink: true },
		{ icon: <TwitterIcon />, text: twitter },
		{ icon: <CompanyIcon />, text: company },
	]

	return (
		<div className={styles.userInfo}>
			{items.map((item, index) => (
				<InfoItem {...item} key={index} />
			))}
		</div>
	)
}
