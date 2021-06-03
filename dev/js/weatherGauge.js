import { gsap } from "gsap";
export let weatherEntryTL = gsap.timeline();

gsap.set("#weatherInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#weatherOuterCircle", { transformOrigin: "center center", rotate:"90" });

weatherEntryTL
.from("#weatherInnerCircle",{ duration: 1.5, drawSVG:0 }, "weather")
.from("#weatherOuterCircle",{alpha:0, duration: 1.75, drawSVG:0}, "weather")
