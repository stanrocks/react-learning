// https://youtu.be/YiXyiBl57q8
// import "./App.scss";
// with CSS modules use this:
import styles from "./App.module.scss";
import HeaderComponent from "./HeaderComponent";

function App() {
	const headerText = "This is a header";
	return (
		<>
			{/* Conditional styling: apply "header" as a class name if lengthy */}
			<h1 className={headerText.length > 5 ? styles.header : null}>
				{headerText}
			</h1>

			<HeaderComponent />
		</>
	);
}

export default App;
