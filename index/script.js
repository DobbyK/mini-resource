// Game Configuration
const gameData = {
    money: 0,
    collecting: null,
    resources: {
        food: { amount: 0, gain: 0, loss: 0, worth: 1, unlocked: true},
        wood: { amount: 0, gain: 0, loss: 0, worth: 2, unlocked: false },
        stone: { amount: 0, gain: 0, loss: 0, worth: 5, unlocked: false },
        metal: { amount: 0, gain: 0, loss: 0, worth: 10, unlocked: false }
    },
    buildings: {
        farm: { type: "food", count: 0, level: 1, basePrice: 10, resourcePrice: {}, baseUpgrade: 20 },
        lumbermill: { type: "wood", count: 0, level: 1, basePrice: 10, resourcePrice: {}, baseUpgrade: 20 },
        quarry: { type: "stone", count: 0, level: 1, basePrice: 10, resourcePrice: {}, baseUpgrade: 20 },
        mine: { type: "metal", count: 0, level: 1, basePrice: 10, resourcePrice: {"wood": 1}, baseUpgrade: 20}
    },
    unlockPrices: {
        wood: 25,
        stone: 100,
        metal: 500
    }
};

// UI Initialization
function initGame() {
    const container = document.getElementById("game");
    container.innerHTML = `
        <div><strong>Money:</strong> $<span id="money">0</span></div>
        <div id="resources"></div>
        <div id="buildings"></div>
    `;
    updateUI();
}

// Update UI Dynamically
function updateUI() {
    const rDiv = document.getElementById("resources");
    const bDiv = document.getElementById("buildings");

    rDiv.innerHTML = '';
    for (const [name, res] of Object.entries(gameData.resources)) {
        if (res.unlocked) {
            rDiv.innerHTML += `
                <div>
                    <strong>${name}</strong>: <span id="${name}_amount">${res.amount}</span> 
                    (+<span id="${name}_gain">${res.gain}</span>/s)
                    <button onclick="collect('${name}')">Collect</button>
                    <button onclick="sell('${name}')">Sell $${res.worth}</button>
                    ${gameData.unlockPrices[name] !== undefined 
                        ? `<button id="unlock_${name}" onclick="unlock('${name}')">
                            Unlock for $${gameData.unlockPrices[name]}
                        </button>` 
                        : ''
                    }
                </div>
            `;
        } else {
            rDiv.innerHTML += `
            <div>
                <strong>${name}</strong> (locked)
                <button id="unlock_${name}" onclick="unlock('${name}')">
                    Unlock for $${gameData.unlockPrices[name]}
                </button>
            </div>
        `;
        }
    }

    bDiv.innerHTML = '';
    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (gameData.resources[building.type].unlocked) {
            const resType = building.type;
            bDiv.innerHTML += `
                <div>
                    <strong>${bName}</strong> (Lv ${building.level}) - Count: <span id="${bName}_count">${building.count}</span>
                    <button onclick="build('${bName}')">Build (${getPrice(building)} ${resType} ${getCostText(building)}) 
                    </button>
                    <button onclick="levelUp('${bName}')">Upgrade (${getLevelPrice(building)} ${resType})</button>
                </div>
            `;
        }
    }

    document.getElementById("money").innerText = gameData.money;
}

// Game Logic
function getCostText(building) {
    if (!building.resourcePrice) {return null;}

    const parts = [];
    for (const [resource, cost] of Object.entries(building.resourcePrice)) {
        parts.push(`${cost} ${resource}/s`);
    }
    return ` | Cost: ${parts.join(', ')}`;
}

function getPrice(building) {
    return Math.floor(building.basePrice * Math.pow(1.25, building.count));
}

function getLevelPrice(building) {
    return Math.floor(building.baseUpgrade * Math.pow(1.5, building.level - 1));
}

function collect(resource) {
    const prev = gameData.collecting;
    gameData.collecting = resource;

    if (prev) {
        gameData.resources[prev].gain -= 1;
    }

    gameData.resources[resource].gain += 1;
    updateUI();
}

function sell(resource) {
    const res = gameData.resources[resource];
    if (res.amount > 0) {
        res.amount -= 1;
        gameData.money += res.worth;
        updateUI();
    } else {
        alert(`No ${resource} to sell.`);
    }
}

function build(buildingName) {
    const building = gameData.buildings[buildingName];
    const res = gameData.resources[building.type];
    const price = getPrice(building);

    if (res.amount >= price) {
        res.amount -= price;
        building.count += 1;
        updateGains();
        updateUI();
    } else {
        alert(`Not enough ${building.type}.`);
    }
}

function levelUp(buildingName) {
    const building = gameData.buildings[buildingName];
    const res = gameData.resources[building.type];
    const price = getLevelPrice(building);

    if (res.amount >= price) {
        res.amount -= price;
        building.level += 1;
        updateGains();
        updateUI();
    } else {
        alert(`Not enough ${building.type} to upgrade.`);
    }
}

function updateGains() {
    for (const res of Object.values(gameData.resources)) {
        res.gain = 0;
    }

    for (const building of Object.values(gameData.buildings)) {
        if (building.resourcePrice) {
            for (const resource in building.resourcePrice) {
                const cost = building.resourcePrice[resource];
                gameData.resources[resource].loss = building.count * cost;
            }
        }
    }
    for (const building of Object.values(gameData.buildings)) {
        const gain = (building.count * building.level) - gameData.resources[building.type].loss;
        gameData.resources[building.type].gain += gain;
    }

    if (gameData.collecting) {
        gameData.resources[gameData.collecting].gain += 1;
    }
}

function unlock(resource) {
    const price = gameData.unlockPrices[resource];
    if (gameData.money >= price) {
        gameData.money -= gameData.unlockPrices[resource];
        delete gameData.unlockPrices[resource];
        gameData.resources[resource].unlocked = true;
        document.getElementById(`unlock_${resource}`).style.display = "none";
        updateUI();
    } else {
        alert("Not enough money to unlock.");
    }
}

// Passive Gain
setInterval(() => {
    for (const res of Object.values(gameData.resources)) {
        res.amount += res.gain;
    }
    updateUI();
}, 1000);

initGame();
