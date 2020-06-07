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

        document.querySelector("span#list1").innerHTML = `
            <a href="./places/utinga.html" class="list-group-item list-group-item-action list-group-item">Parque do Utinga</a>
        `;
        document.querySelector("span#list2").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">Estação das Docas</a>
        `;
        document.querySelector("span#list3").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">Ver-o-Peso</a>
        `;
        document.querySelector("span#list4").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">Praça Batista Campos</a>
        `;
        document.querySelector("span#list5").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">Museum Emílio Goeldi</a>
        `;
        document.querySelector("span#list6").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">Praia de Algodoal</a>
        `;
        document.querySelector("span#list7").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">...</a>
        `;
        document.querySelector("span#list8").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">...</a>
        `;
        document.querySelector("span#list9").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">...</a>
        `;
        document.querySelector("span#list10").innerHTML = `
            <a href="" class="list-group-item list-group-item-action list-group-item">...</a>
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

        document.querySelector("span#list1").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 1</a>';
        document.querySelector("span#list2").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 2</a>';
        document.querySelector("span#list3").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 3</a>';
        document.querySelector("span#list4").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 4</a>';
        document.querySelector("span#list5").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 5</a>';
        document.querySelector("span#list6").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 6</a>';
        document.querySelector("span#list7").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 7</a>';
        document.querySelector("span#list8").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 8</a>';
        document.querySelector("span#list9").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 9</a>';
        document.querySelector("span#list10").innerHTML = '<a href="" class="list-group-item list-group-item-action list-group-item">Local 10</a>';
    }
}