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
            {/* <div>
                <h1 style={{ background: "yellow", fontSize: "10px", color: "red" }} >
                    This is Info Page
                </h1 >
                <div className="infosection">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

            </div> */}
        </>

    )
}

export default Info