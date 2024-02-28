import '../css/info.css'

import UserInfo from './userInfo'

const Info = () => {

    

    let userName = "Nikhil"

    const greetUser = ()=>{
        console.log(`hello Wellcome to our site ${userName}`) ;
    }

    return (
        <>

            <UserInfo userNameExample = {userName} greetFuntion = {greetUser} />
          
        </>

    )
}

export default Info