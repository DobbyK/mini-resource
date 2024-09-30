var resources = { food: 0, wood: 0, stone: 0 };
var buildings = { farm: 0, lumbermill: 0, quarry: 0 };
var prices = { farm: 10, lumbermill: 10, quarry: 10 };
var level = { farm: 1, lumbermill: 1, quarry: 1 };
var levelprices = { farm: 20, lumbermill: 20, quarry: 20 };

function collect(resource) {
    resources[resource] += 1;
    updateScreen();
}

function build(building, resource) {
    if (resources[resource] >= prices[building]) {
        resources[resource] -= prices[building];
        buildings[building] += 1;
        prices[building] = Math.floor(1.25 * prices[building]);
        updateScreen();
    } else {
        alert(`Not enough ${resource} to build a ${building}.`);
    }
}

function levelUp(building, resource) {
    if (resources[resource] >= levelprices[building]) {
        resources[resource] -= levelprices[building];
        level[building] += 1;
        levelprices[building] = Math.floor(1.5 * levelprices[building]);
        updateScreen();
    } else {
        alert(`Not enough ${resource} to upgrade ${building}.`);
    }
}

function updateScreen() {
    for (let key in resources) {
        document.getElementById(key).innerHTML = resources[key];
    }
    for (let key in buildings) {
        document.getElementById(key).innerHTML = buildings[key];
        document.getElementById(key + "price").innerHTML = prices[key];
        document.getElementById(key + "_lvl").innerHTML = level[key];
        document.getElementById(key + "Up").innerHTML = levelprices[key];
    }
}

setInterval(() => {
    resources.food += buildings.farm * level.farm;
    resources.wood += buildings.lumbermill * level.lumbermill;
    resources.stone += buildings.quarry * level.quarry;
    updateScreen();
}, 1000);
