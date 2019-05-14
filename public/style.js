let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1000
});

tl.add({
    targets: ".wrapcontact .backcontact",
    width: "100%",
    backgroundColor: "#018790",
    delay: anime.stagger(200)
});

tl.add({
    targets: ".wrapcontact .backcontact",
    width: "95%",
    backgroundColor: "#018790"
});

tl.add({
    targets: ".wrapabout .backabout",
    width: "100%",
    backgroundColor: "#0000",
    delay: anime.stagger(200)
});

tl.add({
    targets: ".wrapabout .backabout",
    width: "95%",
    backgroundColor: "#0000"
});

//  --------    PROJECTS     --------   //
//             IMAGES MORE             //
// let more = getElementById("more");
// console.log("more", more);
// let images = [
//     "authors.png",
//     "incrementalcearch.png",
//     "json.png",
//     "localstorage.png",
//     "canvas.png",
//     "resizablepanes.png",
//     "sttickman.png"
// ];
//
// setTimeout(function background() {
//     for (var i = 0; i < images.length; i++) {
//         more.style.backgroundImage = images[i];
//     }
// }, 1000);
