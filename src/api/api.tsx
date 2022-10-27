import axios from "axios";

const token = localStorage.getItem("jwt");
export default axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  headers: {
    authorization: token ? "Bearer " + token : "",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
