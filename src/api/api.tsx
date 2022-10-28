import axios from "axios";

const token = localStorage.getItem("jwt");
export default axios.create({
  baseURL: "https://rocky-cove-19186.herokuapp.com/api/v1/",
  headers: {
    authorization: token ? "Bearer " + token : "",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
