import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { Search } from "./components/Search"
import { UserCard } from "./components/UserCard"

import { defaultUser } from "./mock"

function App() {
	return (
		<Container>
			<Header />
			<Search
				hasError={false}
				onSubmit={() => {
					return
				}}
			/>
			<UserCard {...defaultUser} />
		</Container>
	)
}

export default App
