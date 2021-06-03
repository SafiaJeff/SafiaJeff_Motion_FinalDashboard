import { gsap } from "gsap";
export let logoTL = gsap.timeline();

gsap.set("#ghostText",{transformOrigin:"center center"});

logoTL
//RR scales down
.to("#smallStars",{scale:.25, duration:.75, alpha:.25, ease: "expo.in"})
.to("#medStars",{duration:1, scale:.5, alpha:0, ease: "expo.in"}, "-=1")
.to("#RRLogo",{scale:0, duration:1, alpha:0, ease: "expo.in"}, "-=1")

//Ghost & stars explode out
.fromTo("#ghostText",{display:"block", alpha:0, scale:0},{scale:1, alpha:1,duration:.75, ease: "slow(0.7, 0.7, false)"}, "explode")
.to("#smallStars",{scale:1, duration:1.5, alpha:1, ease: "slow(0.7, 0.7, false)"}, "explode")
.to("#medStars",{duration:1.2, scale:1.5, alpha:1,ease: "slow(0.7, 0.7, false)"}, "explode")

;