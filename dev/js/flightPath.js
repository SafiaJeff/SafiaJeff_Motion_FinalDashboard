import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightPathTL = gsap.timeline();


flightPathTL

.to("#SpaceshipAlien",{duration:7, 
    motionPath: {
        path: "#motionPath",
        align: "#motionPath"
    },

    ease: "power4.out"
}, "moonLand")

.fromTo("#Moon", {display:"block", scale: .25, alpha:0, x:50, y:50}, {scale: 10, duration: 3.5, x:"-=300", y:"+=500", alpha:1, ease: "none"}, "moonLand")

;
// MotionPathHelper.create("#SpaceshipAlien")