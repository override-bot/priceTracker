//boss
//parse3();
parse4();
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
    var container = document.getElementById('ranking');
    for (i = 0; i < (response.data).length; i++) {
        var info = document.createElement('div');
        info.className = 'info';
        var coins = document.createElement('p');
        coins.className = 'coin-list';
        coins.innerHTML = response.data[i].name + "(" + response.data[i].symbol + ")";
        info.appendChild(coins);
        var rank = document.createElement('p');
        rank.className = 'rankList';
        rank.innerHTML = "Rank:" + response.data[i].rank;
        info.appendChild(rank);
        var price = document.createElement('p');
        price.className = 'price-list';
        price.innerHTML = "$" + response.data[i].price_usd;
        info.appendChild(price);
        var priceD = document.createElement('p');
        priceD.className = 'priceD';
        priceD.innerHTML = response.data[i].percent_change_1h + "%" + "(1H)";
        info.appendChild(priceD);
        var priceDA = document.createElement('p');
        priceDA.className = 'priceDA';
        priceDA.innerHTML = response.data[i].percent_change_24h + "%" + "(24H)";
        info.appendChild(priceDA);


        container.appendChild(info);
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

function parse4() {
    let link = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=139624f8df934a929b35b3bc9c9eea14";
    let request = new XMLHttpRequest();
    request.open('GET', link);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const response = request.response;
        console.log(response)
        showNews(response);

    }
}

function showNews(response) {
    var container = document.getElementById('container');
    for (i = 0; i < (response.articles).length - 10; i++) {
        var news = document.createElement('div');
        news.className = 'news';
        var headline = document.createElement('p');
        headline.className = 'headline';
        headline.innerHTML = response.articles[i].title;
        news.appendChild(headline);
        var author = document.createElement('p');
        author.className = 'author';
        author.innerHTML = "by" + " " + response.articles[i].author;
        news.appendChild(author);
        var description = document.createElement('p');
        description.className = 'author';
        description.innerHTML = response.articles[i].description;
        news.appendChild(description);
        var a = document.createElement('a');
        a.className = 'a';
        a.innerHTML = "Read More>>";
        a.href = response.articles[i].url;
        news.appendChild(a);
        var source = document.createElement('p');
        source.className = 'headline';
        source.innerHTML = "Source:" + response.articles[i].source.name;
        news.appendChild(source);
        /**  info.appendChild(coins);
        var rank = document.createElement('p');
        rank.className = 'rankList';
        rank.innerHTML = "Rank:" + response.data[i].rank;
        info.appendChild(rank);
        var price = document.createElement('p');
        price.className = 'price-list';
        price.innerHTML = "$" + response.data[i].price_usd;
        info.appendChild(price);
        var priceD = document.createElement('p');
        priceD.className = 'priceD';
        priceD.innerHTML = response.data[i].percent_change_1h + "%" + "(1H)";
        info.appendChild(priceD);
        var priceDA = document.createElement('p');
        priceDA.className = 'priceDA';
        priceDA.innerHTML = response.data[i].percent_change_24h + "%" + "(24H)";
        info.appendChild(priceDA);
**/

        container.appendChild(news);
    }
}
showNews();