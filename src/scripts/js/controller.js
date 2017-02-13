function yindao(){ // 引导页
	var mySwiper = new Swiper('.swiper-container',{
    	// 是否循环
		//loop: true,
		// 自动播放
		//autoplay: 2000,
		// 滑动方向 // 横 "vertical"  纵向  "horizontal"
		//direction:"vertical"
        direction:"horizontal"
        //pagination: '.swiper-pagination',
        //paginationClickable: true,
  });
}

function wifi($state){
	$state.go("home.home_first.home_first_wifi");
}

function gz($state){
	$state.go("home.home_first.home_first_wifi");
}

function football($scope,$http){
	$http(
		{
			url:"./livelist.json",
			method:"GET"
		}
	).then(function(data){
		console.log(data.data.data);
		$scope.data=data.data.data;
	})
	
	var mySwiper = new Swiper('.swiper-container',{
    	
		// 滑动方向 // 横 "vertical"  纵向  "horizontal"
		//direction:"vertical"
        direction:"horizontal",
        //pagination: '.swiper-pagination',
        //paginationClickable: true,
        
        onSlideChangeStart:function(swiper){
          // 获取当前下标
          console.log(swiper.activeIndex);
          var ind=swiper.activeIndex;
          $(".home_first_section li").eq(ind).addClass("football_active").siblings().removeClass("football_active");
        }
  });
}

angular.module("myapp")
	.controller("yindao",yindao)
	.controller("wifi",wifi)
	.controller("gz",gz)
	.controller("football",football)