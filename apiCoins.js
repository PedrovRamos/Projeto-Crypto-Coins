 const showCoins = (arrayCoins) => {
    const coinsList = document.getElementById('coins-list');

   arrayCoins.forEach((element) => {
       const Coin = document.createElement('li');
       Coin.innerText = `${element.name} (${element.symbol}): ${Number(element.priceUsd).toFixed(2)} USD`;
       coinsList.appendChild(Coin);
   });
};

 
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    try {
        const response = await fetch(url);
        const data = await response.json();
        const coins = data.data;
        showCoins(coins);
    } catch (error) {
        console.log(error);
    }
};

fetchCoins();

