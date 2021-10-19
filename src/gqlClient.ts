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
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;

export { client };
export { CHARACTERS_RICKMORTY };