function updateMainWithAllSongs() {
    // TODO: Combine artist + song + duration for all albums into one list
    let songList = document.getElementById("displayAllSongsContent");

    let buildPlayList = "<ul class='removeBulletsInList'>";

    let numbersOfAlbumInJsonFile= jsonObject.albums.length;

    songList.innerHTML = "buildPlayList";

    for (let albumIndex = 0; albumIndex < numbersOfAlbumInJsonFile; albumIndex++) {    // Loop trough albums
        let artistName = jsonObject.albums[albumIndex].artist;
        let numbersOfSongsInAlbum= jsonObject.albums[albumIndex].song.length;
        for (let i = 0; i < numbersOfSongsInAlbum; i++) {   // Loop trough songs
            let song = jsonObject.albums[albumIndex].song[i].title;
            let duration = jsonObject.albums[albumIndex].song[i].duration;

            buildPlayList += "<li>" + artistName + " - " + song + " - " + duration + "</li>";

        }
    }

    buildPlayList += "</ul>";

    songList.innerHTML = buildPlayList;
}
