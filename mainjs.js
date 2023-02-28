function color_Changer(element){

	var x = Math.floor(Math.random()*(0 - 255))*(-1);
	var y = Math.floor(Math.random()*(0 - 255))*(-1);
	var z = Math.floor(Math.random()*(0 - 255))*(-1);
	var final_color = "rgb(" + x + ", " + y + ", " + z + ")"
		element.style.background = final_color;
}

/*	var x = math.floor(math.random()*(0-256));
			var y = math.floor(math.random()*(0-256));
			var z = math.floor(math.random()*(0-256));
			var final_color = "rgb(" + x + ", " + y + ", " + z + ")"
			document.write(final_color);
			
			
			asta era in html*/


/* r255,g0,b0---r255,0,b255---r0,0,b255---r0,255,b255---r0,255,b0---r255,255,b0---r255,0,b0 */
/*  */

/*function rgb_canvas() {
	var r = 255;
	var g = 0;
	var b = 0;
	
	setInterval() */
	
	let r = 255;
	let g = 0;
	let b = 0;
	/*var final_color = "rgb(" + r + ", " + g + ", " + b + ")"*/
		/*myCanvas.style.background = final_color;*/
	
function patratelcolorat(){
	if(r == 255 && g == 0 && b <= 254){
		incrementingb();
	}
	else if(r >=1 && g == 0 && b == 255){
		decrementingr();
	}
	else if(r == 0 && g <= 254 && b == 255){
		incrementingg();
	}
	else if(r == 0 && g == 255 && b >=1){
		decrementingb();
	}
	else if(r <= 254 && g == 255 && b == 0){
		incrementingr();
	}
	else if(r == 255 && g >=1 && b == 0){
		decrementingg();
	}
	var final_color = "rgb(" + r + ", " + g + ", " + b + ")"
	myCanvas.style.background = final_color;
}	
	function incrementing(litera){
		if(litera<=254){
			litera++;
			return litera;
		}
	}
	function incrementingg() {
		g=incrementing(g);
	}

	function incrementingr() {
		r=incrementing(r);
	}

	function incrementingb() {
		b=incrementing(b);
	}


	function decrementing(litera){
		if(litera=>255){
			litera--;
			return litera;
		}
	}
	function decrementingg() {
		g=decrementing(g);
	}

	function decrementingr() {
		r=decrementing(r);
	}

	function decrementingb() {
		b=decrementing(b);
	}


 setInterval(patratelcolorat, 5)	;	
	 

	 
/*function incrementing2() {
	function incrementing(litera){
		if(litera.a<=254){
			litera.a++;
			document.write(litera.a);
		}
	}
	incrementing({a:g});
}  

 object in functie */

 
	 