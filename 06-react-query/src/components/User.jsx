import React from "react";
import useUser from "../query-hooks/useUser";

export default function User({ selectedUser }) {
	const user = useUser(selectedUser);
	console.log("User ~ user", user);

	return (
		<>
			{user.isLoading && <p>Loading user...</p>}
			{user.isSuccess && (
				<p>{`${user.data.name} - ${user.data.address.street}`}</p>
			)}
		</>
	);
}
