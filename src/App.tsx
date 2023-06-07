import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { Search } from "./components/Search"

function App() {
	return (
		<Container>
			<Header />
			<Search
				hasError
				onSubmit={e => {
					console.log(e)
				}}
			/>
		</Container>
	)
}

export default App
