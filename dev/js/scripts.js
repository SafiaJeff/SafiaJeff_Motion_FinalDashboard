
// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

// My Imports
import { zoomTL } from "./zoomIn";
import { midAppearTL } from "./midAppear";
import { skyStartTL } from "./skyStart";
import { cowSuckTL } from "./cowSuck";
import { blastOffTL } from "./blastOff";
import { flightPathTL } from "./flightPath";
import { cowSpitTL } from "./cowSpit";


// Main Timeline
let mainTL = gsap.timeline();

mainTL.add(zoomTL);
mainTL.add(midAppearTL, "-=2.5");
mainTL.add(skyStartTL, "-=3.5");
mainTL.add(cowSuckTL, "-=1");
mainTL.add(blastOffTL, "-=1.5");
mainTL.add(flightPathTL);
mainTL.add(cowSpitTL, "-=.5");


// DEV Tools
GSDevTools.create();