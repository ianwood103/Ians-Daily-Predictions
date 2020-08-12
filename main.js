var base;
var table;
var players;
$(document).ready(function() {
    $.getJSON("https://s3.amazonaws.com/scrapy.crawled.data/MLBPlayerPredictions/data.json", function(json) {
        players = json;
        console.log(players);
        fillGoodTable();
        fillBadTable();
    });
});

function fillGoodTable() {
    table = document.getElementById('good-player-table').rows;
    for(var i = 0; i < 5; i++) {
        fillBatter(i + 1, "good");
    }
}

function fillBadTable() {
    table = document.getElementById('bad-player-table').rows
    for(var i = 0; i < 5; i++) {
        fillBatter(i + 1, "bad");
    }
}

function fillBatter(order, type) {
    base = type + "-player-" + String(order);
    if (type == "bad") {
        order += 5;
    }
    $("#" + base + " .player-headshot img").attr('src', players[order - 1]["headshot"]);
    console.log(players[order - 1]["headshot"])
    $("#" + base + " .player").html(players[order - 1]["player"]);
    console.log(players[order - 1]["player"])
    $("#" + base + " .player-logo img").attr("src", players[order - 1]["logo"]);
    console.log(players[order - 1]["logo"])
}