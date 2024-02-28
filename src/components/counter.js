
import { useState ,useEffect } from 'react';

const Counter = () => {

    const [stateAbc, setStateAbc] = useState(0);

    const [message, setMessage] = useState(null);




    const handleIncrese = () => {
     
        if (stateAbc < 10) {
            setStateAbc(stateAbc + 1);
        }
    }

    const checkLuckyNumber=()=>{
        if (stateAbc == 5) {
            setMessage("Congrats ! You have encountered Lucky number !!........")
        } else{
            setMessage("Bad Luck !........")

        }
    }
    const handleDecrease = () => {
        if (stateAbc > 0) {
            setStateAbc(stateAbc - 1)

        }
    }

    useEffect(()=>{
        
        console.log("useEffect hook is working ") 

    },[])
    return (
        <>
            <div >
                <h1 style={{ textAlign: "center", color: "blue" }}> This  is Counter Application </h1>
                <h3 style={{ textAlign: "center" }}> count : {stateAbc} </h3>
                <button style={{ marginLeft: "40%" }} onClick={() => handleIncrese()} > Increase Count + </button>
                <button style={{ marginLeft: "10%" }} onClick={() => handleDecrease()} >  Decrese Count -  </button>

                {
                    stateAbc == 10 ? <h3 style={{ color: "red", textAlign: "center" }} >
                        You have reached the maximum count that is {stateAbc} .
                    </h3> : <h3 style={{ color: "green", textAlign: "center" }} > you have not reached the maximum count  </h3>
                }
                <button style={{ marginLeft: "40%" }} onClick={()=> checkLuckyNumber()} > Check Luck</button>
                <h3 style={{ color: "green", textAlign: "center" }}>
                    {message ?
                        <>{message} </> : ""
                    }
                </h3>
            </div>
        </>
    )
}

export default Counter 