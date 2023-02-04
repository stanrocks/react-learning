import React, { useContext } from "react";
import { InputValueContext } from "../context/inputValueContext";

export default function Input() {
	const { dispatch } = useContext(InputValueContext);
	// console.log(dispatch);
	return (
		<>
			<input
				type="number"
				onChange={(e) =>
					dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value })
				}
			/>
		</>
	);
}
