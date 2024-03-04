import { useState } from "react"
import { Button, ListGroup, Card, InputGroup, Form } from 'react-bootstrap';



const Todo = () => {

    const [todoList, setTodoList] = useState([])
    const [itemState, setItemState] = useState(null)
    console.log("itemstate", itemState)

    const handleAddItem = () => {
        if (itemState) {

            setTodoList([...todoList, itemState])
            setItemState("")
        }
    }
    // console.log("todolist", todoList)
    const handleDelete = (index) => {
        const existingList = [...todoList]
        existingList.splice(index, 1);
        setTodoList(existingList);

    }
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }} > Todo Application </h1>
                <div >
                    <label> Add Task Here </label>
                    <InputGroup style={{ width: '30rem' }}>
                        <Form.Control type="text" onChange={(e) => setItemState(e.target.value)} value={itemState} />
                        <button onClick={() => handleAddItem()} > Add Todo</button>
                    </InputGroup>
                </div>

                <div>
                    <Card style={{ width: '30rem' }}>
                        <Card.Title> List of Todo's </Card.Title>

                        {
                            todoList.map((item, index) => {
                                return (
                                    <>
                                        <ListGroup key={index} style={{ margin: "1rem" }}>
                                            <ListGroup.Item>
                                                Item  : {item}
                                                <Button variant="danger" style={{ marginLeft: "10px" }} onClick={() => handleDelete(index)} > Delete Item</Button>
                                            </ListGroup.Item>
                                        </ListGroup >

                                    </>
                                )
                            })
                        }
                    </Card>
                </div>


            </div>
        </>
    )
}
export default Todo