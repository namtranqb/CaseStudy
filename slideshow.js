let index = 1;
changeImage = function(){
	let imgs = ["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg","image/10.jpg","image/11.jpg","image/12.jpg","image/13.jpg","image/15.jpg","image/16.jpg","image/17.jpg","image/18.jpg","image/19.jpg","image/20.jpg","image/21.jpg","image/14.jpg"];
	document.getElementById('img_s').src = imgs[index];
	index ++;
	if(index == 21){
		index = 1;
	}
}
setInterval(changeImage,2000);