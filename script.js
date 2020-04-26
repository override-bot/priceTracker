parse3();
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
showData()

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

function parse3() {
    let link = "https://api.coinlore.net/api/tickers/";
    let request = new XMLHttpRequest();
    request.open('GET', link);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const response = request.response;
        console.log(response)
        showTable(response);

    }
}

function showTable(response) {
    var tr, td;
    tbody =
        document.querySelector('.tbody');
    tr = tbody.insertRow();
    td = tr.insertCell();

    td.innerHTML = "COINS";
    td = tr.insertCell();
    td.innerHTML = "RANK";
    td = tr.insertCell();
    td.innerHTML = "PRICE";
    td = tr.insertCell();
    td.innerHTML = "% CHANGE";
    for (var i = 0; i < (response.data).length; i++) {

        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = response.data[i].name;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = response.data[i].rank;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = response.data[i].price_usd;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = response.data[i].percent_change_1h;
    }
}
showTable();

function openTab(evt, title) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(title).style.display = "block";
    evt.currentTarget.className += " active";
}