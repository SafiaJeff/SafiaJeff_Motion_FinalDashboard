import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let zoomOutTL = gsap.timeline();

gsap.set("#moon-left-eye",{transformOrigin:"center center"});

zoomOutTL

.to("#SpaceshipAlien",{duration:3, 
    motionPath: {
        path: "#motionPath2",
        align: "#motionPath2"
    },

    ease: "power1.inOut", scale: .5
}, "byemooncow")

.to("#Moon", {scale: 6, x:"10", y:"-=400", duration: 3, ease: "power1.inOut"}, "byemooncow")
.to("#CowCopy", {scale: 0, x:"300", y:"-=550", duration: 3, ease: "power1.inOut"}, "byemooncow")
.to("#moon-left-eye", {scaleY:.15, duration:.18, delay:.5})
.to("#moon-left-eye", {scaleY:1, duration:.18})

;

// MotionPathHelper.create("#SpaceshipAlien")