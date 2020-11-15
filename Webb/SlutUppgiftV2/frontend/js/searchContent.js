function search_In_updateMainWithAllSongs(searchFor) {

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

            if (compareStingsInLowerCase(song, searchFor) || compareStingsInLowerCase(artistName, searchFor)) {
                buildPlayList += "<li>" + artistName + " - " + song + " - " + duration + "</li>";
            }

        }
    }

    buildPlayList += "</ul>";

    if (buildPlayList === '<ul class=\'removeBulletsInList\'></ul>') {
        songList.innerHTML = '<img src="../img/chuckSaysNo.png" alt="Chuck says no!" id=\'albumImageSrc\'>';
    } else {
        songList.innerHTML = buildPlayList;
    }
}

function compareStingsInLowerCase(originalString, searchFor) {
    originalString = originalString.toLowerCase();
    searchFor = searchFor.toLowerCase();

    if (originalString.includes(searchFor)) {
        return true;
    } else {
        return false;
    }
}
