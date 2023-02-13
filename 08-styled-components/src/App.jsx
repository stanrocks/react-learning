// https://youtu.be/m9WOAX1HOdg
// https://styled-components.com/docs
import styled from "styled-components";

export default function App() {
	return (
		<>
			<StyledButton danger>I want this to be red</StyledButton>
			<StyledLargeButton>Large button</StyledLargeButton>
		</>
	);
}

// basic use (color white)
// conditional styles (background color depends on passed property)
// hover
// and media-query:
const StyledButton = styled.button`
	color: white;

	background-color: ${(props) => (props.danger ? "red" : "green")};

	&:hover {
		background-color: orange;
	}

	@media (max-width: 500px) {
		background-color: blue;
	}
`;

// extend existing style:
const StyledLargeButton = styled(StyledButton)`
	padding: 1em;
`;
