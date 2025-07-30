import styles from "./app.module.css"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"

export function App() {

    function handleRestartGame() {
        alert("Reiniciar o jogo")
    }

    return (
        <div className={styles.container}>
            <main>
                <Header current={2} max={10} onRestart={handleRestartGame} />
                
                <Tip tip="Uma das linguagens de programação mais utilizadas" />
            </main>
        </div>
    )
}