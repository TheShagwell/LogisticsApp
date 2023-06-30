
onload=()=>{
    let video=document.querySelector(".video-player video")
    video.onloadeddata=()=>video.currentTime=(video.duration/100)*10;
    
    var playBt=document.querySelector(".video-player .controls .play")
    
    var playIco=document.querySelector(".video-player .controls .play .play-ico")
    var pauseIco=document.querySelector(".video-player .controls .play .pause-ico")
    
    playBt.onclick=()=>{
       var playBtDiv = document.querySelector('.video-player .controls .play div')
       playBtDiv.classList.remove("ripple")
       
        if (video.paused){
            
            setTimeout(()=> playBtDiv.classList.add("ripple"),100)
            video.play()
            playIco.classList.add("hide")
            pauseIco.classList.remove("hide")
        }else{
            video.pause()
            playIco.classList.remove("hide")
            pauseIco.classList.add("hide")
        }
    }

    
}
