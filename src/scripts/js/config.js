angular.module("myapp")
	.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/yindao");
		$stateProvider
			.state("yindao",{// 引导页
	            url:"/yindao",
	            templateUrl:"./src/scripts/tpls/yindao.html",
	            controller:"yindao"
	        })
	        .state("home",{ // home 页
	            url:"/home",
	            templateUrl:"./src/scripts/tpls/home.html"
	        })
	         .state("home.home_first",{ // 2级 home的 第一个子路由
	        	url:"/home_first",
	        	templateUrl:"./src/scripts/tpls/home_first.html",
	        	controller:"gz"
	        })


	       .state("home.home_first.home_first_wifi",{// home 3级 热点路由
	        	url:"/wifi",
	        	templateUrl:"./src/scripts/tpls/home_first_wifi.html",
	        	controller:"football"
	        })
	        .state("home.home_first.home_first_gz",{// home 3级 关注路由
	        	url:"/guanzhu",
	        	templateUrl:"./src/scripts/tpls/home_first_gz.html"
	        })




	        .state("home.home_search",{ // 2级 home的 发现 子路由
	        	url:"/home_search",
	        	templateUrl:"./src/scripts/tpls/home_search.html"
	        	
	        })
	        .state("home.home_my",{ // 2级 home的 我的 子路由
	        	url:"/home_my",
	        	templateUrl:"./src/scripts/tpls/home_my.html"
	        	
	        })
	}])