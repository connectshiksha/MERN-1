import { Container, Row, Col, Image, Button } from "react-bootstrap"

import paper from '../images/paper.png'
import scissors from '../images/scissors.png'
import stone from "../images/stone.png"
import { useState } from "react"


const RPSGame = () => {

    const allInput = ["paper", "scissor", "stone"];
    const [userInput, setUserInput] = useState(null);
    const [comInput, setComInput] = useState(null);
    const [result, setResult] = useState(null);


    // handling user click 
    const handleUserClick = (choosedChance) => {
        setUserInput(choosedChance)

    }
    // generating random input from computer

    const generateComputerInput = () => {
        // generating random number 
        const randomInput = Math.floor(Math.random() * (3)) + 0;
        const result = allInput[randomInput];
        setComInput(result)
        return result;  //2

    }

    const handlePlayBtn = () => {
        let comInput = generateComputerInput();

        // you need to build logic according to game rule 
        if (userInput === "stone" && comInput === "scissor" || userInput === "paper" && comInput == "stone" && userInput === "scissor" && comInput === "paper"

        ) {
            setResult("You Won !")
        } else if (userInput === comInput) {
            setResult("Draw !!!")
        }

        else {
            setResult("You Lost !!! ")
        }

    }
    const handleReset=()=>{
        setComInput(null)
        setResult(null)
        setUserInput(null)
    }

    return (
        <>
            <Container style={{ margin: "5rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div>
                    <Image src={paper} alt="paper" fluid onClick={() => handleUserClick("paper")} height={200} width={200} />
                    <Image src={scissors} alt="scissors" onClick={() => handleUserClick("scissor")} fluid height={200} width={200} />
                    <Image src={stone} alt="stone" onClick={() => handleUserClick("stone")} fluid height={200} width={200} />
                </div>

                {userInput ? <Button variant="success" style={{ margin: "1rem" }} onClick={() => handlePlayBtn()} > Play game</Button> : <h1>Please select the image </h1>}
                {
                    result ? <>
                        <div>
                            <h1>
                                Computer Chooses : {comInput}
                            </h1>

                        </div>
                        <h1>
                            {result}
                        </h1>
                        <Button variant="danger" onClick={()=> handleReset()} > Reset </Button>

                    </>
                        : ""
                }
            </Container>

        </>
    )
}

export default RPSGame 