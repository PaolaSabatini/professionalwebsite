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

var skills = $(".skills");

skills.on("mouseenter", function(e) {
    $(".frontend").css("opacity", "1");
});

skills.on("mouseenter", function(e) {
    $(".backend").css("opacity", "1");
});
///////////// ANIMATION PROJECTS --- PRINCIPALS   ////////////

var imageprinc = $(".principalsimage");
var imageproject = $(".imgproject");
var close = $(".close");

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

$("#socialnetworkimage").on("click", function(e) {
    $("#aboutsocialnetwork").css("visibility", "visible");
});

$("#imageboardimage").on("click", function(e) {
    $("#aboutimageboard").css("visibility", "visible");
});

$("#petitionimage").on("click", function(e) {
    $("#aboutpetition").css("visibility", "visible");
});

close.on("click", function(e) {
    $(e.currentTarget)
        .closest(".aboutproject")
        .css("visibility", "hidden");
});
