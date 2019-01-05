play1 = document.getElementById("play1");
play2 = document.getElementById("play2");
play3 = document.getElementById("play3");
play = [play1,play2,play3];

const onplayicon = document.getElementById("onplay");
const onpauseicon = document.getElementById("onpause");
const progress_bar = document.getElementById("progress-bar");
const timeinf = document.getElementById("timeinf");
const song_prev = document.getElementById("song-prev");
const song_next = document.getElementById("song-next");
const songpic = document.getElementById("songpic");
const songname = document.getElementById("songname");
const artistname = document.getElementById("artistname");

onplayicon.style.display = "block";
onpauseicon.style.display = "none";
timeinf.innerHTML = "00:00/00:00";
songpic.style.backgroundImage = "url(img/laojie.png)"

var timelen;
var minute;
var minutes1;
var second;
var seconds1;
var minutes2;
var seconds2;
var currenttime;
var index=0;

play[0].load();
play[1].load();
play[2].load();

function getTimeLen() {
    timelen = play[index].duration;
    minute = timelen / 60;
    minutes1 = parseInt(minute);
    if (minutes1 < 10) {
        minutes1 = "0" + minutes1;
    }
//秒
    second = timelen % 60;
    seconds1 = Math.round(second);
    if (seconds1 < 10) {
        seconds1 = "0" + seconds1;
    }
}

function getCurTime() {
    currenttime = play[index].currentTime;
    minute = currenttime / 60;
    minutes2 = parseInt(minute);
    if (minutes2 < 10) {
        minutes2 = "0" + minutes2;
    }
//秒
    second = currenttime % 60;
    seconds2 = Math.round(second);
    if (seconds2 < 10) {
        seconds2 = "0" + seconds2;
    }
}

function playsong(){
    getTimeLen();
    getCurTime();
    play[index].play();
    timeinf.innerHTML = minutes2 + ":" + seconds2 + "/" + minutes1 + ":" + seconds1;
    setInterval(function () {
        getCurTime();
        timeinf.innerHTML = minutes2 + ":" + seconds2 + "/" + minutes1 + ":" + seconds1;
        timeinf.style.marginLeft = -(currenttime/timelen)*96 +"px";
        progress_bar.style.paddingRight = (currenttime/timelen)*96 + "px";
        progress_bar.style.right = 100-(currenttime/timelen)*100 + "%"
    },500);
}

function playsongbtn(){
    onplayicon.style.display = "none";
    onpauseicon.style.display = "block";
    getTimeLen();
    getCurTime();
    play[index].play();
    timeinf.innerHTML = minutes2 + ":" + seconds2 + "/" + minutes1 + ":" + seconds1;
    setInterval(function () {
        getCurTime();
        timeinf.innerHTML = minutes2 + ":" + seconds2 + "/" + minutes1 + ":" + seconds1;
        timeinf.style.marginLeft = -(currenttime/timelen)*96 +"px";
        progress_bar.style.paddingRight = (currenttime/timelen)*96 + "px";
        progress_bar.style.right = 100-(currenttime/timelen)*100 + "%"
    },500);
}

function changesongpic(){
    console.log(1);
    if (index === 0){
        console.log(2);
        songpic.style.backgroundImage = "url(img/laojie.png)";
        songname.innerText = "老街（cover-李荣浩）";
        artistname.innerText = "LEE一一";
    }

    else if (index === 1){
        console.log(3);
        songpic.style.backgroundImage = "url(img/nsyw.png)";
        songname.innerText = "年少有为";
        artistname.innerText = "李荣浩";
    }

    else if (index === 2){
        console.log(4);
        songpic.style.backgroundImage = "url(img/smlt.png)";
        songname.innerText = "沙漠骆驼";
        artistname.innerText = "展展与罗罗";
    }

}

function adjust(e){
    var bar = e.target;
    var x = e.offsetX;
    progress_bar.style.right = x/1440 + "px";
    play[index].currentTime = "" + parseInt(x*timelen/1440) + "";
    play[index].play();
}

song_prev.onclick = function() {
    play[index].pause();
    play[index].currentTime = 0;
    if (index === 0)
        index = 2;
    else
        index--;
    playsong();
    changesongpic();
};
song_next.onclick = function() {
    play[index].pause();
    play[index].currentTime = 0;
    if (index === 2)
        index = 0;
    else
        index++;
    playsong();
    changesongpic();
};
onplayicon.onclick = function () {
    onplayicon.style.display = "none";
    onpauseicon.style.display = "block";
    playsong();
};
onpauseicon.onclick = function () {
    onplayicon.style.display = "block";
    onpauseicon.style.display = "none";
    play[index].pause();
};

var mouseDownX,flag = false;
progress_bar.onmousedown=function(e){
    mouseDownX = e.clientX;
    flag = true;
};
progress_bar.onmousemove=function(e){
    if(flag){
        var mouseMoveX = e.clientX;
        progress_bar.style.right = 100 * (parseInt(mouseDownX) - parseInt(mouseMoveX))/96 + "%";
        play[index].currentTime = ((parseInt(mouseDownX) - parseInt(mouseMoveX))/96)*timelen;
    }
};
progress_bar.onmouseup=function(){
    flag = false;
    playsongbtn();
};