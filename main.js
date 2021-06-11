const confirmbtn = document.getElementById("confirmbtn");
const startbtn = document.getElementById("startbtn");

var start;
var confirm;
var time = 0;
var startTime = null;

startbtn.addEventListener('click', function () {
    time = 0;
    start = new Date();
    startTime = Math.floor(start.getTime() / 1000);
    console.log(startTime);
    setTimeout(function () {
        if (time === 0) {
            alert("時間切れです。");
            startTime = null;
        }
    }, 4000);

});

confirmbtn.addEventListener('click', function () {
    confirm = new Date();
    confirmTime = Math.floor(confirm.getTime() / 1000);
    console.log(confirmTime);
    if (startTime === null) {
        alert("スタートを押してください");
    } else {
        evaluationtime();
        startTime = null;
    }


});

const evaluationtime = function () {
    time = confirmTime - startTime;
    console.log(time);
    if (time === 20) {
        alert("成功です");
    } else if (time < 20) {
        alert(`早いです　${20 - time}秒足りない`);
    } else if (time > 20) {
        alert(`遅いです ${time - 20}秒多い`);
    }
}


