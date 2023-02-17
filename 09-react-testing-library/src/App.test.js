import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("if $500 is sent, the account balance is updated", async () => {
	render(<App />);

	// grab something from screen we can use getBy
	userEvent.type(
		screen.getByRole("spinbutton", { name: /transfer amount/i }),
		"500"
	);
	userEvent.click(screen.getByRole("button", { name: /send/i }));

	// example how to check if something occurs over the limit of 1000 ms (within 3000 ms in this example)
	// expect(
	// 	await screen.findByText(
	// 		/current account balance: 4500/i,
	// 		{},
	// 		{ timeout: 3000 }
	// 	)
	// ).toBeInTheDocument();

	// how to find something in future (expected to arrive in 1000 ms)
	expect(
		await screen.findByText(/current account balance: 4500/i)
	).toBeInTheDocument();

	// how to query for things that should not be on a page (using queryByText, no await is necessary):
	expect(
		screen.queryByText(/current account balance: 5000/i)
	).not.toBeInTheDocument();
});