let index = 1;
changeImage = function(){
	let imgs = ["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg"];
	document.getElementById('img_s').src = imgs[index];
	index ++;
	if(index == 9){
		index = 1;
	}
}
setInterval(changeImage,2000);