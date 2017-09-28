$(function() {
	$('#mark').css({
		width: $(window).width(),
		height: $(window).height(),
		zIndex:10000
	});
	$(document).on('touchstart', function(e) {
		e.preventDefault();
	});

	var arr = [
		'img/bg.png',
		'img/C-2-1.png',
		'img/C-2-2.png',
		'img/C-5-1.png',
		'img/C-5-10.png',
		'img/C-5-11.png',
		'img/C-5-12.png',
		'img/C-5-13.png',
		'img/C-5-14.png',
		'img/C-5-15.png',
		'img/C-5-16.png',
		'img/C-5-17.png',
		'img/C-5-18.png',
		'img/C-5-19.png',
		'img/C-5-2.png',
		'img/C-5-20.png',
		'img/C-5-21.png',
		'img/C-5-22.png',
		'img/C-5-23.png',
		'img/C-5-24.png',
		'img/C-5-25.png',
		'img/C-5-26.png',
		'img/C-5-27.png',
		'img/C-5-28.png',
		'img/C-5-3.png',
		'img/C-5-4.png',
		'img/C-5-5.png',
		'img/C-5-6.png',
		'img/C-5-7.png',
		'img/C-5-8.png',
		'img/C-5-9.png',
		'img/C-AllLine.png',
		'img/C-AllLine2.png',
		'img/C-bg.png',
		'img/C-close.png',
		'img/C-left.png',
		'img/C-line.png',
		'img/C-music.png',
		'img/C-next.png',
		'img/C-P-5-1.png',
		'img/C-P-5-10.png',
		'img/C-P-5-2.png',
		'img/C-P-5-3.png',
		'img/C-P-5-4.png',
		'img/C-P-5-5.png',
		'img/C-P-5-6.png',
		'img/C-P-5-7.png',
		'img/C-P-5-8.png',
		'img/C-P-5-9.png',
		'img/C-p1.png',
		'img/C-p2.png',
		'img/C-p3.png',
		'img/C-p4.png',
		'img/C-p5.png',
		'img/C-p6.png',
		'img/C-p7.png',
		'img/C-p8.png',
		'img/C-right.png',
		'img/l1.png',
		'img/l2.png',
		'img/l21.png',
		'img/l22.png',
		'img/l23.png',
		'img/l24.png',
		'img/l25.png',
		'img/l26.png',
		'img/l27.png',
		'img/l3.png',
		'img/l31.png',
		'img/l32.png',
		'img/l33.png',
		'img/l34.png',
		'img/l35.png',
		'img/l36.png',
		'img/l37.png',
		'img/l39.png',
		'img/l4.png',
		'img/l40.png',
		'img/l41.png',
		'img/l42.png',
		'img/l5.png',
		'img/l51.png',
		'img/l52.png',
		'img/l53.png',
		'img/l54.png',
		'img/l55.png',
		'img/l56.png',
		'img/l57.png',
		'img/l6.png',
		'img/l61.png',
		'img/l611.png',
		'img/l612.png',
		'img/l613.png',
		'img/l614.png',
		'img/l615.png',
		'img/l62.png',
		'img/l63.png',
		'img/l64.png',
		'img/l65.png',
		'img/l66.png',
		'img/l67.png',
		'img/l68.png',
		'img/l69.png',
		'img/l7.png',
		'img/l8.png',
		'img/lb.gif',
		'img/p-dream.png',
		'img/p-maker.png',
		'img/p-music.png',
		'img/p-page9.gif',
		'img/p-page901.png',
		'img/p-page902.png',
		'img/p-page903.png',
		'img/p-page904.png',
		'img/p-page905.png',
		'img/p-page906.png',
		'img/p-page907.png',
		'img/p-page908.png',
		'img/s12015.png',
		'img/s1bg.png',
		'img/s1blue.png',
		'img/s1D.png',
		'img/s1E.png',
		'img/s1gray.png',
		'img/s1green.png',
		'img/s1leftgray.png',
		'img/s1light1.png',
		'img/s1light2.png',
		'img/s1M.png',
		'img/s1MAKER.png',
		'img/s1music.png',
		'img/s1R.png',
		'img/s1red.png',
		'img/s1redbg.png',
		'img/s1tra.png',
		'img/s1white.png',
		'img/s1yellow.png',
		'img/s1流星1.png',
		'img/s1流星2.png',
		'img/s1流星3.png',
		'img/sbt.png',
		'img/topdir.png',
		'img/w-bj.png',
		'img/w-bj2.png',
		'img/w-exit.png',
		'img/w-light01.png',
		'img/w-light02.png',
		'img/w-light03.png',
		'img/w-light04.png',
		'img/w-light05.png',
		'img/w-light06.png',
		'img/w-light07.png',
		'img/w-light08.png',
		'img/w-light09.png',
		'img/w-light10.png',
		'img/w-line.png',
		'img/w-line2.png',
		'img/w-lmw.png',
		'img/w-more.png',
		'img/w-tx01.png',
		'img/w-tx02.png',
		'img/w-tx03.png',
		'img/w-tx04.png',
		'img/w-tx05.png',
		'img/w-tx06.png',
		'img/w-tx07.png',
		'img/w-tx08.png',
		'img/w-tx09.png',
		'img/w-tx10.png',
		'img/w-word.png',
		'img/w-word2.png',
		'diqiu/1.jpg',
		'diqiu/2.jpg',
		'diqiu/3.jpg',
		'diqiu/4.jpg',
		'diqiu/5.jpg',
		'diqiu/6.jpg',
		'diqiu/7.jpg',
		'diqiu/8.jpg',
		'diqiu/9.jpg',
		'diqiu/10.jpg',
		'diqiu/11.jpg',
		'diqiu/12.jpg',
		'diqiu/13.jpg',
		'diqiu/14.jpg',
		'diqiu/15.jpg',
		'diqiu/16.jpg',
		'diqiu/17.jpg',
		'diqiu/18.jpg',
		'diqiu/19.jpg',
		'diqiu/20.jpg',
		'diqiu/21.jpg',
		'diqiu/22.jpg',
		'diqiu/23.jpg',
		'diqiu/24.jpg',
		'diqiu/25.jpg',
		'diqiu/26.jpg',
		'diqiu/27.jpg',
		'diqiu/28.jpg',
		'diqiu/29.jpg',
		'diqiu/30.jpg',
		'diqiu/31.jpg',
		'diqiu/32.jpg',
		'diqiu/33.jpg',
		'diqiu/34.jpg',
		'diqiu/35.jpg',
		'diqiu/36.jpg',
		'diqiu/37.jpg',
		'diqiu/38.jpg',
		'diqiu/39.jpg',
		'diqiu/40.jpg',
		'diqiu/41.jpg',
		'diqiu/42.jpg',
		'diqiu/43.jpg',
		'diqiu/44.jpg',
		'diqiu/45.jpg',
		'diqiu/46.jpg',
		'diqiu/47.jpg'
	];
	var imgLeng = 0;
	var imgs = [];
	var ldtimer = null;
	var loadfont = ['Loading...','Loading..','Loading.','Loading'];
	var ld = 3;
	ldtimer = setInterval(function(){
		ld--;
		if(ld<-1){
			ld = 3;
		}
		$('#Ld').html(loadfont[ld]);
	},500);
	setTimeout(function() {
		for(var i = 0; i < arr.length; i++) {
			var makeImg = new Image();
			makeImg.src = arr[i];
			makeImg.onload = function() {
				imgs.push(this);
				$('#jdtNum').html(parseInt(imgs.length * 100 / arr.length) + '%');
				if(imgs.length == arr.length) {
					$('#jdtNum').html('100%');
					setTimeout(function() {
						$('#mark').remove();
						clearInterval(ldtimer);
						$('.swiper-wrapper').css('display','block');
						allCont();
					}, 300);
				}
			}
		}
	}, 500);
	
	function allCont(){
		var Cn = 0;
		var Cspan = [{t:1.9,l:2.8},{t:3,l:5.7},{t:5.35,l:5.6},{t:7.1,l:5.3},{t:8.3,l:3.3},{t:7.26,l:1.45},{t:5.5,l:1.7},{t:3.1,l:0.85}];
		var Ccolor = ['#1564B0','#01B0B2','#58B206','#8F5206','#5DBDA6','#6A9C28','#7E5F0C','#988060'];
		$('.swiper-container').css({
			width: $(window).width(),
			height: $(window).height()
	
		});
		
		//音乐
		$('#audio1').get(0).play();
		var flag1 = true;
		$('.C-music').on('touchstart', function() {
			flag1 = !flag1;
			if(flag1) {
				$('#audio1').get(0).play();
				$('.C-music').css('animation', 'C-music 3s 0s linear infinite');
			} else {
				$('#audio1').get(0).pause();
				$('.C-music').css('animation-play-state', 'paused');
			}
		});
		
		//页面5
		$(".C-click-P").on('touchstart', function() {
			$(".C-click-P").css({animationDuration: '0s',animationDelay: '0s',width:'1rem'});
			$('#C-close').fadeIn(800);
			setTimeout(function(){
				$('#C-prev_btn,#C-next_btn').show();
				$('#C-outer').show().addClass('CouterBig');
				setTimeout(function(){
					$('#C-outer').removeClass('CouterBig');
				},500);
			},300);
			
			Cn = $(this).index() - 2;
			tab();
			$('#C-click,.C-p1,.C-p2,.C-click-P').css('display', 'none');
			$(".C-click-P").each(function(index){
				$('<span class="C-span CspanBig" style="background:'+ Ccolor[index] +';border-radius:50%; position:absolute;z-index:50;display:block;width:0.6rem;height:0.6rem;top:'+Cspan[index].t+'rem;left:'+Cspan[index].l+'rem;"></span>').appendTo('.page4');
			});
			setTimeout(function(){
				$('.C-span').removeClass('CspanBig').addClass('Cspansmall');
			},200);
			
			
		});
	
		$('#C-close').on('touchstart', function() {
	//		$('#C-outer,#C-close').fadeOut(500);
			$('#C-close').fadeOut(500);
			$('#C-prev_btn,#C-next_btn').hide();
			$('#C-outer').addClass('Coutersmall');
			setTimeout(function(){
				$('#C-outer').hide().removeClass('Coutersmall');
			},500);
			$('.C-span').remove();
			$('.C-click-P').fadeIn(800);
		});
		
		/*页面1*/
		var liux = null;
		$('.s2015').css('display','block');
		setTimeout(function(){
			$('.s1light1,.s1light2').css('display','block');
		},3600);
		function liuxing(){
			liux = setInterval(function(){
				$('.liuxing1,.liuxing2,.liuxing3').css('display','block');
				setTimeout(function(){
					$('.liuxing1,.liuxing2,.liuxing3').css('display','none');
				},1000);
			},5000);
		}
		liuxing();
		
		/*第九页*/
		$('#bright').click(function(){
		    $('.copy').slideDown(1000);
		    $('#bright').css({
		      display:'none'
		    });
	 	});
	
		/*轮播*/
		$('#C-inner').css('width', $('#C-inner>img').length * $('#C-inner>img').eq(0).width());
		switchImg();
	
		function next() {
			Cn++;
			if(Cn == $('#C-inner>img').length) {
				Cn = 1;
				$('#C-inner').css('left', 0);
			}
			tab();
		}
	
		function prev() {
			Cn--;
			if(Cn < 0) {
				Cn = $('#C-inner>img').length - 2;
				$('#C-inner').css('left', -$('#C-inner>img').eq(0).width() * ($('#C-inner>img').length - 1));
			}
			tab();
		}
	
		function tab() {
	
			$('#C-inner').animate({
				left: -$('#C-inner>img').eq(0).width() * Cn
			}, 300, function() {
				$("#C-next_btn").unbind('touchstart').one('touchstart', function() {
					next();
				}).siblings('#C-prev_btn').unbind('touchstart').one('touchstart', function() {
					prev();
				});
			});
		}
	
		function switchImg() {
	
			$("#C-next_btn").one('touchstart', function() {
				next();
			}).siblings("#C-prev_btn").one('touchstart', function() {
				prev();
			});
		}
		
		//swiper
		var timer1 = null;
		var diqiuNum = 0;
		var P5Judge = true;
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'vertical',
			onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
				swiperAnimateCache(swiper); //隐藏动画元素 
				swiperAnimate(swiper); //初始化完成开始动画
			},
			onSlideChangeEnd: function(swiper) {
				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			
				if(swiper.activeIndex == 0){
					$('.box1').css('display','block');
					setTimeout(function(){
						$('.s1light1,.s1light2').css('display','block');
					},3600);
					liuxing();
				}else{
					$('.box1,.s1light1,.s1light2').css('display','none');
					clearInterval(liux);
				}
				
				if(swiper.activeIndex == 1) {
					timer1 = setInterval(function(){
						diqiuNum++;
						if(diqiuNum>47){
							diqiuNum = 1;
						}
						$('#box img').eq(diqiuNum).show().siblings().hide();
					},100);
				}else{
					clearInterval(timer1);
				}
				
				var timer2 = null;
				if(swiper.activeIndex == 2) {
					var Cpage3Arr1 = [-1, 1];
					var C1Arr = [];
					var C2Arr = [];
					timer2 = setInterval(function(){
						$('.C-page3').each(function(index){
							C1Arr.push($('.C-page3').eq(index).position().top);
							C2Arr.push($('.C-page3').eq(index).position().left);
							
							$('.C-page3').eq(index).animate({
								
								top: $('.C-page3').eq(index).position().top - 15 * Cpage3Arr1[Math.floor(Math.random() * 2)] + 'px',
								left: $('.C-page3').eq(index).position().left - 15 * Cpage3Arr1[Math.floor(Math.random() * 2)] + 'px'
							},2000);
							setTimeout(function(){
								$('.C-page3').eq(index).animate({
									top: C1Arr[index] + 'px',
									left: C2Arr[index] + 'px'
								},2000);
							},2500);
							
						});
					},100);
				}else{
					clearInterval(timer2);
				}
				
				if(swiper.activeIndex == 3) {
					$('.page4>img:lt(26)').css('display', 'block');
					$('.C-p1,.C-p2').css('display', 'block');
					setTimeout(function() {
						$('.Cline,#Carc').css('display', 'block');
					}, 4000);
					setTimeout(function() {
						$('#C-click').css('display', 'block');
					}, 7000);
				}
				
				if(swiper.activeIndex == 4) {
					
					if(P5Judge){
						$('.p5p i').each(function(index){
							setTimeout(function(){
								$('.p5p i').eq(index).animate({height:0},1000);
								setTimeout(function(){
									$('.p5p').eq(index).animate({top:$('.p5p').eq(index).offset().top/50 - 0.2+'rem',left:$('.p5p').eq(index).offset().left/50 - 0.1 + 'rem'},700);
								},500+index*100+index*20);
							},500+index*100);
							setTimeout(function(){
								$('.P5Click').css('display','block');
								P5Judge = false;
							},3000);
						});
					}
					
					$('.Cpjs').each(function(index){
						$('.Cpjs').eq(index).css({
							top: $('.wl').eq(index).offset().top / 50 + 0.3 + 'rem',
							left: $('.wl').eq(index).offset().left / 50 + 0.4 + 'rem'
						});
					});
					$('.p5p').on('touchstart',function(){
						var Cpjsindex = $(this).index();
						setTimeout(function(){
							$('.P5Click').css('display','none');
							$('#C-5-Close').css('display','block').on('touchstart',function(){
								$('.Cpjs').eq(Cpjsindex).css({transform:'rotateZ(16deg)'}).animate({
									width:'1.5rem',
									top: $('.wl').eq(Cpjsindex).offset().top / 50 + 0.3 + 'rem',
									left: $('.wl').eq(Cpjsindex).offset().left / 50 + 0.4 + 'rem'
								},500,function(){
									$('.Cpjs').eq(Cpjsindex).css('display','none');
								});
							});
							
							$('.Cpjs').eq(Cpjsindex).css({display:'block',transform:'rotateZ(0deg)'}).animate({
								width:'6.55rem',
								top:'0.1rem',
								left:'0.45rem'
							},500);
						},200);
						
					});
				}
				if(swiper.activeIndex=='6'){
	    			$('.curve').delay(1500).slideDown(1500);
	    		}
	
			}
		});
	}

});