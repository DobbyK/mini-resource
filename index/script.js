var resources = { food: 0, wood: 0, stone: 0 };
var buildings = { farm: 0, lumbermill: 0, quarry: 0 };
var prices = { farm: 10, lumbermill: 10, quarry: 10};

function collect(resource) {
    resources[resource] += 1;
    updateScreen();
}

function buildFarm() {
    if (resources.food >= prices.farm) {
        resources.food -= prices.farm;
        buildings.farm += 1;
        prices.farm = Math.floor(1.25*prices.farm);
        updateScreen();
    } else {
        alert("Not enough food to build a farm.");
    }
}

function buildMill() {
    if (resources.wood >= prices.lumbermill) {
        resources.wood -= prices.lumbermill;
        buildings.lumbermill += 1;
        prices.lumbermill = Math.floor(1.25*prices.lumbermill);
        updateScreen();
    } else {
        alert("Not enough wood to build a lumbermill.");
    }
}

function buildQuarry() {
    if (resources.stone >= prices.quarry) {
        resources.stone -= prices.quarry;
        buildings.quarry += 1;
        prices.quarry = Math.floor(1.25*prices.quarry);
        updateScreen();
    } else {
        alert("Not enough stone to build a quarry.");
    }
}

function updateScreen() {
    document.getElementById("food").innerHTML = resources.food;
    document.getElementById("wood").innerHTML = resources.wood;
    document.getElementById("stone").innerHTML = resources.stone;
    document.getElementById("lumbermill").innerHTML = buildings.lumbermill;
    document.getElementById("farm").innerHTML = buildings.farm;
    document.getElementById("quarry").innerHTML = buildings.quarry;
    document.getElementById("farmprice").innerHTML = prices.farm;
    document.getElementById("millprice").innerHTML = prices.lumbermill;
    document.getElementById("quarryprice").innerHTML = prices.quarry;
}

setInterval(() => {
    resources.food += buildings.farm;
    resources.wood += buildings.lumbermill;
    resources.stone += buildings.quarry;
    updateScreen();
}, 1000);
