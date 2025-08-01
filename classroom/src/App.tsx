import styles from "./app.module.css"

import { useEffect, useState } from "react"
import { WORDS, Challenge } from "./utils/words"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed"

export function App() {


    const [attempts, setAttempts] = useState(0)
    const [letter, setLetter] = useState("")
    const [challenge, setChallenge] = useState<Challenge | null>(null)
    const [lettersUsed, setLetterUsed] = useState<LettersUsedProps[]>([])

    function handleRestartGame() {
        alert("Reiniciar o jogo")
    }

    function startGame() {
        const index = Math.floor(Math.random() * WORDS.length)
        const randomWord = WORDS[index]

        setChallenge(randomWord)

        setAttempts(0)
        setLetter("")
    }

    function handleConfirm () {
        if(!challenge){
            return
        }

        if(!letter.trim()){
            return alert (" Digite uma letra")
        }

        const value = letter.toUpperCase()
        const exists = lettersUsed.find((used) => used.value.toUpperCase() === value)
        
        if(exists){
            alert("Você já utilizou a letra" + value)
        }

        setLetterUsed((prevState) => [...prevState, {value, correct:false}])

        setLetter("")
    }

    useEffect(() => {
        startGame()
    }, [])

    if (!challenge) {
        return
    }


    return (
        <div className={styles.container}>
            <main>
                <Header current={attempts} max={10} onRestart={handleRestartGame} />

                <Tip tip="Uma das linguagens de programação mais utilizadas" />

                <div className={styles.word}>
                    {challenge.word.split("").map(() => (
                        < Letter value="" />
                    ))}



                </div>

                <h4>Palpite</h4>

                <div className={styles.guess}>
                    <Input 
                        autoFocus
                        maxLength={1}
                        placeholder="?"
                        value={letter}
                        onChange={(e) =>setLetter(e.target.value)}
                    />

                    <Button title="Confirmar" onClick={handleConfirm}/>
                </div>

                <LettersUsed data = {lettersUsed}/>
            </main>
        </div>
    )
}