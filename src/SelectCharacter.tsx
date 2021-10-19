import { useState } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS_RICKMORTY } from './gqlClient'

type Episodes = {
    info: Info;
    results: Episode[];
}

type Info = {
    count: number;
    pages: number;
    next: number;
    prev: number;

}
type Character = {
    id: number;
    name: string;
    species: string;
    image: string;
}

type Episode = {
    id: number;
    episode: string;
    name: string;
    characters: Character[];
}

function SelectCharacter() {
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(CHARACTERS_RICKMORTY, {
        variables: { page: page }
    });
    const [episode, setEpisode] = useState<Episode | null>(null);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : (</p>;
    console.log(episode)
    function selectEpisode(selectedEpisode: any) {
        let value = selectedEpisode;
        console.log(value);
        setEpisode(data.episodes.results.find((x: Episode) => x.id === value));
        console.log(value);
    }
    return (
        <main>
            <div className="SelectCharac">
                <select onChange={(event) => selectEpisode(event.currentTarget.value)}>
                    {data.episodes?.results?.map((episode: Episode, index: number) => {
                        return (<option value={episode.id} key={index}>{episode.episode} - {episode.name}</option>)
                    })
                    }
                </select>
                <div className="pagination">
                    <button disabled={!data.episodes.info.prev} onClick={() => setPage(data.episodes.info.prev)}>Previous</button>
                    <span>Page n°{page}</span>
                    <button disabled={!data.episodes.info.next} onClick={() => setPage(data.episodes.info.next)}>Next</button>
                </div>
            </div>
            <div className="container">
                <div className="row liste">
                    {/* listing des pays du continent -  1 li par pays*/}
                    {episode?.characters?.map((character: Character, index: number) => {
                        return (<div className="col-12 col-sm-5 col-lg-3 cardcharacter" key={index}>
                            <div className="containerImage">
                                <img className="imagecharacter" src={character.image} />
                            </div>
                            <div className="infocard">
                                <span>Identité: {character.name}</span>
                                <span>Espèce: {character.species}</span>
                            </div>
                        </div>
                        );
                    })
                    }
                </div>
            </div>
        </main>

    );
}
export { SelectCharacter };