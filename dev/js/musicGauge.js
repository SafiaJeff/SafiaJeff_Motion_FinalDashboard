import { gsap } from "gsap";
export let musicEntryTL = gsap.timeline();
import $ from "jquery"

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
.from("#scroll",{ duration: 1, y:"-=20", alpha:0, onComplete: controlScroll}, "-=1")
;

export let scrollTL = gsap.timeline({paused:true});
// let scrollTL = gsap.timeline();

let titleWidth = $("#scrollContainer h1").width()
scrollTL.to("#scrollContainer",{x:-titleWidth, repeat:-1, duration:10, ease:"none"});

function controlScroll(){
    // gsap.set(".flames",{display:"block"});
    scrollTL.play()
}

