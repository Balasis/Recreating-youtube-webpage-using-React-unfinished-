let t=1;
setInterval(function(){

var opacityTimerF=0.9;
var clearMe=setInterval(
function() {
opacityTimerF=opacityTimerF-0.05;
if (opacityTimerF<=0){
clearInterval(clearMe);
}else{
document.getElementById("CurrentImage").style.opacity=opacityTimerF;
}
},100)
setTimeout(function(){
t=t+1;
if (t>=4){
	t=1;
}
document.getElementById('CurrentImage').src="src/Images/img"+t+".png";

var opacityTimer=0;
document.getElementById("CurrentImage").style.opacity="0.0";
var clearMeAlso=setInterval(
function() {
opacityTimer=opacityTimer+0.05;
if (opacityTimer>=1.0){
clearInterval(clearMeAlso);
}else{

document.getElementById("CurrentImage").style.opacity=opacityTimer;
}
},50)
},2100);
document.getElementById("CurrentImage").style.opacity="1.0";

},15000)
