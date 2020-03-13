function iframeHeight() {
    var iframe = document.getElementById("map");
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

function startClock(timezone) {
    var clock = document.querySelector("span#clock");
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var time = setTimeout(startClock, 500);

    minute = checkTime(minute);
    second = checkTime(second);

    switch(timezone) {
        default:
            clock.innerHTML = `${hour} : ${minute} : ${second}`;
            break;
        case 1:
            hour = hour - 2;
            clock.innerHTML = `${hour} : ${minute} : ${second}`;
            break;
        case 2:
            hour--;
            clock.innerHTML = `${hour} : ${minute} : ${second}`;
            break;
        case 3:
            hour++;
            clock.innerHTML = `${hour} : ${minute} : ${second}`;
            break;
    }
}

function checkTime(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}

function sendFeedback() {
    var feedback = document.querySelector("form#feedback-box");
    var send = document.querySelector("div#feedback-send");

    feedback.innerHTML = "<br><br><br><br><br><br><br><h4 style='text-align: center;'>Agradecemos pelo seu feedback!</h4><br><br><br><br><br><br><br>";
    send.innerHTML = "<button type='button' class='btn btn-warning' data-dismiss='modal'>Fechar</button>"
}

function exitFeedback() {
    document.querySelector("form#feedback-box").reset();
}