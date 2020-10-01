let jsonObject;

// Method for reading in the JSON-file
function loadJSON(callback) {
    let xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    xobj.open("GET", '../data/albums.json', false)
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        jsonObject = JSON.parse(response);
    });
}

init()
