import { gsap } from "gsap";
export let dashFadeOutTL = gsap.timeline();

var FadeTime = .65

dashFadeOutTL
.to("#mphGaugeGroup",{alpha:0, duration: FadeTime, y:"+=20"}, "fadeout")
.to("#gasGaugeGroup",{alpha:0, duration: FadeTime, y:"+=20"}, "fadeout")
.to("#weatherCircleGroup",{alpha:0, duration: FadeTime, y:"+=20"}, "fadeout")
.to("#musicCircleGroup",{alpha:0, duration: FadeTime, y:"+=20"}, "fadeout")
.to("#navigation",{alpha:0, duration: FadeTime, y:"+=20"}, "fadeout")

.to("#simonDominicAlbum",{alpha:0, duration: FadeTime, y:"+=20"}, "fadeout")
.to("#scroll",{alpha:0, duration: FadeTime, y:"+=20"}, "fadeout")
.to("#speed",{alpha:0, duration: FadeTime, y:"+=20"}, "fadeout")



;