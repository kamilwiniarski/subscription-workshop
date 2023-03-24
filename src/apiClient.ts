import axios from "axios"

export const apiClient = (() => {
  const axiosInstance = axios.create({
    headers: { Accept: "application/json" },
    baseURL: "http://localhost:3000/subscriptions",
  })
  return axiosInstance
})()
