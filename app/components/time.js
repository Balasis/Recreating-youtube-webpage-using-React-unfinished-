function getZeros(k){
if (k<10){k="0"+ k};
return k;
}



function startTimer(){
const rightNow=new Date();
const hours=rightNow.getHours();
const minutes=rightNow.getMinutes();
const seconds=rightNow.getSeconds();
m=getZeros(minutes);
s=getZeros(seconds);
document.getElementById('Timer').innerHTML=hours+":"+m+":"+s;

const restartIt=setTimeout(startTimer,500);

}


window.onload=startTimer();