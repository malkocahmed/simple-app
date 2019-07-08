var json;
function function1() {
    var selected = document.getElementById("type").value;
    var number = document.getElementById("enter").value;
    var tekstarea = document.getElementById("tekstarea");
    var divContent = document.getElementById("raw");
    divContent.innerHTML="";
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) { 
            json = JSON.parse(ajax.responseText);
            tekstarea.value = json.text;
            divContent.innerHTML += ajax.responseText;
            divContent.innerHTML += "<br>"
        }
        if(ajax.readyState == 4) {
            document.write = "Greska";
        }
    }
    var url = "https://numbersapi.com/" + number + "/" + selected + "?json";
    ajax.open("GET", url, true);
    ajax.send();
}

function saveJSON() {
    var tekstarea = document.getElementById("tekstarea");
    json.text = tekstarea.value;

    var blob = new Blob([JSON.stringify(json)], {type : "application/json"});
    var name = "number" + json.number + ".json";
    saveAs(blob, name);
}