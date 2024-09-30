var resources = { food: 0, wood: 0, stone: 0 };

function collect(resource) {
    resources[resource] += 1;
    updateScreen();
}

function updateScreen() {
    var f = document.getElementById("food");
    var s = document.getElementById("wood");
    var w = document.getElementById("stone");
    f.innerHTML = resources.food;
    s.innerHTML = resources.wood;
    w.innerHTML = resources.stone;
}
