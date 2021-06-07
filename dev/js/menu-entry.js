import { gsap } from "gsap";
export let menuEntryTL = gsap.timeline();

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);


menuEntryTL
.from("#spiritLogo",{duration:1.5, alpha:0}, "spirit")
.from("#menuLine",{ duration: 1, drawSVG: "50% 50%"}, "spirit")
.from("#menuText",{ duration: .75, alpha:0, y:"-=50"}, "-=1.15")

;