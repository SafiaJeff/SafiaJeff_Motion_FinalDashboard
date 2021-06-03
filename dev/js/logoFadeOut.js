import { gsap } from "gsap";
export let logoFadeOutTL = gsap.timeline();



logoFadeOutTL
//Everything fades out
.to("#ghostText", {scale:1.75, alpha:0,duration:.75, ease: "expo.in"}, "fadeOut")
.to("#smallStars",{scale:1.75, alpha:0,duration:.5, ease: "expo.in"}, "fadeOut")
.to("#medStars",{scale:1.75, alpha:0,duration:.5, ease: "expo.in"}, "fadeOut")
;