import { gsap } from "gsap";
export let logoTL = gsap.timeline();

gsap.set("#ghostText",{transformOrigin:"center center"});

logoTL
//RR scales down
.to("#smallStars",{scale:.25, duration:1.25, alpha:.25, ease: "expo.in"}, "squeeze")
.to("#medStars",{duration:1, scale:.75, alpha:0, ease: "expo.in"}, "squeeze")
.to("#RRLogo",{scale:0, duration:2, alpha:0, ease: "expo.in"}, "-=2")

//Ghost & stars explode out
.fromTo("#ghostText",{display:"block", alpha:0, scale:0},{scale:1, alpha:1,duration:3, ease: "expo.out"}, "explode")
.to("#smallStars",{scale:1.25, duration:2.75, alpha:1, ease: "expo.out"}, "explode")
.to("#medStars",{duration:3, scale:1.5, alpha:1, ease: "expo.out"}, "explode")

//Everything fades out

;