import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = (userId) =>
	axios
		.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
		.then((response) => response.data);

export default function useUser(userId) {
	return useQuery(["users", userId], () => fetchUser(userId)); // when passing something to fetching function - gotta call it inside arrow function
}
