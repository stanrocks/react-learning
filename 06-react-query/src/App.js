// https://tanstack.com/query/latest/docs/react/overview
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<p>random</p>
			</QueryClientProvider>
		</>
	);
}

export default App;
