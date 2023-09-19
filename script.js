// Define variables to store game data
let score = 0;
const upgrades = [
    {
        name: "Auto Clicker",
        cost: 10,
        value: 1,
    },
    // Add more upgrades here
];

// Event listener for clicking the main button
document.getElementById("clickButton").addEventListener("click", () => {
    score += 1; // Increase score by 1 per click
    updateScore(); // Update the displayed score
});

// Event listener for upgrading
upgrades.forEach((upgrade) => {
    const button = document.createElement("button");
    button.textContent = `${upgrade.name} - Cost: ${upgrade.cost}`;

    button.addEventListener("click", () => {
        if (score >= upgrade.cost) {
            score -= upgrade.cost;
            upgrade.cost *= 2; // Increase upgrade cost for the next purchase
            upgrade.value += 1; // Increase upgrade value
            updateScore();
        }
    });

    document.getElementById("upgrades").appendChild(button);
});

// Function to update the displayed score
function updateScore() {
    document.getElementById("score").textContent = score;
}
