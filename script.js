document.addEventListener("DOMContentLoaded", function() {
    const players = [
        {
            name: "Lionel Messi",
            speed: 90,
            defense: 40,
            midfield: 95,
            professionalism: 99
        },
        {
            name: "Cristiano Ronaldo",
            speed: 92,
            defense: 35,
            midfield: 85,
            professionalism: 98
        },
        {
            name: "Kevin De Bruyne",
            speed: 80,
            defense: 60,
            midfield: 95,
            professionalism: 95
        },
        {
            name: "Virgil van Dijk",
            speed: 70,
            defense: 95,
            midfield: 75,
            professionalism: 90
        }
    ];

    const playerList = document.getElementById("player-list");

    players.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.className = "player-card";

        const playerName = document.createElement("h2");
        playerName.textContent = player.name;
        
        const playerSpeed = document.createElement("p");
        playerSpeed.textContent = `Hız: ${player.speed}`;
        
        const playerDefense = document.createElement("p");
        playerDefense.textContent = `Defans: ${player.defense}`;
        
        const playerMidfield = document.createElement("p");
        playerMidfield.textContent = `Orta Saha: ${player.midfield}`;
        
        const playerProfessionalism = document.createElement("p");
        playerProfessionalism.textContent = `Profesyonellik: ${player.professionalism}`;

        playerCard.appendChild(playerName);
        playerCard.appendChild(playerSpeed);
        playerCard.appendChild(playerDefense);
        playerCard.appendChild(playerMidfield);
        playerCard.appendChild(playerProfessionalism);

        playerList.appendChild(playerCard);
    });
});
