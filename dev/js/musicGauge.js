import { gsap } from "gsap";
export let musicEntryTL = gsap.timeline();

gsap.set("#musicInnerCircle", { transformOrigin: "center center", rotate:"90" });

musicEntryTL
.from("#musicInnerCircle",{ duration: 1.5, drawSVG:0 }, "music")
.from("#musicOuterCircle path",{alpha:0, duration: 1.75, drawSVG:0}, "music")