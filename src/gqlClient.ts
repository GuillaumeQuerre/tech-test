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
query EpisodesByPage($page: Int) {
  episodes(page: $page) {
    info {
      count
      pages
      prev
      next
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