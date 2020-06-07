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

function displayCommentary() {
    let text = document.querySelector("textarea#commentary_text").value;
    let commentary = document.getElementById("commentary_area");

    if(text != "") {
        commentary.innerHTML += `
            <br>
            <div class="card commentary_card border-danger shadow" id="commentary_box">
                <div class="card-header border-danger">
                    <h5>Usuário</h5>
                    <div>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <div class="card-body">
                    <p id="comment">
                        <span style="color: black;">${text}</span>
                    </p>
                </div>
            </div>
        `
    }
}