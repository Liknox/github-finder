import { useState } from "react"
import { IGithubError, ILocalUser, IUser } from "../types"
import { getParsedItemFromLocalStorage } from "../utils/getParsedItemFromLocalStore"
import { BASE_URL } from "../api"
import { isGithubUser } from "../utils/typeGuards"
import { extractLocalUser } from "../utils/extractLocalUser"
import { defaultUser } from "../mock"

function useUserData() {
	const initialUser: ILocalUser = (getParsedItemFromLocalStorage("user") as ILocalUser) || defaultUser
	const [user, setUser] = useState<ILocalUser | null>(initialUser)

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username

		try {const res = await fetch(url)
		const user = (await res.json()) as IUser | IGithubError

		if (isGithubUser(user)) {
			setUser(extractLocalUser(user))
			localStorage.setItem("user", JSON.stringify(extractLocalUser(user)))
		} else {
			setUser(null)
		}} catch (err) {
         console.error("Error fetching user data: ", err)
      }
	}

	const resetUser = () => {
		fetchUser("Liknox")
		localStorage.removeItem("user")
	}

   return {user, fetchUser, resetUser}
}

export default useUserData
