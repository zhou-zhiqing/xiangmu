function $id(id){
	return document.getElementById(id);
}
 $id("box").onmouseenter = function(){
 	$id("mask").style.display = "block"; 
 	$id("big").style.display = "block";
 }
 $id("box").onmouseleave = function(){
 	$id("mask").style.display = "none";
 	$id("big").style.display = "none";
 }
 $id("box").onmousemove = function(e){
 	var e = e || event;
 	var stop = document.documentElement.scrollTop;
 	var l = e.clientX - $id("box").offsetLeft - $id("mask").offsetWidth/2;
 	var t = e.clientY - $id("box").offsetTop - $id("mask").offsetHeight/2 + stop;
 	var maxL = $id("box").clientWidth - $id("mask").offsetWidth;
 	var maxT = $id("box").clientHeight - $id("mask").offsetHeight;
 	l = l < 0 ? 0:(l > maxL ? maxL:l);
 	t = t < 0 ? 0:(t >maxT ? maxT:t);
    $id("mask").style.left = l + "px";
    $id("mask").style.top = t + "px";
	$id("bigImg").style.left = -l * ($id("bigImg").offsetWidth/$id("small").offsetWidth) + "px";
 	$id("bigImg").style.top  = -t * $id("bigImg").offsetHeight/$id("small").offsetHeight + "px";
 }
