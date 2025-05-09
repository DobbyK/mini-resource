// Game Configuration
const gameData = {
    collecting: null,
    resources: {
        money: { amount: 0, gain: 0, loss: 0, worth: 1, unlocked: true, collectible: false, sellable: false },
        science: { amount: 0, gain: 0, loss: 0, worth: 0, unlocked: false, collectible: true, sellable: false },
        food: { amount: 0, gain: 0, loss: 0, worth: 1, unlocked: true, collectible: true, sellable: true },
        wood: { amount: 0, gain: 0, loss: 0, worth: 2, unlocked: false, collectible: true, sellable: true },
        stone: { amount: 0, gain: 0, loss: 0, worth: 5, unlocked: false, collectible: true, sellable: true },
        metal: { amount: 0, gain: 0, loss: 0, worth: 10, unlocked: false, collectible: true, sellable: true }
    },
    buildings: {
        farm: {
            type: "food", count: 0, level: 1, unlocked: true,
            buildCost: { money: 10 }, resourcePrice: {}, baseUpgrade: 20, upgradeable: true
        },
        lumbermill: {
            type: "wood", count: 0, level: 1, unlocked: false,
            buildCost: { money: 10, food: 5 }, resourcePrice: {}, baseUpgrade: 20, upgradeable: true
        },
        quarry: {
            type: "stone", count: 0, level: 1, unlocked: false,
            buildCost: { wood: 10, money: 5 }, resourcePrice: {}, baseUpgrade: 20, upgradeable: true
        },
        mine: {
            type: "metal", count: 0, level: 1, unlocked: false,
            buildCost: { stone: 10, wood: 5 }, resourcePrice: { wood: 1 }, baseUpgrade: 20, upgradeable: true
        },
        market: {
            type: "money", count: 0, level: 1, unlocked: false,
            buildCost: { stone: 10, wood: 5 }, resourcePrice: { food: 1 }, baseUpgrade: 20, upgradeable: false
        }
    },

    research: {
        unlockScience: {
            name: "Unlock Science",
            description: "Unlocks science collection.",
            cost: { money: 5 },
            effect: () => { gameData.resources.science.unlocked = true; },
            completed: false,
            requires: []
        },
        unlockWood: {
            name: "Unlock Wood",
            description: "Unlocks wood collection.",
            cost: { money: 25 },
            effect: () => { gameData.resources.wood.unlocked = true; },
            completed: false,
            requires: []
        },
        unlockLumbermill: {
            name: "Unlock Lumbermill",
            description: "Unlocks building lumbermills.",
            cost: { money: 30, food: 10 },
            effect: () => { gameData.buildings.lumbermill.unlocked = true; },
            completed: false,
            requires: ["unlockWood"]
        },
        unlockStone: {
            name: "Unlock Stone",
            description: "Unlocks stone collection.",
            cost: { money: 100, wood: 20 },
            effect: () => { gameData.resources.stone.unlocked = true; },
            completed: false,
            requires: ["unlockLumbermill"]
        },
        unlockQuarry: {
            name: "Unlock Quarry",
            description: "Unlocks building quarries.",
            cost: { money: 120, wood: 30 },
            effect: () => { gameData.buildings.quarry.unlocked = true; },
            completed: false,
            requires: ["unlockStone"]
        },
        unlockMetal: {
            name: "Unlock Metal",
            description: "Unlocks metal collection.",
            cost: { money: 250, stone: 50 },
            effect: () => { gameData.resources.metal.unlocked = true; },
            completed: false,
            requires: ["unlockQuarry"]
        },
        unlockMine: {
            name: "Unlock Mine",
            description: "Unlocks building mines.",
            cost: { money: 300, stone: 75 },
            effect: () => { gameData.buildings.mine.unlocked = true; },
            completed: false,
            requires: ["unlockMetal"]
        },
        unlockMarket: {
            name: "Unlock Market",
            description: "Unlocks the market.",
            cost: { money: 500, wood: 100, food: 100 },
            effect: () => { gameData.buildings.market.unlocked = true; },
            completed: false,
            requires: ["unlockMine"]
        }
    }


};

// UI Initialization
function initGame() {
    const container = document.getElementById("game");
    container.innerHTML = `
    
        <div id="resources"></div>
        <div id="buildings"></div>
        <div id="research"></div>
        
    `;
    // <button onclick="giveAllResourcesDebug()">Debug: Give 100K Resources</button>
    updateUI();
}

// Update UI Dynamically
function updateUI() {
    const rDiv = document.getElementById("resources");
    const bDiv = document.getElementById("buildings");
    const researchDiv = document.getElementById("research");

    rDiv.innerHTML = '';
    for (const [name, res] of Object.entries(gameData.resources)) {
        if (res.unlocked) {
            rDiv.innerHTML += `
                <div>
                    <strong>${name}</strong>: <span id="${name}_amount">${res.amount}</span> 
                    (+<span id="${name}_gain">${res.gain}</span>/s)
                    ${res.collectible ? `<button onclick="collect('${name}')">Collect</button>` : ''}
${res.sellable ? `<button onclick="sell('${name}')">Sell $${res.worth}</button>` : ''}

                </div>
            `;
        } else {
            rDiv.innerHTML += ``;
        }
    }

    bDiv.innerHTML = '<h3>Buildings</h3>';
    for (const [bName, building] of Object.entries(gameData.buildings)) {
        if (building.unlocked && gameData.resources[building.type].unlocked) {
            const costText = getCostText(building);
            bDiv.innerHTML += `
                <div>
                    <strong>${bName}</strong> (Lv ${building.level}) - Count: <span id="${bName}_count">${building.count}</span>
                    <button onclick="build('${bName}')">Build (${formatCost(building.buildCost)}${costText})</button>
                    ${building.upgradeable !== false
                    ? `<button onclick="levelUp('${bName}')">Upgrade (${getLevelPrice(building)} ${building.type})</button>`
                    : '<em>Not upgradeable</em>'}                    
                </div>
            `;
        }
    }

    researchDiv.innerHTML = "<h3>Research</h3>";
    for (const [key, item] of Object.entries(gameData.research)) {
        if (item.completed) continue;

        // Check if all prerequisites are met
        const prereqsMet = item.requires.every(reqKey => gameData.research[reqKey]?.completed);
        if (!prereqsMet) continue;

        researchDiv.innerHTML += `
        <div>
            <strong>${item.name}</strong>: ${item.description}
            <br>Cost: ${formatCost(item.cost)}
            <br><button onclick="performResearch('${key}')">Research</button>
        </div>
    `;
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

function performResearch(key) {
    const item = gameData.research[key];

    // Check resource availability
    for (const [res, cost] of Object.entries(item.cost)) {
        if (!gameData.resources[res] || gameData.resources[res].amount < cost) {
            alert(`Not enough ${res} to research ${item.name}.`);
            return;
        }
    }

    // Deduct cost
    for (const [res, cost] of Object.entries(item.cost)) {
        gameData.resources[res].amount -= cost;
    }

    // Apply effect
    item.effect();
    item.completed = true;

    updateUI();
}

function giveAllResourcesDebug() {
    for (const res of Object.values(gameData.resources)) {
        res.amount = 100000;
    }
    updateUI();
    console.log("All resources set to 100,000 for debugging.");
}

// Passive Gain
setInterval(() => {
    for (const res of Object.values(gameData.resources)) {
        res.amount += res.gain;
    }
    updateUI();
}, 1000);

initGame();
