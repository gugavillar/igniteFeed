import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_APITOKEN}`
  },
  cache: new InMemoryCache()
})
