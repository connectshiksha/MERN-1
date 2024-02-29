import { useState } from "react"


const Todo = () => {

    const [todoList, setTodoList] = useState([])
    const [itemState, setItemState] = useState(null)
    console.log("itemstate", itemState)

    const handleAddItem = () => {
        setTodoList([...todoList, itemState])
    }
    console.log("todolist", todoList)
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }} > Todo Application </h1>
                <div >
                    <label> Add Task Here </label>
                    <input type="text" onChange={(e) => setItemState(e.target.value)} />
                    <button onClick={() => handleAddItem()} > Add Todo</button>
                </div>

                <div>
                    <h1> List of Todo's </h1>
                    {
                        todoList.map((item, index) => {
                            return (
                                <>
                                    <div key={index}>

                                        Item  : {item}
                                        <button style={{marginLeft:"10px"}} > Delete Item</button> 
                                    </div>

                                </>
                            )
                        })
                    }
                </div>


            </div>
        </>
    )
}
export default Todo