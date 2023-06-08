import { IUser, ILocalUser } from "../types"

export const extractLocalUser = (user: IUser): ILocalUser => ({
	login: user.login,
	avatar: user.avatar_url,
	url: user.html_url,
	name: user.name,
	bio: user.bio,
	blog: user.blog,
	company: user.company,
	created: user.created_at,
	followers: user.followers,
	following: user.following,
	location: user.location,
	repos: user.public_repos,
	twitter: user.twitter_username,
})
