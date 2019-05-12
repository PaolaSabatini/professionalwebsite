//  --------    PROJECTS     --------   //
//             IMAGES MORE             //
let more = getElementById("more");
console.log("more", more);
let images = [
    "authors.png",
    "incrementalcearch.png",
    "json.png",
    "localstorage.png",
    "canvas.png",
    "resizablepanes.png",
    "sttickman.png"
];

setTimeout(function background() {
    for (var i = 0; i < images.length; i++) {
        more.style.backgroundImage = images[i];
    }
}, 1000);
