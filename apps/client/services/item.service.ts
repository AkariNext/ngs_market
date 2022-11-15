import { api } from "../utils/api";

export async function fetchItems(type: string) {
  const res = await api.call('GET', '/api/items', { query: { type: type } })
  if (res.type === 'failed') throw new Error(String(res.data))
  return res.data
}
