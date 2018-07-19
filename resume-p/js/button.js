function cut(){
	var cssName=document.getElementById("cut");
	if(cssName.getAttribute("href")=="css/rStyle1.css")
	{
		cssName.setAttribute("href","css/rStyle2.css");
	}
	else
	{
		cssName.setAttribute("href","css/rStyle1.css");
	}
}