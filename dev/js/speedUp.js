import { gsap } from "gsap";
export let speedUpTL = gsap.timeline();

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#mphIndicatorLine", { transformOrigin: "center center", scaleX: -1, rotate: 114.5});

speedUpTL
//Indication line
.from("#mphIndicatorLine",{ duration: 2, drawSVG:0, onStart: startTimer}, "+=1")


// COUNTER

var counterSpeed = 30;
var topSpeed = 50;
var speedNumber = 0;
var myVar;


function startTimer(){

    myVar = setInterval(speedCounter, counterSpeed);
}

function speedCounter(){
    // console.log("counter");
    if (speedNumber < topSpeed) {
		speedNumber++;
		document.getElementById("speedTag").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;

}