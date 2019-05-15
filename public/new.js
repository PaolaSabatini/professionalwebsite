/////////      ANIMATION START      //////////

let anim = anime.timeline({
    easing: "easeOutExpo",
    duration: 2000
});

anim.add({
    targets: "#home .back",
    width: "100%",
    backgroundColor: "#1b1919",
    delay: anime.stagger(200)
});

anim.add({
    targets: "#home .back",
    width: "100%",
    backgroundColor: "#1b1919"
});

///////////////     ANIMATION ABOUT ME      /////////////////

var tl = new TimelineMax({ onupdate: updatePercentage });

var controller = new ScrollMagic.Controller();

var about = document.getElementById("about");
var spn = document.getElementsByTagName("span");
var berlin = document.getElementById("berlin");
var sp = document.getElementById("sp");

tl.from(about, 0.5, { x: 200, opacity: 0 });
tl.from(spn, 1, { width: 0 }, "=-.5");
tl.from(berlin, 1, { x: -200, opacity: 0 }, "=-1");
tl.from(sp, 1, { x: 200, opacity: 0 }, "=-.7");

var scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".sticky")
    .setTween(tl)
    .addTo(controller);

function updatePercentage() {
    tl.progress();
    console.log("progress", tl.progress());
}

///////////////////////////////////////////////////

// var timeline = new TimelineMax({ onupdate: updatePercentage });
//
// var bar1 = document.getElementById("barJS");
// var bar2 = document.getElementById("barCSS");
// var bar3 = document.getElementById("barjquery");
// var bar4 = document.getElementById("barvue");
// var bar5 = document.getElementById("barreact");
// var bar6 = document.getElementById("barredux");
// var bar7 = document.getElementById("baranime");
// var bar8 = document.getElementById("barscroll");
//
// timeline.from(bar1, 1, { height: "60%" });
// timeline.from(bar2, 1, { height: "100%" });
// timeline.from(bar3, 1, { height: "20%" });
// timeline.from(bar4, 1, { height: "60%" });
// timeline.from(bar5, 1, { height: "90%" });
// timeline.from(bar6, 1, { height: "30%" });
// timeline.from(bar7, 1, { height: "70%" });
// timeline.from(bar8, 1, { height: "10%" });
//
// var scene3 = new ScrollMagic.Scene({
//     triggerElement: ".skills",
//     triggerHook: "onEnter",
//     duration: "100%"
// })
//     .setPin(".skills")
//     .setTween(timeline)
//     .addTo(controller);

// var frontend = getElementById('id')

anime({
    targets: "#barJS",
    height: "60%",
    easing: "easeInOutQuad"
});
anime({
    targets: "#barCSS",
    height: "70%",
    easing: "easeInOutQuad"
});
anime({
    targets: "#barjquery",
    height: "50%",
    easing: "easeInOutQuad"
});
anime({
    targets: "#barvue",
    height: "40%",
    easing: "easeInOutQuad"
});
anime({
    targets: "#barreact",
    height: "60%",
    easing: "easeInOutQuad"
});
anime({
    targets: "#barredux",
    height: "40%",
    easing: "easeInOutQuad"
});
anime({
    targets: "#baranime",
    height: "70%",
    easing: "easeInOutQuad"
});
anime({
    targets: "#barscroll",
    height: "50%",
    easing: "easeInOutQuad"
});

///////////// ANIMATION PROJECTS --- PRINCIPALS   ////////////

var imageprinc = $(".principalsimage");
var imageproject = $(".imgproject");

imageprinc.on("mouseenter", function(e) {
    $(e.currentTarget).css("opacity", "1");
});

imageprinc.on("mouseleave", function(e) {
    $(e.currentTarget).css("opacity", "0.2");
});

imageproject.on("mouseenter", function(e) {
    $(e.currentTarget).css("opacity", "1");
});

imageproject.on("mouseleave", function(e) {
    $(e.currentTarget).css("opacity", "0.2");
});
