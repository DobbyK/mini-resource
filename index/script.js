var resources = { food: 0, wood: 0, stone: 0 };
var buildings = { farm: 0, lumbermill: 0, quarry: 0 };

function collect(resource) {
    resources[resource] += 1;
    updateScreen();
}

function buildFarm() {
    if (resources.food >= 10) {
        resources.food -= 10;
        buildings.farm += 1;
        updateScreen();
    } else {
        alert("Not enough food to build a farm.");
    }
}

function buildMill() {
    if (resources.wood >= 10) {
        resources.wood -= 10;
        buildings.lumbermill += 1;
        updateScreen();
    } else {
        alert("Not enough wood to build a lumbermill.");
    }
}

function buildQuarry() {
    if (resources.stone >= 10) {
        resources.stone -= 10;
        buildings.quarry += 1;
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
}

// Resource generation function
setInterval(() => {
    resources.food += buildings.farm;
    resources.wood += buildings.lumbermill;
    resources.stone += buildings.quarry;
    updateScreen();
}, 1000);
