export const useApiUrl = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const apiUrl = import.meta.env.VITE_API_URL + apiKey
  return apiUrl
}
