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