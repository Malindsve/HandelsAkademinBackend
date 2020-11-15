let javaScriptObject_of_JsonFile;  // JSON file -> JavaScript Object

// Method for reading in the JSON-file
function loadJSON(callback) {
    let xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    xobj.open("GET", '../data/albums.json', false)  // Request data from json-file (kyparn)
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {         // IF response return correct status (färdigt i köket)
            callback(xobj.responseText);                            // Kyparn tar tag i svaret
        }
    };
    xobj.send(null);    // Send response back from function (Kyparn bär till bordet)
}

// Response from loadJSON is to be saved in jsonObject variable
function init() {
    loadJSON(function (response) {
        javaScriptObject_of_JsonFile = JSON.parse(response);  // Json response go trough a parse and save in jsonObject (Kyparn serverar vid bordet)
    });
}

// Starts/Runs the init function on page refresh
init()
