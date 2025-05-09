// Game Configuration
const gameData = {
    collecting: null,
    resources: {
        money: { amount: 0, gain: 0, loss: 0, worth: 1, unlocked: true },
        food: { amount: 0, gain: 0, loss: 0, worth: 1, unlocked: true },
        wood: { amount: 0, gain: 0, loss: 0, worth: 2, unlocked: false },
        stone: { amount: 0, gain: 0, loss: 0, worth: 5, unlocked: false },
        metal: { amount: 0, gain: 0, loss: 0, worth: 10, unlocked: false }
    },
    buildings: {
        farm: {
            type: "food", count: 0, level: 1,
            buildCost: { money: 10 }, resourcePrice: {}, baseUpgrade: 20, upgradeable: true
        },
        lumbermill: {
            type: "wood", count: 0, level: 1,
            buildCost: { money: 10, food: 5 }, resourcePrice: {}, baseUpgrade: 20, upgradeable: true
        },
        quarry: {
            type: "stone", count: 0, level: 1,
            buildCost: { wood: 10, money: 5 }, resourcePrice: {}, baseUpgrade: 20, upgradeable: true
        },
        mine: {
            type: "metal", count: 0, level: 1,
            buildCost: { stone: 10, wood: 5 }, resourcePrice: { wood: 1 }, baseUpgrade: 20, upgradeable: true
        },
        market: {
            type: "money", count: 0, level: 1,
            buildCost: { stone: 10, wood: 5 }, resourcePrice: { food: 1 }, baseUpgrade: 20, upgradeable: false
        }
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
                    ${name !== 'money' ? `
                        <button onclick="collect('${name}')">Collect</button>
                        <button onclick="sell('${name}')">Sell $${res.worth}</button>
                    ` : ''}
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
            bDiv.innerHTML += `
                <div>
                    <strong>${bName}</strong> (Lv ${building.level}) - Count: <span id="${bName}_count">${building.count}</span>
                    <button onclick="build('${bName}')">Build (${formatCost(building.buildCost)} ${getCostText(building)})</button>
                    ${building.upgradeable !== false 
                        ? `<button onclick="levelUp('${bName}')">Upgrade (${getLevelPrice(building)} ${building.type})</button>`
                        : '<em>Not upgradeable</em>'}                    
                </div>
            `;
        }
    }
}

function formatCost(costObj) {
    return Object.entries(costObj).map(([res, amt]) => `${amt} ${res}`).join(', ');
}

function getCostText(building) {
    if (!building.resourcePrice || Object.keys(building.resourcePrice).length === 0) return '';
    const parts = Object.entries(building.resourcePrice)
        .map(([resource, cost]) => `${cost} ${resource}/s`);
    return parts.length > 0 ? ` | Cost: ${parts.join(', ')}` : '';
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
        gameData.resources.money.amount += res.worth;
        updateUI();
    } else {
        alert(`No ${resource} to sell.`);
    }
}

function build(buildingName) {
    const building = gameData.buildings[buildingName];

    // Check one-time costs
    for (const [resource, cost] of Object.entries(building.buildCost)) {
        if (gameData.resources[resource].amount < cost) {
            alert(`Not enough ${resource} to build ${buildingName}.`);
            return;
        }
    }

    // Check passive costs
    if (building.resourcePrice) {
        for (const [resource, costPerBuilding] of Object.entries(building.resourcePrice)) {
            const totalLoss = (building.count + 1) * costPerBuilding;
            let passiveGain = 0;
            for (const b of Object.values(gameData.buildings)) {
                if (b.type === resource) {
                    passiveGain += b.count * b.level;
                }
            }
            if (passiveGain < totalLoss) {
                alert(`You need at least ${totalLoss} ${resource}/s passive income to build another ${buildingName}.`);
                return;
            }
        }
    }

    // Deduct build cost
    for (const [resource, cost] of Object.entries(building.buildCost)) {
        gameData.resources[resource].amount -= cost;
    }

    building.count += 1;
    updateGains();
    updateUI();
}

function levelUp(buildingName) {
    const building = gameData.buildings[buildingName];
    if (building.upgradeable === false) {
        alert(`${buildingName} cannot be upgraded.`);
        return;
    }

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
        res.loss = 0;
    }

    for (const building of Object.values(gameData.buildings)) {
        if (building.resourcePrice) {
            for (const resource in building.resourcePrice) {
                const cost = building.resourcePrice[resource];
                gameData.resources[resource].loss += building.count * cost;
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
    if (gameData.resources.money.amount >= price) {
        gameData.resources.money.amount -= price;
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
