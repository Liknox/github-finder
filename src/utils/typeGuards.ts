import { IUser } from "../types"

export const isGithubUser = (user: any): user is IUser => "id" in user
