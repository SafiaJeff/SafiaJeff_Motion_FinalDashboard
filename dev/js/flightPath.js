import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightPathTL = gsap.timeline();

gsap.set("#Stars path",{transformOrigin:"center center"});


flightPathTL

.to("#SpaceshipAlien",{duration:6, 
    motionPath: {
        path: "#motionPath",
        align: "#motionPath"
    },

    ease: "power4.out"
}, "moonLand")

.fromTo("#Moon", {display:"block", scale: 0, x:50, y:50}, {scale: 10, duration: 3.5, x:"-=300", y:"+=500", alpha:1, ease: "none"}, "moonLand")
.fromTo("#Stars", {display:"block", alpha:0}, {duration: 3.5, alpha:1, ease: "none"}, "moonLand")
// .fromTo("#Stars path", {display:"block", alpha:0, stagger:1}, {duration: 3.5, alpha:1, ease: "none"}, "moonLand")
//stars will disappear if using code above. also z-index messed up
;


// MotionPathHelper.create("#SpaceshipAlien")