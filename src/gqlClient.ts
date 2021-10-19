import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: ' https://rickandmortyapi.com/graphql ',
  cache: new InMemoryCache()
});

const CHARACTERS_RICKMORTY = gql`
query {
  episodes {
    info {
      count
    }
    results {
        id
        name
        episode
        characters {
          image
          name
          species
        }
        created
    }
  }
  characters {
    info {
      count
    }
    results {
      id
      name
      species
      image
    }
  }
}
`;

export { client };
export { CHARACTERS_RICKMORTY };