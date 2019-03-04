import axios from "axios"
import { baseURL } from "../constants"

export default axios.create({
  baseURL,
  headers: {
    common: {
      "Content-Type": "application/json"
    }
  }
})
