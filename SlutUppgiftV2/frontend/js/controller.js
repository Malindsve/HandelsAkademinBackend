// Listen to clicks and control's the environment
// Create EventListeners who listen for button clicks and map to correct function

// Logo
document.getElementById("logo").addEventListener("click", function () {
    displayVideo_AndDisable_OtherDivsInMain();
});


// Album buttons
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


// Links
document.getElementById("links1").addEventListener("click", function () {
    let displayImageIn_displayVideoDiv = document.getElementById("displayVideo");
    displayVideo_AndDisable_OtherDivsInMain();
    displayImageIn_displayVideoDiv.innerHTML = '<img src="../img/norris1.jpg" id="albumImageSrc">';
});

document.getElementById("links2").addEventListener("click", function () {
    let displayImageIn_displayVideoDiv = document.getElementById("displayVideo");
    displayVideo_AndDisable_OtherDivsInMain();
    displayImageIn_displayVideoDiv.innerHTML = '<img src="../img/norris2.jpg" id="albumImageSrc">';
});

document.getElementById("links3").addEventListener("click", function () {
    let displayImageIn_displayVideoDiv = document.getElementById("displayVideo");
    displayVideo_AndDisable_OtherDivsInMain();
    displayImageIn_displayVideoDiv.innerHTML = '<img src="../img/norris3.jpg" id="albumImageSrc">';
});

document.getElementById("links4").addEventListener("click", function () {
    let displayImageIn_displayVideoDiv = document.getElementById("displayVideo");
    displayVideo_AndDisable_OtherDivsInMain();
    displayImageIn_displayVideoDiv.innerHTML = '<img src="../img/norris4.jpg" id="albumImageSrc">';
});

document.getElementById("links5").addEventListener("click", function () {
    let displayImageIn_displayVideoDiv = document.getElementById("displayVideo");
    displayVideo_AndDisable_OtherDivsInMain();
    displayImageIn_displayVideoDiv.innerHTML = '<img src="../img/norris5.jpg" id="albumImageSrc">';
});

document.getElementById("robotImage").addEventListener("click", function () {
    let robotImage = document.getElementById("robotImage");

});

function updateRobotField(robotString) {
    if (robotString === "") {
        robotString = 'mupp';
    }
    let robotImage = document.getElementById("robotImage");
    let srcPath = 'https://robohash.org/' + robotString;
    robotImage.innerHTML = '<img id="robotImage" src="' + srcPath + '" alt="" height="180">';
}

updateRobotField("mupp");