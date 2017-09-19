window.onload=function(){
	//侧导航
	let bannerleft=document.getElementsByClassName('banner-left')[0];
	let bllis=bannerleft.getElementsByTagName('li');
	let item=bannerleft.getElementsByClassName('item');
	for(let i=0;i<bllis.length;i++){
			bllis[i].onmouseover=function(){
			let item=this.getElementsByClassName('item')[0];
			item.style.display='block';
		}
			bllis[i].onmouseout=function(){
			let item=this.getElementsByClassName('item')[0];
			item.style.display='none';
		}
	}
	//banner 按钮
	let banner=$('#banner');
	let bannerimg=document.getElementsByClassName('banner-img')[0];
	let bilis=bannerimg.getElementsByTagName('li');
	let bannerbtn=document.getElementsByClassName('banner-btn')[0];
	let bblis=bannerbtn.getElementsByTagName('li');
	let t;
	t=setInterval(move,3000);
	// let now=0;
	let num=0;
	console.log(bannerbtn)
	console.log(bblis)				
	//banner 自动轮播	
	function move(){
		num++;
		if(num==bilis.length){
			num=0;
		}
		for(let i=0;i<bilis.length;i++){			
			bblis[i].style.background= '#98979B';
			bilis[i].style.opacity=0;
		}		
		bilis[num].style.opacity=1;
		bblis[num].style.background= '#fff';
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,3000);
	}
	//banner 按钮
	//只操作两张图，当前显示的那张与点击下一张
		for(let i=0;i<bblis.length;i++){
			bblis[i].onmouseover=function(){
				for(let i=0;i<bilis.length;i++){
		 		bblis[i].style.background= '#98979B';
		 		bilis[i].style.opacity=0;
		 	  }
		 		bblis[i].style.background= '#fff';
		 		bilis[i].style.opacity=1;
		 		num=i;
		 	}			
	}
	// 右侧固定
	// let serviceRight=document.getElementsByClassName('serviceRight');
	// document.documentElement.clientHeight:300;
}


