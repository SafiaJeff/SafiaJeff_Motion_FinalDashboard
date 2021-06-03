
// GSAP Imports
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

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


// Main Timeline
let mainTL = gsap.timeline();

mainTL.add(starsTL);
mainTL.add(logoTL,"-=2");
mainTL.add(logoFadeOutTL);

mainTL.add(menuEntryTL,"-=.05");
mainTL.add(navEntryTL, "-=.75");

mainTL.add(musicEntryTL);
mainTL.add(mphEntryTL);
mainTL.add(weatherEntryTL);
mainTL.add(gasEntryTL);



// DEV Tools
GSDevTools.create();


