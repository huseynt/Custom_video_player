// ---------------- video ----------------------
const video = document.querySelector("#video")
const vidSource = document.querySelector("#vidSource")
const vidPlay = document.querySelector("#vidPlay")
const vidStop = document.querySelector("#vidStop")
const vidVolUp = document.querySelector("#vidVolUp")
const vidVolDown = document.querySelector("#vidVolDown")
const volumePercent = document.querySelector("#volumePercent")
const timeLine = document.querySelector("#timeLine")
const rangeVid = document.querySelector("#rangeVid")
const videoPlayer = document.querySelector("#videoPlayer")
const rangeVol = document.querySelector("#rangeVol")
const fullScreen =document.querySelector("#fullScreen")  

// current volume --------------------------
volumePercent.innerText=`Volume: ${Math.floor(video.volume*100)}%`

// video max duration------------------------
video.addEventListener("mouseenter",function () {
    rangeVid.max=Math.floor(video.duration)
    console.log(rangeVid.max)
})

// current video time -------------------------
video.addEventListener("timeupdate", MyFunction)
function MyFunction(){
    timeLine.innerText=`${video.currentTime>60 ? Math.floor(video.currentTime/60) : 0}:${video.currentTime>60? Math.floor(video.currentTime)-(Math.floor(video.currentTime/60)*60): Math.floor(video.currentTime)} san`;
}
// volume range ------------------------------
rangeVol.addEventListener("input", (e) => {
    video.volume=e.target.value/100
    volumePercent.innerText=`Volume: ${Math.floor(video.volume*100)}%`
  });

// range time ---------------------------------
rangeVid.addEventListener("input", (event) => {
    video.currentTime=event.target.value
    video.play()
  });

// play / stop --------------------------------
vidPlay.addEventListener("click",function () {
    video.play()
})
vidStop.addEventListener("click",function () {
    video.pause()
})

// volume up-----------------------------------
// vidVolUp.addEventListener("click",function () {
//     if (video.volume<0.9) {
//         video.volume +=0.1
//         vidVolDown.innerText="Vol -"
//         volumePercent.innerText=`Volume: ${Math.floor(video.volume*100)}%`
//     }else {
//         video.volume=1
//         vidVolUp.innerText="Vol max"
//         volumePercent.innerText=`Volume: ${Math.floor(video.volume*100)}%`
//     } 
// })
// volume down --------------------------------
// vidVolDown.addEventListener("click",function () {
//     if (video.volume>0.1)  {
//         video.volume -=0.1
//         vidVolUp.innerText="Vol +"
//         volumePercent.innerText=`Volume: ${Math.floor(video.volume*100)}%`
//     } else {
//         video.volume=0
//         vidVolDown.innerText="Vol mute"
//         volumePercent.innerText=`Volume: ${Math.floor(video.volume*100)}%`
//     }
// })
// video control hover --------------------------------
video.addEventListener("mouseenter", function () {
    videoControls.style.display="flex"
})
videoPlayer.addEventListener("mouseleave", function () {
    videoControls.style.display="none"
})

// fullscreen ------------------------------------
fullScreen.addEventListener("click",openFullscreen)
function openFullscreen() {
    video.requestFullscreen();
  }