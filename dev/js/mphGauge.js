import { gsap } from "gsap";

// import { speedCounter } from "./speed";
export let mphEntryTL = gsap.timeline();

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#mphInnerCircle", { transformOrigin: "center center", rotate:"90" });
// gsap.set("#mphIndicatorLine", { transformOrigin: "center center", scaleX: -1, rotate: 114.5});

gsap.set("#mphGaugeLines path", { transformOrigin: "center center"});

mphEntryTL
//circles
.from("#mphInnerCircle",{ duration: 1.5, drawSVG:0 }, "mph")
.from("#mphOuterCircle path",{alpha:0, duration: 1.75, drawSVG:0}, "mph")

//tick marks & #s
.from("#mphGaugeLines path",{ duration: 1, scale:0}, "-=1")
// , onComplete: speedCounter
.from("#navNumbers path",{ duration: 1, alpha:0}, "-=1")

//counter ...
.from("#MPHtext",{ duration: .75, y:"-=20", alpha:0}, "-=.75")
.from("#speed",{ duration: .75, y:"-=20", alpha:0}, "-=.75")

// //Indication line
// .from("#mphIndicatorLine",{ duration: 2, drawSVG:0, onStart: startTimer}, "+=1")

;

// // COUNTER

// var counterSpeed = 30;
// var topSpeed = 50;
// var speedNumber = 0;
// var myVar;


// function startTimer(){

//     myVar = setInterval(speedCounter, counterSpeed);
// }

// function speedCounter(){
//     // console.log("counter");
//     if (speedNumber < topSpeed) {
// 		speedNumber++;
// 		document.getElementById("speedTag").innerHTML = speedNumber;
// 	} else {
// 		clearInterval(myVar);
// 	}
// 	return speedNumber;

// }