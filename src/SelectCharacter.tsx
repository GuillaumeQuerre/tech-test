import { useQuery } from "@apollo/client";
import { CHARACTERS_RICKMORTY } from './gqlClient'

function GetCharac() {
    const { loading, error, data } = useQuery(CHARACTERS_RICKMORTY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : (</p>;
    console.log(data);
}

function SelectCharacter() {
    return (
        <div className="SelectCharac">
            <select>
            </select>
        </div>
    );
}
export { SelectCharacter }