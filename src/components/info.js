import { Button } from 'react-bootstrap'
import '../css/info.css'
import UserInfo from './userInfo'

import { Link, useNavigate } from "react-router-dom"
const Info = () => {
    const navigate = useNavigate()
    let userName = "Nikhil"

    const greetUser = () => {
        console.log(`hello Wellcome to our site ${userName}`);
    }
    const handleFormClick=()=>{
        /// login 
        navigate("/form")
    }
    const handleAboutUsClick = ()=>{
        navigate("/about")
    }
    return (
        <>

            {/* <UserInfo userNameExample = {userName} greetFuntion = {greetUser} /> */}
            <div>
                <Button style={{ margin: "1rem" }} onClick={() => handleFormClick()} > Form  </Button>
                {/* <Button onClick={()=> handleAboutUsClick()} > About Us   </Button> */}
                {/* <Link to="/about" >  About Us </Link> */}
                <a href='/about' > about </a>
            </div>

        </>

    )
}

export default Info