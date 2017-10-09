window.onload=function(){
	//nav
	////////////////////////////////////////////////////////////
	let navright=$('.nav-right')[0];		
	let navli=$('li',navright);
	let tb=$('.tb',navright);
	navli[0].onmouseover=function(){
		tb[0].style.display='block';
	}
	navli[0].onmouseout=function(){
		tb[0].style.display='none';
	}
	navli[3].onmouseover=function(){
		tb[1].style.display='block';
	}
	navli[3].onmouseout=function(){
		tb[1].style.display='none';
	}
	navli[7].onmouseover=function(){
		tb[2].style.display='block';
	}
	navli[7].onmouseout=function(){
		tb[2].style.display='none';
	}
	//侧导航
	////////////////////////////////////////////////////////////
	let bannerleft=document.getElementsByClassName('banner-left')[0];
    let bllis=document.querySelectorAll('#banner>aside>.banner-left>li');
	console.log(bllis)
	let item=bannerleft.getElementsByClassName('item');
	for(let i=0;i<bllis.length;i++){
			bllis[i].onmouseover=function(){
			// let item=this.getElementsByClassName('item')[0];
			item[i].style.display='block';
		}
			bllis[i].onmouseout=function(){
			// let item=this.getElementsByClassName('item')[0];
			item[i].style.display='none';
		}
	}
	//banner 按钮
	//////////////////////////////////////////////////////////////
	let banner=$('#banner');
	let bannerimg=document.getElementsByClassName('banner-img')[0];
	let bilis=bannerimg.getElementsByTagName('li');
	let bannerbtn=document.getElementsByClassName('banner-btn')[0];
	let bblis=bannerbtn.getElementsByTagName('li');
	let t;
	t=setInterval(move,3000);
	// let now=0;
	let num=0;				
	//banner 自动轮播	
	//////////////////////////////////////////////////////////////////
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
	  /////////////////////////////////////////////////////////////////
  ///右侧服务
  		// let serviceRight=document.querySelector('.serviceRight');
  		let sRLi=document.querySelectorAll('.serviceRight li a img');
  		let sRbox=document.querySelectorAll('.sRbox');
  		let serviceRight=document.querySelector('.serviceRight');
  		serviceRight.style.height=innerHeight;
	  	// sRbox[1].style.display='none';
	  	sRbox[8].style.display='none';
	  	sRLi[1].style.display='none';
  		for(let i=0;i<sRLi.length;i++){
  				sRLi[i].onmouseover=function(){
	  			sRLi[i].style.backgroundColor='#ff0036';
	  			sRbox[i].style.opacity=1;
	  			sRbox[i].style.right=`${35}px`;
  		      }
	  			sRLi[i].onmouseout=function(){
	  			sRLi[i].style.backgroundColor='#000';
	  			sRbox[i].style.opacity=0;
	  			sRbox[i].style.right=`${80}px`;
	  		  }	
  		  }
	//左边楼层跳转开始
	///////////////////////////////////////////////////////////
	let asideLeft=document.querySelector('.asideLeft');
	let aLli=document.querySelectorAll('.asideLeft li');
	let beautifulbox=document.querySelectorAll('#floor');
	let ch=innerHeight;
	let beautifulArr=[];
	let aLcolor=['#ff0036','green','#ff0036','pink','blue','green','#ff0036','green','#ff0036','blue','#808080'];
	let flag=true;
    asideLeft.style.opacity=0;

	beautifulbox.forEach(element=>{
		beautifulArr.push(element.offsetTop)
	})
		aLli.forEach((element,index)=>{
			element.onclick=function(){
				for(let i=1;i<aLli.length;i++){
					aLli[i].style.background='#808080';
				}
				flag=false;
				element.style.background=aLcolor[index];
				animate(document.body,{scrollTop:beautifulArr[index]},function(){
					flag=true;
				})
			}
			element.onmouseover=function(){
				element.style.background=aLcolor[index];
			}
			element.onmouseout=function(){
				element.style.background='#808080';
			}
	})

		beautifulbox[8].onclick=function(){
			animate(document.body,{scrollTop:0})
		}


		let topNav=document.querySelector('.topNav');

		window.onscroll=function(){
		let scrolltop1=document.body.scrollTop;
		// let pingpai=document.querySelector('.pingpai');

		if(scrolltop1>=600){
			topNav.style.transform=`translateY(${0}px)`;
			animate(asideLeft,{opacity:1});
			sRLi[9].style.opacity=1;
		}
		if(scrolltop1<600){
			topNav.style.transform=`translateY(${-51}px)`;
			animate(asideLeft,{opacity:0})
			sRLi[9].style.opacity=0;
		}
		if(!flag){
			return;
		}
		let scrolltop=document.body.scrollTop;
		beautifulArr.forEach((value,index)=>{
			if(scrolltop+ch>=value+250){
				for(let i=1;i<aLli.length;i++){
				aLli[i].style.background='#808080';
			}
			aLli[index].style.background=aLcolor[index];



	      }
   })
  }

  		}
  		

// }