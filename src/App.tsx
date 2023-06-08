import { useState } from "react"
import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { Search } from "./components/Search"
import { UserCard } from "./components/UserCard"
import { defaultUser } from "./mock"
import { IGithubError, ILocalUser, IUser } from "./types"

const BASE_URL = "https://api.github.com/users/"

function App() {
	const [user, setUser] = useState<ILocalUser | null>(defaultUser)

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username
		const res = await fetch(url)
		const user = (await res.json()) as IUser | IGithubError

      
      
	}

	return (
		<Container>
			<Header />
			<Search hasError={!user} onSubmit={fetchUser} />
			{user && <UserCard {...defaultUser} />}
		</Container>
	)
}

export default App
