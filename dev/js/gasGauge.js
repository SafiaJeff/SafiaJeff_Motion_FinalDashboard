import { gsap } from "gsap";
export let gasEntryTL = gsap.timeline();


gsap.set("#gasInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#gasOuterCircle", { transformOrigin: "center center", rotate:"90" });

gasEntryTL
.from("#gasInnerCircle",{ duration: 1.5, drawSVG:0 }, "gas")
.from("#gasOuterCircle",{alpha:0, duration: 1.75, drawSVG:0}, "gas")