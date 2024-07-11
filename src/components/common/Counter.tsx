import {
  type Component,
  createSignal,
  type JSX,
} from 'solid-js';

interface Props {
    initValue: number
    children?: JSX.Element
}

export const Counter: Component<Props> = (props) => {

    const [counter, setCounter] = createSignal(props.initValue)

    return (


        <>

        
            {props.children}

            <h3 class='text-center text-2xl font-semibold'>Value: {counter()}</h3>

            <button
                onclick={() => setCounter(counter() + 1)}
                class='btn btn-secondary m-2'>+1</button>
            <button
                onclick={() => setCounter(counter() - 1)}
                class='btn btn-secondary m-2'>-1</button>
        </>
    );
};
