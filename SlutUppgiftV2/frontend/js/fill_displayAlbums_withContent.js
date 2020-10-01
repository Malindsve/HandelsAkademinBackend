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

    let startTag = "<ul class='removeBulletsInList'>"
    let endTag = "</ul>"

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
