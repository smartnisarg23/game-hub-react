import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f707dd90e0894be6b65b4b10a435daf2",
  },
});
