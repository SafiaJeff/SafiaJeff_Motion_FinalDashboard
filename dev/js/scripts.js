
// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import $ from "jquery"

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


// My Imports
import { starsTL } from "./stars";
import { logoTL } from "./logo";
import { logoFadeOutTL } from "./logoFadeOut";

import { menuEntryTL } from "./menu-entry";
import { navEntryTL } from "./nav-entry";

import { gasEntryTL } from "./gasGauge";
import { musicEntryTL } from "./musicGauge";
import { mphEntryTL } from "./mphGauge";
import { weatherEntryTL } from "./weatherGauge";

import { dashFadeOutTL } from "./dashFadeOut";
import { weatherScreenTL } from "./weatherScreen";


// import $ from "jquery"
// import { speedCounter } from "./speed";

// Main Timeline
let mainTL = gsap.timeline();
// let mainTL = gsap.timeline({paused:true});


mainTL
.add(starsTL, "+=1")
.add(logoTL,"-=2")
.add(logoFadeOutTL)

.add(menuEntryTL,"-=.05")
.add(navEntryTL, "-=.75")

.add(mphEntryTL, "-=.5")
// .addLabel("marker")
.add(musicEntryTL,"-=.25")
.add(gasEntryTL,"-=.5")
.add(weatherEntryTL, "-=.5")

.add(dashFadeOutTL, "+=1")
.add(weatherScreenTL);

// mainTL.play("marker");
// 

//Scroll

// export let scrollTL = gsap.timeline({paused:true});
// // let scrollTL = gsap.timeline();

// let titleWidth = $("#scrollContainer h1").width()
// scrollTL.to("#scrollContainer",{x:-titleWidth, repeat:-1, duration:10, ease:"none"});

// function controlScroll(){
//     // gsap.set(".flames",{display:"block"});
//     scrollTL.play()
// }


// // DEV Tools
// GSDevTools.create(); 

