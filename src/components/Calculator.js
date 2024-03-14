
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "./GlobalStates/globalState"


const Cal = () => {
    const state = useSelector((state) => state.globalState.value);
    const dispatch = useDispatch()
    const handleIncrementClick =()=>{
        console.log("increment",increment)
        dispatch(increment())
    }
    const handleDecrementClick =()=>{
        dispatch(decrement())

    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>
                    Test App
                </h1>
                My Global State {state}
                <div>

                    <button onClick={()=>handleIncrementClick()} >
                        + 5
                    </button>
                    <button onClick={()=>handleDecrementClick()}>
                        - 5
                    </button>
                </div>

            </div>
        </>
    )
}

export default Cal