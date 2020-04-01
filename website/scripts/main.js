var feedback = document.getElementById("feedback_box");

function validateFeedback() {
    let radio = document.forms["feedback"]["customRadio"].value;
    let option = document.forms["feedback"]["option"].value;
    let comentary = document.forms["feedback"]["comentary"].value;

    if(radio == "" || option == "" || comentary == "") {
        alert("[ERROR] Required");
        return false;
    } else {
        sendFeedback();
    }
}

function sendFeedback() {
    let send = document.querySelector("div#feedback_send");
    let span = document.querySelector("span#feedback_msg");

    feedback.style.display = "none";
    span.innerHTML = "<br><br><br><br><br><br><br><h4 style='text-align: center;'>Agradecemos pelo seu feedback!</h4><br><br><br><br><br><br><br>";
    send.innerHTML = "<button type='button' class='btn btn-warning' data-dismiss='modal'>Fechar</button>"
}

function exitFeedback() {
    feedback.reset();
}