import axios from "axios";

export default axios.create({
  baseURL: 'http://161.35.56.100:3003',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});