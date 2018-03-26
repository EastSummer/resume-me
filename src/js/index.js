

var swiperAnimateCache = require("exports?swiperAnimateCache!./swiper.animate1.0.2.min.js");
var swiperAnimate = require("exports?swiperAnimate!./swiper.animate1.0.2.min.js");


//音乐
document.querySelector(".music").addEventListener("touchend",function(e){
	e.preventDefault();
	var auto = document.querySelector("#car_audio");
	var music_open = document.querySelector(".music_open");
	var music_close = document.querySelector(".music_close");
	if(!auto.paused){
		auto.pause();
		music_open.style.display = "none";
		music_close.style.display = "block";
	}else{
		auto.play();
		music_open.style.display = "block";
		music_close.style.display = "none";
	}
},false);





var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	pagination: '.swiper-pagination',
	//动画
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
}) 