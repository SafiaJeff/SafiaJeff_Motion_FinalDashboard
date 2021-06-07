import { gsap } from "gsap";
export let musicEntryTL = gsap.timeline();

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#musicInnerCircle", { transformOrigin: "center center", rotate:"90" });

musicEntryTL
//circles
.from("#musicInnerCircle",{ duration: 1.5, drawSVG:0 }, "music")
.from("#musicOuterCircle path",{alpha:0, duration: 1.75, drawSVG:0}, "music")

//photo & icons
.from("#simonDominicAlbum",{ duration: 1.5, alpha:0}, "-=.75")
.from("#musicIcons",{ duration: .75, y:"-=20", alpha:0}, "-=1")


;