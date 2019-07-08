var json;
function loadData() {
    var title = document.getElementById("title");
    var year = document.getElementById("year");
    var name = document.getElementById("name");
    var _year = document.getElementById("_year");
    var released = document.getElementById("released");
    var runtime = document.getElementById("runtime");
    var genre = document.getElementById("genre");
    var actors = document.getElementById("actors");
    var imdb = document.getElementById("imdb");
    var tekstarea = document.getElementById("tekstarea");
    var divContent = document.getElementById("raw");
    name.innerHTML = _year.innerHTML = released.innerHTML = runtime.innerHTML = genre.innerHTML = actors.innerHTML = imdb.innerHTML = tekstarea.value = divContent.innerHTML="";
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) { 
            json = JSON.parse(ajax.responseText);
            name.innerHTML += json.Title;
            _year.innerHTML += json.Year;
            released.innerHTML += json.Released;
            runtime.innerHTML += json.Runtime;
            genre.innerHTML += json.Genre;
            actors.innerHTML += json.Actors;
            imdb.innerHTML += json.imdbRating;
            tekstarea.value += json.Plot;
            divContent.innerHTML += JSON.stringify(json, null, 2);
            divContent.innerHTML += "<br>"
            document.getElementById("proba").innerHTML="nesto";
        }
        if(ajax.readyState == 4) {
            document.write = "Greska";
        }
    }
    // var url = "http://numbersapi.com/" + number + "/" + selected + "?json";
    var url = "https://www.omdbapi.com/?&t=" + title.value;
    if(year.value != undefined) url += "&y=" + year.value;
    url += "&apikey=2569f8e4"
    ajax.open("GET", url, true);
    ajax.send();
}

function saveJSON() {
    var tekstarea = document.getElementById("tekstarea");
    json.Plot = tekstarea.value;

    var blob = new Blob([JSON.stringify(json)], {type : "application/json"});
    var name = json.Title + ".json";
    saveAs(blob, name);
}