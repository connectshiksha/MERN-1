

const UserInfo =(props)=>{
    console.log("props ", props )
    props.greetFuntion() ;

    const fetchData=()=>{
      let url = "https://api.publicapis.org/entries"

        try {
            fetch(url).then((data)=>{
                return data.json()
            }).then((data)=>{
                console.log("fetched Data",data)
       
            })
            
        } catch (error) {
            console.log("error while fetching data",error)
        }finally{
            console.log("work of api fetch is completed")
        }
    }

    return(
        <>
         <h1> This is User Info section </h1>
         <h2>Username : {props.userNameExample} </h2>
         <button onClick={()=>fetchData()}> Fetch Data </button>
       
        </>
    )

}

export default UserInfo 