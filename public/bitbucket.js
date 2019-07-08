var json;

function searchRepositories() {
    var bitbucket;
    var promise = new Promise(function(resolve, reject) {
        bitbucket = new BitbucketAPI(document.getElementById("key").value, document.getElementById("secret").value);
        resolve(bitbucket);
    });
    promise.then(function(bitbucket) {
        bitbucket.GetData(document.getElementById("search").value, fillTheDiv);
    });
}
// function that we send as parameter when we call Bitbucket.GetData
function fillTheDiv(greska, data) {
    if(greska == null) {
        json = data;
        document.getElementById("raw").innerHTML = JSON.stringify(data, null, 2);
    }
}

function saveJSON() {
    var blob = new Blob([JSON.stringify(json)], {type : "application/json"});
    saveAs(blob, "repositories.json");
}