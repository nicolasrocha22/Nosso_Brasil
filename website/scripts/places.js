function showList() {
    let tourism = document.querySelector("button#tourism_btn");
    let local = document.querySelector("button#local_btn");
    let filter = document.getElementById("filter_btn");
    let filter_span = document.querySelector("span#filter_span");

    let tourism_filter = document.getElementById("tourism_filter");
    let local_filter = document.getElementById("local_filter");

    tourism_filter.style.display = "none";
    local_filter.style.display = "none";

    tourism.onclick = function() {
        document.querySelector("form#tourism_filter").reset();
        document.querySelector("form#local_filter").reset();

        tourism.classList.add("active");
        local.classList.remove("active");
        filter_span.innerHTML = [
            "<button style='margin-left: 2%;' type='button' class='btn btn-outline-warning' id='filter_btn' data-toggle='collapse' data-target='#collapseExample'><img style='width: 24px;' src='../img/icons/filter_icon.png'></button>"
        ];
        tourism_filter.style.display = null;
        local_filter.style.display = "none";

        let region = document.querySelector("select#region");

        document.querySelector("span#list1").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Cristo Redentor</a>'
        document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Pão de Açúcar</a>'
        document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praia de Copacabana</a>'
        document.querySelector("span#list4").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praça dos Três Poderes</a>'
        document.querySelector("span#list5").innerHTML = '<a href="./places/utinga.html" class="list-group-item list-group-item-action list-group-item-success">Parque do Utinga</a>'
        document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praia de Ipanema</a>'
        document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Estação das Docas</a>'
        document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praia de Iracema</a>'
        document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Rio da Prata</a>'
        document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Bairro da Liberdade</a>'

        region.onclick = function() {
            if(region.value == "Norte") {
                document.querySelector("span#list1").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Estação das Docas</a>';
                document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Ver-o-Peso</a>';
                document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praça Batista Campos</a>';
                document.querySelector("span#list4").innerHTML = '<a href="./places/utinga.html" class="list-group-item list-group-item-action list-group-item-success">Parque do Utinga</a>';
                document.querySelector("span#list5").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Casa das Onze Janelas</a>';
                document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Museum Emílio Goeldi</a>';
                document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Praia de Algodoal</a>';
                document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Teatro Amazonas</a>';
                document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Fortaleza de São José</a>';
                document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Marco Zero</a>';
            } else if(region.value == "Nordeste") {
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
            } else if(region.value == "Centro") {
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
            } else if(region.value == "Sudeste") {
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
            } else if(region.value == "Sul") {
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
    }
    
    local.onclick = function() {
        document.querySelector("form#tourism_filter").reset();
        document.querySelector("form#local_filter").reset();

        local.classList.add("active");
        tourism.classList.remove("active");
        filter_span.innerHTML = [
            "<button style='margin-left: 2%;' type='button' class='btn btn-outline-warning' id='filter_btn' data-toggle='collapse' data-target='#collapseExample'><img style='width: 24px;' src='../img/icons/filter_icon.png'></button>"
        ];
        tourism_filter.style.display = "none";
        local_filter.style.display = null;

        document.querySelector("span#list1").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 1</a>';
        document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 2</a>';
        document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 3</a>';
        document.querySelector("span#list4").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 4</a>';
        document.querySelector("span#list5").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 5</a>';
        document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 6</a>';
        document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 7</a>';
        document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 8</a>';
        document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 9</a>';
        document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item-success">Local 10</a>';
    }
}