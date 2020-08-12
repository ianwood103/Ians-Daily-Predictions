var base;
var table;
var players;
$(document).ready(function() {
    $.getJSON("https://s3.amazonaws.com/scrapy.crawled.data/MLBPlayerPredictions/data.json", function(json) {
        players = json;
        fillGoodTable();
        fillBadTable();
    });
});

function fillGoodTable() {
    table = document.getElementById('good-player-table').rows;
    for(var i = 0; i < table.length - 1; i++) {
        fillBatter(i + 1, "good");
    }
}

function fillBadTable() {
    table = document.getElementById('bad-player-table').rows
    for(var i = 0; i < table.length - 1; i++) {
        fillBatter(i + 6, "bad");
    }
}

function fillBatter(order, type) {
    if (type == "bad") {
        order -= 5;
    }
    base = type + "-player-" + String(order);
    $("#" + base + " .player-headshot img").attr('src', players[order - 1]["headshot"]);
    $("#" + base + " .player").html(players[order - 1]["player"]);
    $("#" + base + " .player-logo img").attr("src", players[order - 1]["logo"]);
}