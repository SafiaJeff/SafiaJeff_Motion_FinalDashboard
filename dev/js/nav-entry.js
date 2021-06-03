import { gsap } from "gsap";
export let navEntryTL = gsap.timeline();

gsap.set("#navLineL", { transformOrigin: "center center", scaleX: -1, scaleY: -1});
gsap.set("#navLineLcopy", { transformOrigin: "center center", scaleX: -1, scaleY: -1});
gsap.set("#navCenterLine", { transformOrigin: "center center", scaleX: -1, scaleY: -1});

navEntryTL

//nav lines draw in
.from("#navLineL",{ duration: .75, drawSVG:0}, "sidelines")
.from("#navLineR",{ duration: .75, drawSVG:0}, "sidelines")
.from("#navCenterLine",{ duration: .75, drawSVG:0}, "sidelines")

//?? Line that shoots across...
.fromTo("#navLineLcopy",{drawSVG:"0% 10%"},{ duration:.75, drawSVG:"90% 100%"},"-=.5")

//nav arrow comes in
.from("#navArrow",{ duration: 1, alpha:0, y:"+=50"}, "-=.7")
.from("#navGlow",{ duration: 1, alpha:0, y:"+=50"}, "-=1")




