// const anime = require("lib/anime.js");
//
// //  --------    HOMEPAGE     --------   //
//
// let tl = anime.timeline({
//     easing: "easeOutExpo",
//     duration: 750
// });
//
// tl.add({
//     targets: "section .bar",
//     width: "100%",
//     backgroundColor: "turquoise",
//     delay: anime.stagger(100)
// });
//
// tl.add({
//     targets: "section .bar",
//     width: "90%",
//     backgroundColor: "#49beb7"
// });

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
