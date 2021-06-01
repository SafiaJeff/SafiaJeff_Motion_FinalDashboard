
// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


// My Imports
import { starsTL } from "./stars";
import { logoTL } from "./logo";


// Main Timeline
let mainTL = gsap.timeline();

mainTL.add(starsTL);
mainTL.add(logoTL,"-=2");



// DEV Tools
GSDevTools.create();