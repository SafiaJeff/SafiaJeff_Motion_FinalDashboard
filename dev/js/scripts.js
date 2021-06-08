
// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import $ from "jquery"

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
// let mainTL = gsap.timeline();
let mainTL = gsap.timeline({paused:true});


mainTL
.add(starsTL)
.add(logoTL,"-=2")
.add(logoFadeOutTL)

.add(menuEntryTL,"-=.05")
.add(navEntryTL, "-=.75")

.add(mphEntryTL, "-=.5")
.addLabel("marker")
.add(musicEntryTL,"-=.25")
.add(gasEntryTL,"-=.5")
.add(weatherEntryTL, "-=.5")

.add(dashFadeOutTL, "+.add(weatherScreenTL);

mainTL.play("marker");


//Scroll
// $( document ).ready(function() {
//     // let textLength = $("#scrollContainer").width();
//     // console.log(textLength + " is the text width");
//     gsap.to("#scrollContainer",{duration:4, x:-200, ease:"none", repeat:-1});
// });

// let scrollTL = gsap.timeline();

let titleWidth = $("h1").width()
// console.log(titleWidth); 
// width is 283px

scrollTL.to("#container",{x:-titleWidth, repeat:-1, duration:3, ease:"none"});

// // DEV Tools
// GSDevTools.create(); 