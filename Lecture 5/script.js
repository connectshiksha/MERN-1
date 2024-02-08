console.log("Script added succesfully")

const btn = document.getElementById("btn");



btn.addEventListener("click", async () => {
    console.log("botton clicked ")
    let myContainer = document.getElementById("container1");
    await fetch("https://api.publicapis.org/entries").then((data) => data.json()).then((data) => {
        console.log(data);
        // console.table(data)
        let showCount = document.createElement("div")
        showCount.innerHTML = data.count // <div> count </div>
        myContainer.append(showCount)
        data.entries.map((entry) => {
            let entriesAPI = document.createElement("div")
            let showAuth = document.createElement("div")
            let showCategory = document.createElement("div")
            let showCors = document.createElement("div")
            let showDes = document.createElement("div")

            // showAuth.innerHTML =  `<div> AUTH =>  ${entry.Auth}  </div>`
            // entriesAPI.innerHTML = `<div> API =>  ${entry.API}  </div>`
            // showCategory.innerHTML = `<div> Category =>  ${entry.Category}  </div>`
            // showCors.innerHTML = `<div> Cors =>  ${entry.Cors}  </div>`
            // showCors.innerHTML = `<div> Cors =>  ${entry.Description}  </div>`
            showAuth.innerHTML = `<div> AUTH =>  ${entry.Auth}  </div> 
            <div> ${entry.API} </div>
            <div> ${entry.Category} </div>
            <div> ${entry.Cors} </div>
            <div> ${entry.Description} </div>
            `


            myContainer.append(showAuth)
            // myContainer.append(entriesAPI)
            // myContainer.append(showCategory)
            // myContainer.append(showCors)
            // myContainer.append(showDes)
        })
    }).catch((e) => {
        console.log("error While Fething the data", e);
    })


})
