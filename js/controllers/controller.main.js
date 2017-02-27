;(function (angular) {
	"use strict";
		'use utf-8'
	angular.module('todosMVC.controller.main', ["todosMVC.service.main"])
	.controller('MainController', [
		'$scope',
		'$routeParams',
		'MainService', 
		function($scope,$routeParams,MainService){
			MainService.init();
			//数据
			$scope.data = MainService.get();  
			//添加项
			$scope.addList=function(){
				MainService.addLt($scope.newList);
				$scope.newList="";
			}
			//删除项
			$scope.deleteList=function(id){
				MainService.deleteLt(id)
			}
			//清除已完成
			$scope.clearCompleted=function(){
				$scope.data=MainService.clearCompleted();
				$scope.data=MainService.get();
			}
			//全选
			$scope.selectAll=function(){
				MainService.selectAll();	
			}
			//双击编辑
			$scope.editList=function(id){
				$scope.editId=id;
			}
			//编辑提交
			$scope.editSubmit=function(){
				$scope.editId=null;
			}
			//状态改变
			$scope.selectChange=function(){
				MainService.setData();
			}
			//footer显示
			$scope.$watch('data.length',function(now,old){
				 $scope.footerShow = (now == 0 )? false : true;
			});
			//list选择状态
			$scope.clearShow = function(){
				for(var i=0;i<$scope.data.length;i++){
				if($scope.data[i].completed){
					return false
				}
			}
			return true
			}
			//列表筛选
			$scope.tagStatus={};
			console.log($routeParams);
			console.log($routeParams.status);
			var status=$routeParams.status;
			switch(status){
				case "active":
					$scope.tagStatus={completed:false};
					break;
				case "completed":
					$scope.tagStatus={completed:true};
					break;
				default:
					$scope.tagStatus={};
					break;
			}
		
			

	}]);

})(angular);