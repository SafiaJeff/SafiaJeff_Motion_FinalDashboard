import { gsap } from "gsap";
export let weatherScreenTL = gsap.timeline();

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

weatherScreenTL
//top menu
.from("#topMenuLine",{ duration: 1, drawSVG: "50% 50%"}, "spirit")
.from("#Location",{ duration: .75, alpha:0, y:"+=50"}, "-=1.15")

//small weathers
.from("#AM11",{ duration: .75, alpha:0, y:"+=50"}, "small")
.from("#PM12",{ duration: .75, alpha:0, y:"+=50"}, "small")
.from("#PM1",{ duration: .75, alpha:0, y:"+=50"}, "small")
.from("#PM2",{ duration: .75, alpha:0, y:"+=50"}, "small")
.from("#PM3",{ duration: .75, alpha:0, y:"+=50"}, "small")

//Text
.from("#Slightchanceofrain",{duration: .75, alpha:0, y:"-=20"}, "bigtext")
.from("#AMtextWeather",{duration: .75, alpha:0, y:"-=20"}, "bigtext")
.from("#twentydegree ",{duration: .75, alpha:0}, "bigtext")
.from("#weatherGlow",{ duration: 1, alpha:0}, "-=1")

//Big rain icon
.from("#bigCloud",{duration: 1, drawSVG:0, ease:"none" }, "-=.5")
// onComplete: controlRain
.from("#rainLines path",{duration: 1, alpha:0}, "-=.25")

//Rain Loop

// export let rainLoopTL = gsap.timeline({paused:true});

// rainLoopTL
// .to("#rainEven",{duration:.5, alpha: 0, yoyo:true, repeat:-1},"rain")
// .to("#rainOdd",{duration:.6, alpha: 0, yoyo:true, repeat:-1},"rain")

// function controlRain(){
//     // gsap.set(".flames",{display:"block"});
//     rainLoopTL.play()
// }