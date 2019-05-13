//  --------    HOMEPAGE     --------   //

let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1000
});

tl.add({
    targets: "section div",
    width: "100%",
    backgroundColor: "#018790",
    delay: anime.stagger(200)
});

tl.add({
    targets: "section div",
    width: "98%",
    backgroundColor: "#018790"
});

let hamburger = document.getElementById("menulogo");

let menuanimation = anime.timeline({
    easing: "easeOutExpo",
    duration: 500
});

hamburger.addEventListener("click", () => {
    console.log("CLICKED");
    menuanimation.add({
        targets: "section",
        width: "75%"
    });
    menuanimation.add({
        targets: "menulogo",
        backgroundColor: "#018790"
    });
});
