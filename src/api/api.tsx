import axios from "axios";

export default axios.create({
  baseURL: "https://api.chec.io/v1/",
  headers: {
    "X-Authorization": "sk_4460590f5f82fdee4ecc012ff2581d154d70f9c046eb7",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
