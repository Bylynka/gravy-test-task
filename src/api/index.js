import apiClient from "./api-client"

export const getArticles = () => apiClient.get(`/posts`)
