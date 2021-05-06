import { gsap } from "gsap";

export let blastOffTL = gsap.timeline();

gsap.set("#Stars path",{transformOrigin:"center center"});


blastOffTL
.to("#SpaceshipAlien",{duration:.15, rotation:-2, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:2, yoyo: true, repeat:10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:0, ease:"none"})
.to("#SpaceshipAlien",{duration:3, y:"-=100"}, "upAndAway")
.to("#Clouds path",{duration: 2, alpha:0, y:"+=100"}, "upAndAway")
.to("#Sun",{duration: 2, alpha:0, y:"+=100"}, "upAndAway")
.to("#Foreground",{duration:2, y:"+=600", ease: "power3.in"}, "upAndAway")
.to("#MiddleGround",{duration:2, y:"+=500", ease: "power3.in"}, "upAndAway")
.to("#Ground",{duration:2, y:"+=700", ease: "power3.in"}, "upAndAway")
.to("#Trees",{duration:2, y:"+=800", ease: "power3.in"}, "upAndAway")
.to("#SkyColor",{duration:2, fill:"#2F4858", ease: "power3.in"}, "upAndAway")
.fromTo("#Stars g",{display:"block", alpha:0}, {duration:1, stagger:0.25, alpha:1, ease:"none"}, "-=1")

;