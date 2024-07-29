import { apiKey, apiUrl } from '@/config'

export const useApiUrl = () => {
  return apiUrl + apiKey
}
