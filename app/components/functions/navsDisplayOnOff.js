
document.getElementsByClassName('header__Info__RightMenu__SmallScreenMenu')[0].addEventListener('click',
function(){

const smallNav=document.getElementsByClassName('header__Image__SmallMenu')[0];
const body=document.getElementsByTagName('BODY')[0];
		if ((smallNav.style.display=='none')||(smallNav.style.display=="")){
			smallNav.style.display='flex';
			body.style.overflow="hidden";
			body.scrollTop=0;

		}else{
			smallNav.style.display='none';
			body.style.overflow="initial";
		}


}


	)


document.getElementsByClassName('header__Image__SmallMenu')[0].addEventListener('',function(){






})






function toggleNavList(TheList){

	if ((TheList.nextElementSibling.style.height=='0px')||(TheList.nextElementSibling.style.height=='')){

TheList.nextElementSibling.classList.toggle('AppearSmallNavList');
}

	}




function EnableBodyScrollResize(){


	if (!window.matchMedia('only screen and (max-width:768px)').matches ){
		document.getElementsByTagName('body')[0].style.overflow="initial";

}else if ((window.matchMedia('only screen and (max-width:768px').matches) && (document.getElementsByClassName('header__Image__SmallMenu')[0].style.display=="flex")){
	document.getElementsByTagName('body')[0].scrollTop=0;
	document.getElementsByTagName('body')[0].style.overflow="hidden";
	}	

}

var resizeTimer;

window.onresize = function() {
  clearTimeout(resizeTimer);
  resizeTimer=setTimeout(EnableBodyScrollResize,300);

}
