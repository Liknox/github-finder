import { IUser, IGithubError } from "../types"

export const isGithubUser = (user: IUser | IGithubError): user is IUser => "id" in user
