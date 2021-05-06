import { gsap } from "gsap";

export let cowSuckTL = gsap.timeline();

gsap.set("#alienEnergy path",{display:"none", scale:0, transformOrigin:"center center"});



cowSuckTL

//suck up cow
.to("#SpaceshipAlien",{duration:.15, rotation:-2, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:2, yoyo: true, repeat:10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:0, ease:"none"})
.to("#SpaceshipAlien",{duration:3.5, y: "-=350", ease: "elastic.out(1, 0.3)"}, "+=.75")
.to("#SpaceshipAlien",{x: "-=180", duration: .5, ease:"none"}, "-=2")
.to("#alienEnergy path",{duration: 2, stagger: .25, display:"block", scale:1, ease: "elastic.out(1, 0.2)"}, "-=.75")
.to("#Cow",{duration:4, scale:.5, opacity:0, rotate: 360, x:"+=100", y:"-=200"}, "-=.75")
// .to("#SpaceshipAlien",{x: "+=250", duration: .5, ease:"none"}, "-=.5")
.to("#alienEnergy path",{duration: .5, stagger: .25, display:"none", scale:0}, "-=1")
.to("#SpaceshipAlien",{duration:3, y:"+=300", ease: "elastic.out(1, 0.5)"})

;