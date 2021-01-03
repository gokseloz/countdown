var countDate = new Date("1 Jan, 2022 00:00:00").getTime()

function newYear(){
    var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / (day))
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / (second));

        document.querySelector(".day").textContent = d;
        document.querySelector(".hour").textContent = h;
        document.querySelector(".minute").textContent = m;
        document.querySelector(".second").textContent = s;

        if(document.querySelector(".day").textContent < 10){
            document.querySelector(".day").textContent = `0`+ d
        }
        if(document.querySelector(".hour").textContent < 10){
            document.querySelector(".hour").textContent = `0`+ h
        }
        if(document.querySelector(".minute").textContent < 10){
            document.querySelector(".minute").textContent = `0`+ m
        }
        if(document.querySelector(".second").textContent < 10){
            document.querySelector(".second").textContent = `0`+ s
        }
}

setInterval(function(){
    newYear();
}, 1000)



