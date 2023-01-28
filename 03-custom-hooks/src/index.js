import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<ComponentA />
		<ComponentB />
	</React.StrictMode>
);
