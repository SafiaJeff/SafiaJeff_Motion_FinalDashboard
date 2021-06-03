import { gsap } from "gsap";
export let gasEntryTL = gsap.timeline();


gsap.set("#gasInnerCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#gasOuterCircle", { transformOrigin: "center center", rotate:"90" });
gsap.set("#gasGaugeLines path", { transformOrigin: "center center", scaleX: -1, scaleY:-1});

gasEntryTL
//circles
.from("#gasInnerCircle",{ duration: 1.5, drawSVG:0 }, "gas")
.from("#gasOuterCircle",{alpha:0, duration: 1.75, drawSVG:0}, "gas")

//tick marks & #s
.from("#gasGaugeLines path",{ duration: 1, drawSVG:0}, "-=.5")
.from("#gasNum",{ duration: 1, alpha:0}, "-=1")

//line & stars
.from("#gasLine",{ duration: .75, alpha:0, drawSVG: "50% 50%", y:"+=30"}, "-=.5")
.from("#gasStars circle",{alpha:0, duration:.5, stagger:.01, y:"+=10"},"-=.5")


;