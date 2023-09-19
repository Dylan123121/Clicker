let score = 0;
const autoclicker = {
    count: 0,
    cost: 100,
    interval: 1000,
};

function updateScore() {
    document.getElementById("score").textContent = score;
}

function purchaseAutoclicker() {
    const cost = autoclicker.cost * 2 ** autoclicker.count;
    if (score >= cost) {
        score -= cost;
        autoclicker.count++;
        updateAutoclickerButton();
        updateScore();
    }
}

function updateAutoclickerButton() {
    const cost = autoclicker.cost * 2 ** autoclicker.count;
    document.getElementById("autoclickerButton").textContent = `Autoclicker (x${autoclicker.count}) - Cost: ${cost}`;
}

function startAutoclickers() {
    setInterval(() => {
        score += autoclicker.count;
        updateScore();
    }, autoclicker.interval);
}

document.getElementById("clickButton").addEventListener("click", () => {
    score++;
    updateScore();
});

document.getElementById("autoclickerButton").addEventListener("click", purchaseAutoclicker);
