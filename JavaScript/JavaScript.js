window.onload = function() {

	var Cm = 1;

	var Menu = document.getElementById("MenuImg");
	var Cmenu = document.getElementById("Cmenu");
	var Anim = document.getElementById("MenuIcon");
	var MenuArray = document.getElementsByClassName("MenuItem");
	
	Menu.addEventListener("click", OpenMenu);

	function OpenMenu() {
		if(Cm == 1) {	
			Anim.style.animationName = "spin";
			Cmenu.style.animationName = "open";
			Menu.style.animationName = "ImgPos";
			MenuArray[0].style.visibility = "visible";
			MenuArray[1].style.visibility = "visible";
			MenuArray[2].style.visibility = "visible";
			MenuArray[0].style.animationName = "ItemAnim";
			MenuArray[1].style.animationName = "ItemAnim";
			MenuArray[2].style.animationName = "ItemAnim";
			Cm = 0;
		}

		else {
			Anim.style.animationName = "Rspin";
			Cmenu.style.animationName = "Ropen";
			Menu.style.animationName = "RImgPos";
			MenuArray[0].style.visibility = "hidden";
			MenuArray[1].style.visibility = "hidden";
			MenuArray[2].style.visibility = "hidden";
			MenuArray[0].style.animationName = "RItemAnim";
			MenuArray[1].style.animationName = "RItemAnim";
			MenuArray[2].style.animationName = "RItemAnim";
			Cm = 1;
		}

	}

}