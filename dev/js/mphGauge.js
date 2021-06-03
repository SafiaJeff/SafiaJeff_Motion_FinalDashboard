import { gsap } from "gsap";
export let mphEntryTL = gsap.timeline();

gsap.set("#mphInnerCircle", { transformOrigin: "center center", rotate:"90" });

mphEntryTL
.from("#mphInnerCircle",{ duration: 1.5, drawSVG:0 }, "mph")
.from("#mphOuterCircle path",{alpha:0, duration: 1.75, drawSVG:0}, "mph")
