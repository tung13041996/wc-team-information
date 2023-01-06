import axios from "axios";

const apiClient = axios.create({
  baseUrl: "https://my-json-server.typicode.com/tung13041996/api-test",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getTeams(id) {
    const url = id === undefined
        ? "https://my-json-server.typicode.com/tung13041996/api-test/country"
        : "https://my-json-server.typicode.com/tung13041996/api-test/country/" + id;
    return apiClient.get(url);
  }
};
