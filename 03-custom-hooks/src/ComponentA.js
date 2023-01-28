import React from "react";
import useNumber from "./hooks/useNumber";

export default function ComponentA() {
	const number = useNumber();
	console.log(number, "Component A");
	return <></>;
}
