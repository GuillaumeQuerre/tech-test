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
}

function SelectCharacter() {
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(CHARACTERS_RICKMORTY);
    const [character, setCharacter] = useState<Character | null>(null);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : (</p>;
    console.log(data);

    function selectEpisode(selectedEpisode: any) {
        let value = selectedEpisode;
        console.log(value);
        setCharacter(data.episodes.results.find((x: Episode) => x.id === value));
        console.log(value);
    }
    return (
        <div className="SelectCharac">
            <select onChange={(event) => selectEpisode(event.currentTarget.value)}>
                {data.episodes?.results?.map((episode: Episode, index: number) => {
                    return (<option value={episode.id} key={index}>{episode.episode} - {episode.name}</option>)
                })
                }
            </select>
        </div>

    );
}
export { SelectCharacter }