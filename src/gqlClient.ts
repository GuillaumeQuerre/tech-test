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
        name
        air_date
        episode
        characters {
          image
          name
          species
        }
        created
    }
  }
}
`;

export { client };
export { CHARACTERS_RICKMORTY };