import { gsap } from "gsap";
export let circleEntryTL = gsap.timeline();

gsap.set("#mphInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#weatherInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#weatherOuterCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#musicInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#gasInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#gasOuterCircle", { transformOrigin: "center center", rotate:"90" });

circleEntryTL

//MPH Gauge
.from("#mphInnerCircle",{ duration: 1.5, drawSVG:0 }, "mph")
.from("#mphOuterCircle path",{alpha:0, duration: 1.75, drawSVG:0}, "mph")

//Weather Gauge
.from("#weatherInnerCircle",{ duration: 1.5, drawSVG:0 }, "weather")
.from("#weatherOuterCircle",{alpha:0, duration: 1.75, drawSVG:0}, "weather")

//Music Gauge
.from("#musicInnerCircle",{ duration: 1.5, drawSVG:0 }, "music")
.from("#musicOuterCircle path",{alpha:0, duration: 1.75, drawSVG:0}, "music")

//Gas Gauge
.from("#gasInnerCircle",{ duration: 1.5, drawSVG:0 }, "gas")
.from("#gasOuterCircle",{alpha:0, duration: 1.75, drawSVG:0}, "gas")