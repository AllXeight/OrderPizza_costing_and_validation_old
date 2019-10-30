(function () {       
    var Module = {};
    Module.watermark = function (element) {
        var watermark = element.dataset.watermark;
        initInput();
        element.onfocus = function () {
            if (element.value == watermark) {
                element.value = "";
                element.classList.remove("text-muted");
                element.style.fontSize = "normal";
            }
        }
        element.onblur = function () {
            if (element.value == "") {
                initInput();
            }
        }
        function initInput() {
            element.value = watermark;
            element.classList.add("text-muted");
            element.style.fontSize = "14px";
        }
    }

    for (el in document.pizza.elements) {
        var currentEl = document.pizza.elements[el];
        if (currentEl.type === "text" || currentEl.name === "tel" || currentEl.name === "address" || currentEl.name === "name") {
            Module.watermark(currentEl);
            currentEl.addEventListener("change", function (e) {
                if (e.target.pattern)
                    if (new RegExp(e.target.pattern).test(e.target.value)) {
                        e.target.classList.remove("bg-danger");
                        e.target.classList.add("bg-success");
                    }
                    else {
                        e.target.classList.remove("bg-success");
                        e.target.classList.add("bg-danger");
                    }
            });
        }
    }

    var smallPizza = document.getElementById("smallPizza")
    var mediumPizza = document.getElementById("mediumPizza");
    var bigPizza = document.getElementById("bigPizza");
    var choose = document.getElementById("choose");
    var btnSub = document.getElementById("btnSub");

    btnSub.onclick = function (e) {
        if (document.pizza["name"].value == "name") {
            e.preventDefault();
            document.pizza["name"].classList.remove("bg-success");
            document.pizza["name"].classList.add("bg-danger");
        }
        else {
            document.pizza["name"].classList.remove("bg-danger");
            document.pizza["name"].classList.add("bg-success");
        }
        if (document.pizza["address"].value == "address") {
            e.preventDefault();
            document.pizza["address"].classList.remove("bg-success");
            document.pizza["address"].classList.add("bg-danger");
        }
        else {
            document.pizza["address"].classList.remove("bg-danger");
            document.pizza["address"].classList.add("bg-success");
        }
        if (smallPizza.checked == false && mediumPizza.checked == false && bigPizza.checked == false) {
            e.preventDefault();
            choose.classList.add("bg-danger");
        }
        else {
            choose.classList.remove("bg-danger");
        }
    }

    var price = 0, priceStart = 0;
    var cost = document.getElementById("cost");
    for (el in document.pizza.elements) {
        var currentEl = document.pizza.elements[el];
        if (currentEl.name === "size" || currentEl.name === "ingredients") {
            currentEl.addEventListener("change", function (e) {
                if (smallPizza.checked == false && mediumPizza.checked == false && bigPizza.checked == false) {
                    choose.classList.add("bg-danger");
                }
                else {
                    choose.classList.remove("bg-danger");
                }
                if (e.target.value === "small") {
                    priceStart = 40;
                }
                else if (e.target.value === "medium") {
                    priceStart = 50;
                }
                else if (e.target.value === "big") {
                    priceStart = 75;
                }
                else if (e.target.value === "mushroom") {
                    if (e.target.checked == false) {
                        price -= 5;
                    }
                    else {
                        price += 5;
                    }
                }
                else if (e.target.value === "bacon") {
                    if (e.target.checked == false) {
                        price -= 10;
                    }
                    else {
                        price += 10;
                    }
                }
                else if (e.target.value === "tomato") {
                    if (e.target.checked == false) {
                        price -= 10;
                    }
                    else {
                        price += 10;
                    }
                }
                else if (e.target.value === "cheese") {
                    if (e.target.checked == false) {
                        price -= 15;
                    }
                    else {
                        price += 15;
                    }
                }
                else if (e.target.value === "olive") {
                    if (e.target.checked == false) {
                        price -= 5;
                    }
                    else {
                        price += 5;
                    }
                }
                cost.innerHTML = price + priceStart;
            });
        }
    }
})()