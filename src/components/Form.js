
// import { useState } from 'react'
// import '../css/form.css'
// const Form = () => {

//     const [nameState, setNameState] = useState()
//     const [emailState, setEmailState] = useState()
//     const [addressState, setAddressState] = useState()
//     const [phoneState, setPhoneState] = useState()
//     const [isRender, setIsRender] = useState(false)

//     const handleSubmit = () => {
//         // console.log("nameState", nameState)
//         // console.log("emailState", emailState)
//         // console.log("addressState", addressState)
//         // console.log("phoneState", phoneState)

//         setIsRender(true) ;
//     }

//     return (
//         <>
//             <div className='form-container' >
//                 <h1> My Form  </h1>
//                 <div className='input-field' >
//                     <label> Name  </label>
//                     <input type="text" onChange={(e) => setNameState(e.target.value)} value={nameState} />
//                 </div>
//                 <div className='input-field'>
//                     <label> Email </label>
//                     <input type='email' onChange={(e) => setEmailState(e.target.value)} value={emailState} />
//                 </div>
//                 <div className='input-field'>
//                     <label> Address </label>
//                     <input type="text" onChange={(e) => setAddressState(e.target.value)} value={addressState} />
//                 </div>
//                 <div className='input-field'>
//                     <label> Phone Number </label>
//                     <input type="number" onChange={(e) => setPhoneState(e.target.value)} value={phoneState} />
//                 </div>
//                 <button className='submit-btn' onClick={() => handleSubmit()} > Submit  </button>
//             </div>
//             {
//                 isRender ? <div className='form-container'  >
//                     <div> User Name : {nameState} </div>
//                     <div> User Email : {emailState} </div>
//                     <div> User Address : {addressState} </div>
//                     <div> User phone Number : {phoneState} </div>
//                 </div> : ""
//             }

//         </>
//     )
// }

// export default Form



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Card ,Modal} from 'react-bootstrap';

function Form2() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Card style={{ margin: "1rem" }}>


            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ margin: "1rem" }}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}

export default Form2;