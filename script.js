fetch('https://api.pexels.com/v1/search?query=kittens', {
        method: "GET",
        headers: {
            Authorization: "miIq8p1NxzhdS1aCNnkNAZVXMY6TjZq5yGUS8gnokfacu1to7zPWTyhk"
        }
      })
    .then((res)=>
    {
        if(res.ok)
        {
            console.log("ok")
            return res.json()
        }
        else
        {
            throw new Error("basta, mi arrendo")
        }
    })
    .then((data)=>
    {
        console.log(data)
        const loader=document.getElementById("loading")
        const imgine=document.getElementsByClassName("bd-placeholder-img card-img-top")
        const imgvett=Array.from(imgine)
        console.log(imgvett)
      
        loader.addEventListener("click", function()
        {
            for(let i=0;i<imgvett.length;i++)
            {
                imgvett[i].setAttribute("src",data.photos[i].src.large)
            }
        })
        
    })
    .catch((err)=>
    {
        console.log("errore", err)
    })
    fetch('https://api.pexels.com/v1/search?query=Oceans', {
        method: "GET",
        headers: {
            Authorization: "miIq8p1NxzhdS1aCNnkNAZVXMY6TjZq5yGUS8gnokfacu1to7zPWTyhk"
        }
      })
    .then((res)=>
    {
        if(res.ok)
        {
            console.log("ok")
            return res.json()
        }
        else
        {
            throw new Error("basta, mi arrendo")
        }
    })
    .then((data)=>
    {
        console.log(data)
        const loader2=document.getElementById("loading2")
        const imgine2=document.getElementsByClassName("bd-placeholder-img card-img-top")
        const imgvett2=Array.from(imgine2)
        
      
        loader2.addEventListener("click", function()
        {
            for(let i=0;i<imgvett2.length;i++)
            {
                imgvett2[i].setAttribute("src",data.photos[i].src.large)
            }
        })
        
    })
    .catch((err)=>
    {
        console.log("errore", err)
    })
