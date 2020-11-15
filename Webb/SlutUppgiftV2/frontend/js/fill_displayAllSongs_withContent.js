function updateMainWithAllSongs() {
  // Combine artist + song + duration for all albums into one list
    let songList = document.getElementById("displayAllSongsContent");

    let buildPlayList = "<ul class='removeBulletsInList'>";

    let numbersOfAlbumInJsonFile= javaScriptObject_of_JsonFile.albums.length;

    songList.innerHTML = "buildPlayList";

    for (let albumIndex = 0; albumIndex < numbersOfAlbumInJsonFile; albumIndex++) {    // Loop trough albums
        let artistName = javaScriptObject_of_JsonFile.albums[albumIndex].artist;
        let numbersOfSongsInAlbum= javaScriptObject_of_JsonFile.albums[albumIndex].song.length;
        for (let i = 0; i < numbersOfSongsInAlbum; i++) {   // Loop trough songs
            let song = javaScriptObject_of_JsonFile.albums[albumIndex].song[i].title;
            let duration = javaScriptObject_of_JsonFile.albums[albumIndex].song[i].duration;

            buildPlayList += "<li>" + artistName + " - " + song + " - " + duration + "</li>";

        }
    }

    buildPlayList += "</ul>";

    songList.innerHTML = buildPlayList;
}
