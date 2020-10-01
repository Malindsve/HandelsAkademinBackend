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

displayVideo_AndDisable_OtherDivsInMain();
