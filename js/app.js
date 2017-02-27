(function (angular) {
	'use strict';
	'use charset utf-8'
	// Your starting point. Enjoy the ride!
	/**
	*  Module
	*	
	* Description
	*/
	var MainApp = angular.module('todosMVC.main', ["ngRoute","todosMVC.controller.main"]);
	//配置路由
	MainApp.config(["$routeProvider",function($routeProvider){
		$routeProvider
			.when('/#%2F:status',{
				templateUrl:"main_tmpl",
				controller:"MainController"
			})
			.otherwise({
				redirectTo:"/"
			});
	}]);	

})(angular);
/**
1.为什么splice删除列表项，删不干净
2.url地址乱码问题

*/
