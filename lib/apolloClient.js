// lib/apolloClient.js

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({

  ssrMode: typeof window === 'undefined', // Enable SSR mode for server-side rendering
  
  link: new HttpLink({

    uri: 'https://wordpress-1302563-4970911.cloudwaysapps.com/graphql', // GraphQL endpoint

  }),

  cache: new InMemoryCache(),

});

export default client;
