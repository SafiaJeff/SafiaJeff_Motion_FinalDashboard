import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightPathTL = gsap.timeline();


flightPathTL

.to("#SpaceshipAlien",{duration:5, 
    motionPath: {
        path: "#motionPath",
        align: "#motionPath"
    },

    ease: "power4.out"
});

// MotionPathHelper.create("#SpaceshipAlien")