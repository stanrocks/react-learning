// https://tanstack.com/query/latest/docs/react/overview
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/Dashboard";

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Dashboard />
			</QueryClientProvider>
		</>
	);
}

export default App;
