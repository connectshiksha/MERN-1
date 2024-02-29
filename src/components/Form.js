
import { useState } from 'react'
import '../css/form.css'
const Form = () => {

    const [nameState, setNameState] = useState()
    const [emailState, setEmailState] = useState()
    const [addressState, setAddressState] = useState()
    const [phoneState, setPhoneState] = useState()
    const [isRender, setIsRender] = useState(false)

    const handleSubmit = () => {
        // console.log("nameState", nameState)
        // console.log("emailState", emailState)
        // console.log("addressState", addressState)
        // console.log("phoneState", phoneState)

        setIsRender(true) ;
    }

    return (
        <>
            <div className='form-container' >
                <h1> My Form  </h1>
                <div className='input-field' >
                    <label> Name  </label>
                    <input type="text" onChange={(e) => setNameState(e.target.value)} value={nameState} />
                </div>
                <div className='input-field'>
                    <label> Email </label>
                    <input type='email' onChange={(e) => setEmailState(e.target.value)} value={emailState} />
                </div>
                <div className='input-field'>
                    <label> Address </label>
                    <input type="text" onChange={(e) => setAddressState(e.target.value)} value={addressState} />
                </div>
                <div className='input-field'>
                    <label> Phone Number </label>
                    <input type="number" onChange={(e) => setPhoneState(e.target.value)} value={phoneState} />
                </div>
                <button className='submit-btn' onClick={() => handleSubmit()} > Submit  </button>
            </div>
            {
                isRender ? <div className='form-container'  >
                    <div> User Name : {nameState} </div>
                    <div> User Email : {emailState} </div>
                    <div> User Address : {addressState} </div>
                    <div> User phone Number : {phoneState} </div>
                </div> : ""
            }

        </>
    )
}

export default Form