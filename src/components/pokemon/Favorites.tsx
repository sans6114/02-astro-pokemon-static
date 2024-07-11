import {
  type Component,
  createSignal,
  For,
  type JSX,
} from 'solid-js';

import { type PokemonFavorite } from '../../interfaces/favorite-pokemon';

const getLocalStoragePokemon = (): PokemonFavorite[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
    );

    return favoritePokemons
}

interface Props {

    children?: JSX.Element
}

export const favoritePokemon: Component<Props> = (props) => {


    const [PokemonsFavorite, setPokemons] = createSignal(getLocalStoragePokemon())



    return (
        <>

            {props.children}
            <div class='grid gird-cols-1 sm:grid-cols-4'>
                <For each={PokemonsFavorite()}>{(Pokemon) => <h2>{Pokemon.name}</h2>}</For>
            </div>
        </>
    );
}