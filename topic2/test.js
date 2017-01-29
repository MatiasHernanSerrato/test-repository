function movie(title,year,duration){
this.title = title;
this.year = year;
this.duration = duration;
}
function vidplay() {
       var video = document.getElementById("videoTest");
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = "||";
          var flag = 0;
       } else {
          video.pause();
          button.textContent = ">";
       }
    }

    function restart() {
        var video = document.getElementById("videoTest");
        video.currentTime = 0;
    }

    function resume(value) {
        var video = document.getElementById("videoTest");
        video.currentTime += value;
    }
