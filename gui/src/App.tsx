
import React from 'react'
import NodeList from './NodeList'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <div>
        <NodeList></NodeList>
      </div>
    </ApolloProvider>
  )
}

export default App
