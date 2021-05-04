import { gsap } from "gsap";

export let cowSpitTL = gsap.timeline();
gsap.set("#CowCopy",{transformOrigin:"center center"});

// gsap.set("#Cow",{zIndex:"10000"});

cowSpitTL

.to("#alienEnergy path",{duration: 2, stagger: .25, display:"block", scale:1, ease: "elastic.out(1, 0.2)"})

.fromTo("#CowCopy",{alpha:0, scale:.25, x:350, y:600},{scale: 1, alpha:1, duration: 4, rotate: 360,  y:"+=200"}, "-=.75")

.to("#alienEnergy path",{duration: .5, stagger: .25, display:"none", scale:0}, "-=1")

