import { gsap } from "gsap";
export let mphEntryTL = gsap.timeline();

gsap.set("#mphInnerCircle", { transformOrigin: "center center", rotate:"90" });
// gsap.set("#mphPath2", { transformOrigin: "center center", scaleY: -1});
// gsap.set("#mphPath4", { transformOrigin: "center center", scaleX: -1, scaleY: -1});

mphEntryTL
//circles
.from("#mphInnerCircle",{ duration: 1.5, drawSVG:0 }, "mph")
.from("#mphOuterCircle path",{alpha:0, duration: 1.75, drawSVG:0}, "mph")

//tick marks
.from("#mphGaugeLines path",{ duration: 1, drawSVG:0 })