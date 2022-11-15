import { apiClient } from 'strictcat';

interface Schema {
  resource: {
    "/api/items": {
      GET: {
        query: {
          type: string
        }
        response: {
          id: string
          name: string
          rarity: number
          droparies: { id: string, name: string }[]
        }[]
      }
    }
    "/api/auth/signin": {
      POST: {
        body: {
          username: string,
          password: string
        }
        response: any
      }
    }
  }
}

export const api = apiClient<Schema>('http://localhost:4200', 'application/json')
