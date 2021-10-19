import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS_RICKMORTY } from './gqlClient'
import { ListCharacter } from './ListCharacter'
import './App.css';

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
export type Character = {
    id: number;
    name: string;
    species: string;
    image: string;
}

export type Episode = {
    id: number;
    episode: string;
    name: string;
    characters: Character[];
}

export function SelectCharacter() {
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(CHARACTERS_RICKMORTY, {
        variables: { page: page }
    });
    const [episode, setEpisode] = useState<Episode | null>(null);
    useEffect(() => {
        if (data) {
            setEpisode(data.episodes.results[0]);
        }
    }, [data])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : (</ p>;
    function selectEpisode(selectedEpisode: string) {
        let value = selectedEpisode;
        setEpisode(data.episodes.results.find((x: Episode) => x.name === value));
    }
    function loadPrev() {
        setPage(data.episodes.info.prev);
    }
    function loadNext() {
        setPage(data.episodes.info.next);
    }
    return (
        <main>
            <div className="SelectCharac">
                <select onChange={(event) => selectEpisode(event.currentTarget.value)}>
                    {data.episodes?.results?.map((episode: Episode, index: number) => {
                        return (<option value={episode.name} key={index}>{episode.episode} - {episode.name}</option>)
                    })
                    }
                </select>
                <div className="pagination">
                    <button disabled={!data.episodes.info.prev} onClick={() => loadPrev()}>Previous</button>
                    <span>Page n°{page}</span>
                    <button disabled={!data.episodes.info.next} onClick={() => loadNext()}>Next</button>
                </div>
            </div>
            {episode && <ListCharacter episode={episode} />}

        </main>

    );
}