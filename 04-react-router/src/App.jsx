// https://www.youtube.com/watch?v=yKPP4sFFhwM&list=PLG-Mk4wQm9_KpnKa5_oPKEgg1V5j9vGFC&index=14
// but lots of changes since react-router-dom v6.
// Here are a summary of changes needed for people using react-router-dom V6:
// - Switch is now called Routes
// - Redirect is now called Navigate
// - The Route elements MUST be inside of a Routes element (can't have them directly under Router)
// - The "exact" property of the Route element is no longer required or supported. Paths are exact by default and you need to use * wildcards if you want the old behavior.
// - The "component" property on Route is now called "element".
// - The "element" property is required on Route.
// - The syntax for redirecting is completely changed, and looks like this now: <Route path="*" element={<Navigate to="/login" />} />

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";

function App() {
	return (
		<>
			<Router>
				{/* AppHeader is always showed */}
				<AppHeader />

				{/* "Routes" is like switch in JS */}
				<Routes>
					{/* When path is login - show Login component */}
					<Route
						path="/login"
						element={<Login />}
					/>
					{/* When path is login/admin - show Login-admin component */}
					<Route
						path="/login/admin"
						element={<LoginAdmin />}
					/>
					{/* When path is dashboard - show Dashboard component */}
					<Route
						path="/dashboard"
						element={<Dashboard />}
					/>
					{/* In any other case - redirect to login page: */}
					<Route
						path="*"
						element={<Navigate to="/login" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
