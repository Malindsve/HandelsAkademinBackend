function search_In_updateMainWithAllSongs(searchFor) {

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

            if (compareStingsInLowerCase(song, searchFor) || compareStingsInLowerCase(artistName, searchFor)) {
                buildPlayList += "<li>" + artistName + " - " + song + " - " + duration + "</li>";
            }

        }
    }

    buildPlayList += "</ul>";

    console.log(buildPlayList);

    if (buildPlayList === '<ul></ul>') {
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
