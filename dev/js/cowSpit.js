import { gsap } from "gsap";

export let cowSpitTL = gsap.timeline();

cowSpitTL

.to("#alienEnergy path",{duration: 2, stagger: .25, display:"block", scale:1, ease: "elastic.out(1, 0.2)"})
.to("#Cow",{duration:4, scale:20, opacity:1, rotate: 360, x:"+=10", y:"-=10", zIndex:"2000"}, "-=.75")
.to("#alienEnergy path",{duration: .5, stagger: .25, display:"none", scale:0}, "-=1")

//cow isn't layering properly