import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { Search } from "./components/Search"
import { UserCard } from "./components/UserCard"

import useUserData from "./hooks/useUserData"

function App() {
	const { user, fetchUser, resetUser } = useUserData()

	return (
		<Container>
			<Header handleReset={resetUser} />
			<Search hasError={user === null ? true : false} onSubmit={fetchUser} />
			{user && <UserCard {...user} />}
		</Container>
	)
}

export default App
