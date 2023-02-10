// react-query set data, based on: https://youtu.be/MBEf1jOA8nY
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const createUser = (user) =>
	axios
		.post("https://jsonplaceholder.typicode.com/users", user)
		.then((response) => response.data);

export default function useCreateUser(user) {
	const queryClient = useQueryClient();

	// https://tanstack.com/query/v4/docs/react/guides/query-invalidation
	return useMutation((user) => createUser(user), {
		onSuccess: () => queryClient.invalidateQueries("users"),
	});
}
