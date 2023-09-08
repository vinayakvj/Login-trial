import axios from "axios";

const user = axios.create({
    baseURL: "https://64f84206824680fd217f51a7.mockapi.io/",
    header: {
      authorname: "vinayak"
    }
  });

  export default user;
