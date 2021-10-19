import { useState } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS_RICKMORTY } from './gqlClient'


type Character = {
    id: number;
    name: string;
    species: string;
    image: string;
}

type Episode = {
    id: number;
    name: string;
    species: string;
    image: string;
}

function SelectCharacter() {
    function GetCharac() {
        const { loading, error, data } = useQuery(CHARACTERS_RICKMORTY);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error : (</p>;
        console.log(data);
    }
    const [character, setCharacter] = useState<Character | null>(null);
    function selectEpisode(selectedEpisode: Episode) {
        let value = selectedEpisode;
        console.log(value);
        setCharacter(data.episodes.results.find(x => x.id === value));
        console.log(value);
    }
    return (
        <div className="SelectCharac">
            <select>
                {data.episodes?.results?.map((charac, index) => {
                    return (<option value={charac.id} key={index} >{index} - {charac.name}</option>)
                })
                }
            </select>
        </div>
    );
}
export { SelectCharacter }