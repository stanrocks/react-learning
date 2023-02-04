import { useState } from "react";
import CalculationOverview from "./components/CalculationOverview";
import Input from "./components/Input";
import MultipliedByTwo from "./components/MultipliedByTwo";
import MultipliedCalculations from "./components/MultipliedCalculations";
import { InputValueProvider } from "./context/inputValueContext";

export default function App() {
	return (
		<>
			<h1>Multiplied by two App</h1>
			<InputValueProvider>
				<Input />

				<CalculationOverview />
			</InputValueProvider>
		</>
	);
}
