export interface ILocalUser {
	login: string
	avatar: string
	name: string
	company: string | null
	blog: string | null
	location: string | null
	bio: string | null
	twitter: string | null
	repos: number
	followers: number
	following: number
	created: string
}

export interface IUser {
	login: string
	id: number
	avatar_url: string
	name: string
	company: string | null
	blog: string | null
	location: string | null
	bio: string | null
	twitter_username: string | null
	public_repos: number
	followers: number
	following: number
	created_at: string
}

export interface IGithubError {
	message: string
	documentation_url: string
}
