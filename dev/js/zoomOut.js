import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let zoomOutTL = gsap.timeline();

zoomOutTL

.to("#SpaceshipAlien",{duration:3, 
    motionPath: {
        path: "#motionPath2",
        align: "#motionPath2"
    },

    ease: "power1.inOut", scale: .5
}, "byemooncow")

.to("#Moon", {scale: 6, x:"10", y:"-=300", duration: 3, ease: "power1.inOut"}, "byemooncow")

;

// MotionPathHelper.create("#SpaceshipAlien")