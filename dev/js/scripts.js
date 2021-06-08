
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
let mainTL = gsap.timeline();

// let mainTL = gsap.timeline({paused:true});


mainTL.add(starsTL);
mainTL.add(logoTL,"-=2");
mainTL.add(logoFadeOutTL);

mainTL.add(menuEntryTL,"-=.05");
mainTL.add(navEntryTL, "-=.75");

mainTL.add(mphEntryTL, "-=.5");
mainTL.add(musicEntryTL,"-=.25");
mainTL.add(gasEntryTL,"-=.5");
mainTL.add(weatherEntryTL, "-=.5");

mainTL.add(dashFadeOutTL, "+=1");
mainTL.add(weatherScreenTL);


//Scroll
$( document ).ready(function() {
    // let textLength = $("#scrollContainer").width();
    // console.log(textLength + " is the text width");
    gsap.to("#scrollContainer",{duration:4, x:-200, ease:"none", repeat:-1});
});



// DEV Tools
GSDevTools.create(); 