
// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


// My Imports
import { starsTL } from "./stars";
import { logoTL } from "./logo";
import { logoFadeOutTL } from "./logoFadeOut";
import { circleEntryTL } from "./circle-entry";


// Main Timeline
let mainTL = gsap.timeline();

mainTL.add(starsTL);
mainTL.add(logoTL,"-=2");
mainTL.add(logoFadeOutTL);
mainTL.add(circleEntryTL,"-=.05");



// DEV Tools
GSDevTools.create();