import { useState } from "react"
import SettingsBackupRestoreSharpIcon from '@material-ui/icons/SettingsBackupRestoreSharp';


const App = () =>{

    const [counter, setCounter] = useState(0);
    const [increment, setIncrement] = useState(1);

    const add = () => {
        setCounter(counter + increment)
    }

    const subtract = () => {
        setCounter(counter - increment)
    }

    const reset = () => {
        setCounter(0)
    }

    const addInc = () => {
        setIncrement(increment + 1)
    }

    const subtractInc = () => {
        setIncrement(increment - 1)
    }

    const resetInc = () => {
        setIncrement(1)
    }

    return(
        <main>
            <article>
                <h1>COUNTER</h1>
                <h2>{counter}</h2>
                <section className="buttons">
                    <button onClick={add}>+</button>
                    <button onClick={subtract}>-</button>
                    <button onClick={reset}><SettingsBackupRestoreSharpIcon/></button>
                </section>
            </article>
            <article>
                <h1>INCREMENT</h1>
                <h2>{increment}</h2>
                <section className="buttons">
                    <button onClick={addInc}>+</button>
                    <button onClick={subtractInc}>-</button>
                    <button onClick={resetInc}><SettingsBackupRestoreSharpIcon/></button>
                </section>
            </article>
        </main>
    )
}

export default App