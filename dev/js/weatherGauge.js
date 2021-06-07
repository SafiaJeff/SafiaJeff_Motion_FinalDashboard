import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

export let weatherEntryTL = gsap.timeline();

gsap.set("#weatherInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#weatherOuterCircle", { transformOrigin: "center center", rotate:"90" });

weatherEntryTL
//circles
.from("#weatherInnerCircle",{ duration: 1.5, drawSVG:0 }, "weather")
.from("#weatherOuterCircle",{alpha:0, duration: 1.75, drawSVG:0}, "weather")

//degree & icon
.from("#degreetext",{duration: .75, alpha:0, y:"-=20"}, "-=.75")
.from("#dashRainIconGroup",{duration: .75, alpha:0, y:"-=20"}, "-=.75")



;