async function fetchCoinsData() {
    try {
        const response = await fetch('https://crowdfunding.infinium.space/crowdfunding/balances/');
        const data = await response.json();
        return data.coins;
    } catch (error) {
        console.error('Error fetching coins data:', error);
        return [];
    }
}

async function crowdfundingData() {
    const coins = await fetchCoinsData();
    const container = document.querySelector(".crowdfunding .row");

    if (coins.length > 0) {
        coins.forEach((coin, index) => {

            const coinContainer = document.createElement("div");
            coinContainer.classList.add("col-12", "coin-item");
            
            if (index % 2 === 0) {
                coinContainer.classList.add("zig");
            } else {
                coinContainer.classList.add("zag");
            }

            coinContainer.innerHTML = `
                <div class="name">${coin.name}</div>
                <div class="image"><img src="${coin.image}" alt="${coin.name}" referrerpolicy="no-referrer"/></div>
                <div class="balance">${coin.balance}</div>
                <div class="address">${coin.address}</div>
            `;

            container.appendChild(coinContainer);
        });
    } else {
        console.log('No coins data available');
    }
}

document.addEventListener('DOMContentLoaded', crowdfundingData);
