$(function() {
	var Cn = 0;
	var Cspan = [{t:1.9,l:2.8},{t:3,l:5.7},{t:5.35,l:5.6},{t:7.1,l:5.3},{t:8.3,l:3.3},{t:7.26,l:1.45},{t:5.5,l:1.7},{t:3.1,l:0.85}];
	var Ccolor = ['#1564B0','#01B0B2','#58B206','#8F5206','#5DBDA6','#6A9C28','#7E5F0C','#988060'];
	$('.swiper-container').css({
		width: $(window).width(),
		height: $(window).height()

	});
	
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
			$('<span class="C-span CspanBig" style="background:'+ Ccolor[index] +';border-radius:50%; position:absolute;z-index:50;display:block;width:0.6rem;height:0.6rem;top:'+Cspan[index].t+'rem;left:'+Cspan[index].l+'rem;"></span>').appendTo('.page5');
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
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			if(swiper.activeIndex == 0) {
				$('.page5>img:lt(26)').css('display', 'block');
				$('.C-p1,.C-p2').css('display', 'block');
				setTimeout(function() {
					$('.Cline,#Carc').css('display', 'block');
				}, 4000);
				setTimeout(function() {
					$('#C-click').css('display', 'block');
				}, 7000);
			}
		}
	})
});