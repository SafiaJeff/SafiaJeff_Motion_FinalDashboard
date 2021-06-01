import { gsap } from "gsap";
export let logoTL = gsap.timeline();


logoTL
//RR scales down
.to("#smallStars",{scale:.25, duration:1.25, alpha:.25, ease: "expo.in"}, "squeeze")
.to("#medStars",{duration:1, scale:.75, alpha:0, ease: "expo.in"}, "squeeze")
.to("#RRLogo",{scale:0, duration:2, alpha:0, ease: "expo.in"}, "-=2")

//Ghost & stars explode out

;