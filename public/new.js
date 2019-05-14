let tl = new TimelineMax({ onupdate: updatePercentage });

var controller = new ScrollMagic.Controller();

//////////////////////////////////////////////
//
// tl.from("#home", 0.5, { opacity: 0 });
//
// const scene1 = new ScrollMagic.Scene({
//     triggerElement: "#home",
//     triggerHook: "onLeave",
//     duration: "100%"
// })
//     .setPin("#home")
//     .setTween(tl)
//     .addTo(controller);
//
// function updatePercentage() {
//     tl.progress();
//     console.log("progress", tl.progress());
// }

/////////////////////////////////////////////////

tl.from("#about", 0.5, { x: 200, opacity: 0 });

const scene = new ScrollMagic.Scene({
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
