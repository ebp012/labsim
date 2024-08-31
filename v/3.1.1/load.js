if (!String.prototype.replaceAll) {
	String.prototype.replaceAll = function(str, newStr){
		if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
			return this.replace(str, newStr);
		}
		return this.replace(new RegExp(str, 'g'), newStr);
	};
}


window.addEventListener("load",function(){
	console.log("Loading done successfully. It may take a moment for the elements to get loaded. Please hang tight.")
	pauseStats = false;
	focusStats = false;
	var pix = 0;
	var theGame = document.getElementById("canvasDiv");
	theGame.style.filter="blur(3px)";
	var ta;
	ta = 20;
})
