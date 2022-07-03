import axios from "axios";

export default axios.create({
  baseURL: "https://api.chec.io/v1/",
  headers: {
    "X-Authorization": "pk_44605cc72fc1a90143a621f80945d43cc55ed3f3e9868",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
