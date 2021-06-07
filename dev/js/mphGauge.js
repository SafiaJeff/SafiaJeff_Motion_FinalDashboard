import { gsap } from "gsap";
export let mphEntryTL = gsap.timeline();

gsap.set("#mphInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#mphIndicatorLine", { transformOrigin: "center center", scaleX: -1, rotate: 114.5});

gsap.set("#mphPath2", { transformOrigin: "right bottom"});
gsap.set("#mphPath4", { transformOrigin: "center center", scaleX: -1, scaleY: -1});

mphEntryTL
//circles
.from("#mphInnerCircle",{ duration: 1.5, drawSVG:0 }, "mph")
.from("#mphOuterCircle path",{alpha:0, duration: 1.75, drawSVG:0}, "mph")

//tick marks & #s
.from("#mphGaugeLines path",{ duration: 1, drawSVG:0}, "-=1")
.from("#navNumbers path",{ duration: 1, alpha:0}, "-=1")

//counter ...

//Indication line
.from("#mphIndicatorLine",{ duration: 1, drawSVG:0}, "-=1")

;