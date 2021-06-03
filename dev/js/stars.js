import { gsap } from "gsap";

export let starsTL = gsap.timeline();

gsap.set("#logoStars",{transformOrigin:"center center"});
gsap.set("#medStars",{transformOrigin:"center center"});
gsap.set("#smallStars",{transformOrigin:"center center"});
gsap.set("#RRLogo",{transformOrigin:"center center"});


//Stars appear & logo draws in

starsTL
.from("#smallStars circle",{alpha:0, duration:1})
.from("#medStars circle",{alpha:0, duration:1.25, stagger:.02},"-=1")
.from("#RRLogoOutline path",{duration: 1, drawSVG:0, ease:"none"}, "-=3")
.fromTo("#RRLogo",{display:"block", alpha:0},{alpha:1,duration:1}, "-=2.5")
.to("#RRLogoOutline",{stroke:"none"}, "-=2")
;
