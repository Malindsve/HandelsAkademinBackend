let usersObject;
let albumsObject;

fetch('http://jsonplaceholder.typicode.com/users')      // Request data from Rest-API (kyparn)
    .then(response => response.json())                        // When response is available (färdigt i köket)
    .then(json => usersObject = json)                         // Save response in Object (kyparn kommer och serverar)

fetch('http://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => albumsObject = json)

function updateMainWith_DataFromRestApi() {
    let songList = document.getElementById("displayAllSongsContent");
    songList.innerHTML = "Building Playlist...";

    let buildPlayList = "<ul class='removeBulletsInList'>";

    let numbersOfAlbums= albumsObject.length;

    for (let albumIndex = 0; albumIndex < numbersOfAlbums; albumIndex++) {    // Loop trough albums 0-100
        let userId = albumsObject[albumIndex].userId;
        let songTitle = albumsObject[albumIndex].title;
        let artistName = "";

        for (let i = 0; i < usersObject.length; i++) {
            if (userId === usersObject[i].id) {
                artistName = usersObject[i].name;
                buildPlayList += "<li>" + artistName + " - " + songTitle + "</li>";
            }
        }
    }

    buildPlayList += "</ul>";

    songList.innerHTML = buildPlayList;
}
