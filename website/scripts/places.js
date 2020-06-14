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
            "<button style='margin-left: 2%;' type='button' class='btn btn-outline-primary' id='filter_btn' data-toggle='collapse' data-target='#collapseExample'><img style='width: 24px;' src='../img/icons/filter_icon.png'></button>"
        ];
        tourism_filter.style.display = null;
        local_filter.style.display = "none";

        document.querySelector("div#places_text").innerHTML = "";

        document.querySelector("span#list1").innerHTML = `
            <a href="./places/utinga.html" class="list-group-item list-group-item-action list-group-item">
                <label>Parque do Utinga</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list2").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Estação das Docas</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list3").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Ver-o-Peso</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list4").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Praça Batista Campos</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list5").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Museum Emílio Goeldi</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list6").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Praia de Algodoal</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list7").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Mangal das Garças</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list8").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 8</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list9").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 9</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
        document.querySelector("span#list10").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 10</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
    }
    
    local.onclick = function() {
        document.querySelector("form#tourism_filter").reset();
        document.querySelector("form#local_filter").reset();

        local.classList.add("active");
        tourism.classList.remove("active");
        filter_span.innerHTML = [
            "<button style='margin-left: 2%;' type='button' class='btn btn-outline-primary' id='filter_btn' data-toggle='collapse' data-target='#collapseExample'><img style='width: 24px;' src='../img/icons/filter_icon.png'></button>"
        ];
        tourism_filter.style.display = "none";
        local_filter.style.display = null;

        document.querySelector("div#places_text").innerHTML = "A câmera não está disponivel para estabelecimentos";

        document.querySelector("span#list1").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 1</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list2").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 2</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list3").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 3</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list4").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 4</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list5").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 5</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list6").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 6</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list7").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 7</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list8").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 8</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list9").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 9</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>`;
        document.querySelector("span#list10").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">
                <label>Local 10</label>
                <div style="float: right;">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </a>
        `;
    }
}