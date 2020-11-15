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

function displayVideo_AndDisable_OtherDivsInMain() {
    document.getElementById("displayVideo").style.display = "block";
    document.getElementById("displayAlbums").style.display = "none";
    document.getElementById("displayAllSongs").style.display = "none";
}

function displayAlbums_AndDisable_OtherDivsInMain() {
    document.getElementById("displayVideo").style.display = "none";
    document.getElementById("displayAlbums").style.display = "block";
    document.getElementById("displayAllSongs").style.display = "none";
}

function displayAllSongs_AndDisable_OtherDivsInMain() {
    document.getElementById("displayVideo").style.display = "none";
    document.getElementById("displayAlbums").style.display = "none";
    document.getElementById("displayAllSongs").style.display = "block";
}

function init() {
    loadJSON(function (response) {
        jsonObject = JSON.parse(response);
    });
    displayVideo_AndDisable_OtherDivsInMain();
}

init()

function updateButtonNames() {
    document.getElementById("buttonAlbum1").innerHTML = "Metallica";
    document.getElementById("buttonAlbum2").innerHTML = "Nirvana";
    document.getElementById("buttonAlbum3").innerHTML = "AC/DC";
    document.getElementById("buttonAlbum4").innerHTML = "All";
}

updateButtonNames();

function updateAlbumTitle(albumIndex) {
    let albumTitle = document.getElementById("albumTitle");
    albumTitle.innerHTML = jsonObject.albums[albumIndex].title;
}

function updateAlbumImage(albumIndex) {
    let albumImage = document.getElementById("albumImage");
    let imagePath = jsonObject.albums[albumIndex].image;
    albumImage.innerHTML = "<img src='" + imagePath + "' id='albumImageSrc'>";
}

function updateArtist(albumIndex) {
    let artist = document.getElementById("artist");
    artist.innerHTML = jsonObject.albums[albumIndex].artist;
}

function updateSongList(albumIndex) {
    let songList = document.getElementById("songList");

    let startTag = "<ol>"
    let endTag = "</ol>"

    let buildPlayList = startTag;
    let numbersOfSongsInAlbum= jsonObject.albums[albumIndex].song.length;
    for (let i = 0; i < numbersOfSongsInAlbum; i++) {
        let song = jsonObject.albums[albumIndex].song[i].title;
        let duration = jsonObject.albums[albumIndex].song[i].duration;
        buildPlayList += "<li>" + song + " - " + duration + "</li>";
    }

    buildPlayList += endTag;

    songList.innerHTML = buildPlayList;
}

function runUpdateFunctions(albumIndex) {
    updateAlbumTitle(albumIndex);
    updateAlbumImage(albumIndex);
    updateArtist(albumIndex);
    updateSongList(albumIndex);
    displayAlbums_AndDisable_OtherDivsInMain();
}

function updateMainWithMetallicaContent() {
    let metallicaIndex = 0;
    runUpdateFunctions(metallicaIndex);
}

function updateMainWithNirvanaContent() {
    let nirvanaIndex = 1;
    runUpdateFunctions(nirvanaIndex);
}

function updateMainWithAcDcContent() {
    let acDcIndex = 2;
    runUpdateFunctions(acDcIndex);
}

function updateMainWithAllSongs() {
    // TODO: Combine artist + song + duration for all albums into one list
    let songList = document.getElementById("displayAllSongsContent");

    let buildPlayList = "<ol>";

    let numbersOfAlbumInJsonFile= jsonObject.albums.length;
    for (let albumIndex = 0; albumIndex < numbersOfAlbumInJsonFile; albumIndex++) {    // Loop trough albums
        let artistName = jsonObject.albums[albumIndex].artist;

        let numbersOfSongsInAlbum= jsonObject.albums[albumIndex].song.length;
        for (let i = 0; i < numbersOfSongsInAlbum; i++) {   // Loop trough songs
            let song = jsonObject.albums[albumIndex].song[i].title;
            let duration = jsonObject.albums[albumIndex].song[i].duration;
            buildPlayList += "<li>" + artistName + " - " + song + " - " + duration + "</li>";
        }
    }



    buildPlayList += "</ol>";

    songList.innerHTML = buildPlayList;
}

// Create EventListeners who listen for button clicks and map to correct function
document.getElementById("buttonAlbum1").addEventListener("click", function () {
    updateMainWithMetallicaContent();
});

document.getElementById("buttonAlbum2").addEventListener("click", function () {
    updateMainWithNirvanaContent();
});

document.getElementById("buttonAlbum3").addEventListener("click", function () {
    updateMainWithAcDcContent();
});

document.getElementById("buttonAlbum4").addEventListener("click", function () {
    displayAllSongs_AndDisable_OtherDivsInMain()
    updateMainWithAllSongs();
});

// BIIIIILLLLDDDDDD TILL ALLSONGS