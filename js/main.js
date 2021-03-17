var videoBack = document.getElementById('videoBackground');
var btnPlay = document.getElementById('btnPlay');
var icono = document.getElementById('icono');

btnPlay.addEventListener('click', function(){
    videoBack.style.display = "block";

    if(videoBack.paused){
        videoBack.play();
        icono.src = "img/pause.png";
    } else{
        videoBack.pause();
        icono.src = "img/play.png";
    }
});