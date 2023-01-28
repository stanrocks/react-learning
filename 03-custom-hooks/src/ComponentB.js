import React from "react";
import useIsMobile from "./hooks/useIsMobile";
import useNumber from "./hooks/useNumber";

export default function ComponentB() {
	const number = useNumber();
	console.log(number, "Component B");

	const isMobile = useIsMobile();

	console.log(isMobile);
	return <></>;
}
