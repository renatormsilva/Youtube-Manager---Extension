
const interval = setInterval(()=> {
    const bellow = document.querySelector("#container")
    const playerContainer = document.querySelector("#player-container")
    const videoId = window.location.search.slice(3);
    if(videoId.indexOf("&t=") > 1){
        videoId = videoId.slice(0, videoId.indexOf("&t="))
    }
    console.log(videoId);

    if(bellow && playerContainer){
        console.log(bellow)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "no-ads"
        button.classList.add("noAdsButton")
        const newPlayer = document.createElement("div")
        newPlayer.classList.add("newPlayer");
    
        button.addEventListener("click", function(){
            button.classList.add("changeColor");
            document.getElementById('ytd-player').remove()
            newPlayer.classList.add("newPlayer");
            newPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}"</iframe> `
        })

        
        bellow.appendChild(button)


        playerContainer.appendChild(newPlayer)
    }

    
},1000)





