function check(e)
{
	setInterval(test(e),20);
}
	function test(e)
{	var a=e.clientX;
	var b=e.clientY;
	var w=screen.width;
	var h=screen.height;
	var x=w/2-a;
	var y=h/2-b;
	var i=0;
 	pix=document.querySelectorAll("img[data-depth]");
 	for(i=0; i<11; i++)
 	{
    pix[i].style.marginRight=pix[i].dataset["depth"]*Math.sign(x) * Math.sqrt(Math.abs(x)) * 8+"px";
    pix[i].style.marginBottom=pix[i].dataset["depth"]*Math.sign(y) * Math.sqrt(Math.abs(y)) * 8+"px";
	}

}

function clearCoor()
{
	document.getElementById("test").style.margin="0px";
}

function button()
{
	alert("Mru is amazing :)")
}	

