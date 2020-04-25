var hours = new Date().getHours();

if (hours < 12) {
    document.getElementById('hours').innerHTML = "Good Morning!";
} else if (hours > 12 && hours < 14) {
    document.getElementById('hours').innerHTML = "Good Afternoon!";
} else {
    document.getElementById('hours').innerHTML = "Good Evening!";
}

function parseJson() {
    var symbol = document.getElementById('symbol').value;
    let link = "https://coinlib.io/api/v1/coin?key=7044b78a91d369f3&pref=USD&symbol=" + symbol;

    let request = new XMLHttpRequest();
    request.open('GET', link);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const response = request.response;
        console.log(response)
        showData(response);

    }
}



function showData(response) {
    document.getElementById('name').innerHTML = response.name;
    document.getElementById('price').innerHTML = "$" + Math.round(response.price).toLocaleString();
    document.getElementById('diff').innerHTML = response.delta_1h + "%";
    document.getElementById('sym').innerHTML = response.show_symbol;
    document.getElementById('vol').innerHTML = Math.round(response.total_volume_24h).toLocaleString();
    document.getElementById('cap').innerHTML = Math.round(response.market_cap).toLocaleString();
    document.getElementById('rank').innerHTML = response.rank;
    document.getElementById('low').innerHTML = Math.round(response.low_24h).toLocaleString();
    document.getElementById('high').innerHTML = Math.round(response.high_24h).toLocaleString();

}

function parse2() {
    var symbol = document.getElementById('symbol').value;
    let link = "https://coinlib.io/api/v1/global?key=7044b78a91d369f3&pref=USD";

    let request = new XMLHttpRequest();
    request.open('GET', link);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const response = request.response;
        console.log(response)
        showGlobal(response);

    }
}

function showGlobal(response) {
    document.getElementById('tcoins').innerHTML = (response.coins).toLocaleString();
    document.getElementById('tmarkets').innerHTML = Math.round(response.total_market_cap).toLocaleString();
    document.getElementById('tvol').innerHTML = Math.round(response.total_volume_24h).toLocaleString();


}
showGlobal();