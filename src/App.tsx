import { useState } from "react"

import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { Search } from "./components/Search"
import { UserCard } from "./components/UserCard"

import { defaultUser } from "./mock"
import { isGithubUser } from "./utils/typeGuards"
import { extractLocalUser } from "./utils/extractLocalUser"
import { IGithubError, ILocalUser, IUser } from "./types"

const BASE_URL = "https://api.github.com/users/"

function App() {
	const initialUser: ILocalUser = (getItemFromLocalStorage("user") as ILocalUser) || defaultUser
	const [user, setUser] = useState<ILocalUser | null>(initialUser)

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username
		const res = await fetch(url)
		const user = (await res.json()) as IUser | IGithubError

		if (isGithubUser(user)) {
			setUser(extractLocalUser(user))
			localStorage.setItem("user", JSON.stringify(extractLocalUser(user)))
		} else {
			setUser(null)
		}
	}

	function getItemFromLocalStorage(key: string): unknown {
		const item = localStorage.getItem(key)
		if (item) {
			try {
				return JSON.parse(item)
			} catch (error) {
				console.error(`Error parsing item from LocalStorage: ${error}`)
			}
		}
		return null
	}

	const handleReset = () => {
		setUser(defaultUser)
		localStorage.removeItem("user")
	}

	return (
		<Container>
			<Header handleReset={handleReset} />
			<Search hasError={user === null ? true : false} onSubmit={fetchUser} />
			{user && <UserCard {...user} />}
		</Container>
	)
}

export default App
