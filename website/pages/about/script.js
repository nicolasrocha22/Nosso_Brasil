function sendFeedback() {
    var feedback = document.querySelector("form#feedback-box");
    var send = document.querySelector("div#feedback-send");

    feedback.innerHTML = "<br><br><br><br><br><br><br><h4 style='text-align: center;'>Agradecemos pelo seu feedback!</h4><br><br><br><br><br><br><br>";
    send.innerHTML = "<button type='button' class='btn btn-warning' data-dismiss='modal'>Fechar</button>"
}

function exitFeedback() {
    document.querySelector("form#feedback-box").reset();
}