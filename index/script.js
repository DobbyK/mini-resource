var resources = { food: 0, wood: 0, stone: 0 };
var buildings = { farm: 0, lumbermill: 0, quarry: 0 };
var prices = { farm: 10, lumbermill: 10, quarry: 10 };
var level = { farm: 1, lumbermill: 1, quarry: 1 };
var levelprices = { farm: 20, lumbermill: 20, quarry: 20 };
var gains = { food: 0, wood: 0, stone: 0 }

function collect(resource) {
    resources[resource] += 1;
    updateScreen();
}

function build(building, resource) {
    if (resources[resource] >= prices[building]) {
        resources[resource] -= prices[building];
        buildings[building] += 1;
        prices[building] = Math.floor(1.25 * prices[building]);
        gains[resource] = buildings[building] * level[building];
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
        gains[resource] = buildings[building] * level[building];
        updateScreen();
    } else {
        alert(`Not enough ${resource} to upgrade ${building}.`);
    }
}

function updateScreen() {
    for (let i in resources) {
        document.getElementById(i).innerHTML = resources[i];
        document.getElementById(i + "ps").innerHTML = gains[i];

    }
    for (let i in buildings) {
        document.getElementById(i).innerHTML = buildings[i];
        document.getElementById(i + "price").innerHTML = prices[i];
        document.getElementById(i + "_lvl").innerHTML = level[i];
        document.getElementById(i + "Up").innerHTML = levelprices[i];
    }
}

setInterval(() => {
    for (let i in resources) {
        resources[i] += gains[i];
    }
    updateScreen();
}, 1000);
