function showRegion() {
    var option = document.querySelector("select#inlineFormCustomSelectPref").value;

    if(option == "Norte") {
        document.querySelector("span#list1").innerHTML = '<a href="./norte/estacao.html" class="list-group-item list-group-item-action list-group-item-success">Estação das Docas</a>';
        document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Ver-o-Peso</a>';
        document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praça Batista Campos</a>';
        document.querySelector("span#list4").innerHTML = '<a href="./norte/utinga.html" class="list-group-item list-group-item-action list-group-item-success">Parque do Utinga</a>';
        document.querySelector("span#list5").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Casa das Onze Janelas</a>';
        document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Museum Emílio Goeldi</a>';
        document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praia de Algodoal</a>';
        document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Teatro Amazonas</a>';
        document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Fortaleza de São José</a>';
        document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Marco Zero</a>';
    } else if(option == "Nordeste") {
        document.querySelector("span#list1").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Parque Nacional da Chapada das Mesas</a>';
        document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praia de Iracema</a>';
        document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Porto de Galinhas</a>';
        document.querySelector("span#list4").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Pelourinho</a>';
        document.querySelector("span#list5").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Lençois Maranhenses</a>';
        document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Fernando de Noronha</a>';
        document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 7</a>';
        document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 8</a>';
        document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 9</a>';
        document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 10</a>';
    } else if(option == "Centro") {
        document.querySelector("span#list1").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praça dos Três Poderes</a>';
        document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Palácio Itamaraty</a>';
        document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Catedral Metropolitana de Brasília</a>';
        document.querySelector("span#list4").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Rio da Prata</a>';
        document.querySelector("span#list5").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Patanal</a>';
        document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Parque Nacional da Chapada dos Guimarães</a>';
        document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 7</a>';
        document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 8</a>';
        document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 9</a>';
        document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 10</a>';
    } else if(option == "Sudeste") {
        document.querySelector("span#list1").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Cristo Redentor</a>';
        document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Pão de Açucar</a>';
        document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praia da Copacabana</a>';
        document.querySelector("span#list4").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praia de Ipanema</a>';
        document.querySelector("span#list5").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Floresta da Tijuca</a>';
        document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Avenida Paulista</a>';
        document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Museum de Artes de São Paulo</a>';
        document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Basílica de Nossa Senhora Aparecida</a>';
        document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Bairro da Liberdade</a>';
        document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Escadaria Selarón</a>';
    } else if(option == "Sul") {
        document.querySelector("span#list1").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Cataratas do Iguaçu</a>';
        document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Balneário Camboriú</a>';
        document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Catedral de Pedra</a>';
        document.querySelector("span#list4").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 4</a>';
        document.querySelector("span#list5").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 5</a>';
        document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 6</a>';
        document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 7</a>';
        document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 8</a>';
        document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 9</a>';
        document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 10</a>';
    }
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