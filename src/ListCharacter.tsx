import { Episode, Character } from './SelectCharacter'
import './App.css';

type Props = {
    episode: Episode;
}

function ListCharacter(props: Props) {
    return (
        <div className="container">
            <div className="row liste">
                {props?.episode?.characters?.map((character: Character, index: number) => {
                    return (<div className="cardcharacter" key={index}>
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
    );
}
export { ListCharacter }