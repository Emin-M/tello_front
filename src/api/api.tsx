import axios from "axios";

const token = localStorage.getItem("jwt");
export default axios.create({
  baseURL: "https://tello-back-4q57qwduw-emin-m.vercel.app/api/v1/",
  headers: {
    authorization: token ? "Bearer " + token : "",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
