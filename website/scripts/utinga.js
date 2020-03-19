var feedback = document.getElementById("feedback-box");

function startClock(timezone) {
    let clock = document.querySelector("span#clock");
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    setTimeout(startClock, 500);

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

function iframeHeight() {
    let iframe = document.getElementById("map");

    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

function sendFeedback() {
    let send = document.querySelector("div#feedback-send");
    let span = document.querySelector("span#feedback-msg");

    feedback.style.display = "none";
    span.innerHTML = "<br><br><br><br><br><br><br><h4 style='text-align: center;'>Agradecemos pelo seu feedback!</h4><br><br><br><br><br><br><br>";
    send.innerHTML = "<button type='button' class='btn btn-warning' data-dismiss='modal'>Fechar</button>"
}

function exitFeedback() {
    feedback.reset();
}