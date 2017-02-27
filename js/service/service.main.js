;(function (angular) {
	"use strict";
		'use utf-8'
	angular.module('todosMVC.service.main', [])
	.service('MainService', ['$window',function(window){
		var storage = window.localStorage;
		//var data=storage.getItem()
    var data = storage['todo_list'] ? JSON.parse(storage['todo_list']) : [];
		//初始化
		this.init=function(){
			this.addLt=addLt;
			this.deleteLt=deleteLt;
			this.clearCompleted=clearCompleted;
			this.get=get;
			this.setData=setData;
			this.selectAll=selectAll;
		}
		//暴露数据
		var get=function(){
			return data
		}
		//缓存数据
		var setData = function(){
			storage["todo_list"]=JSON.stringify(data);
		}
		//动态生成ID
		var getId = function(){
			var rdm = Math.random().toString();
			for(var i=0;i<data.length;i++){
				if(data[i].id == rdm){
				 	getId()
				}
			}
			return rdm;
		}
		//添加项
		var addLt=function(newList){
			var newDataList={
				id:getId(),
				text:newList,
				completed:false,
				$$hashKey:getId()
			};
			data.push(newDataList);
			setData();
		}
		//删除项
		var deleteLt=function(id){
			for(var i=0;i<data.length;i++){
				if(id==data[i].id){
					data.splice(i,1);
				}
			}
			setData();
		}
		//删除完成
		var clearCompleted=function(){
			/**删不干净  why
			for(var i=0;i<data.length;i++){
				if(data[i].completed){
					data.splice(i,1)
				}
			}
			*/
			var temp = new Array();
			for(var i=0;i<data.length;i++){
				if(!data[i].completed)temp.push(data[i]);
			}
			data = temp
			setData();
			return data
		}
		//全选
		var selectAll=function(){
			if(!isSelectAll()){
				for(var i=0;i<data.length;i++){
					data[i].completed=true;
				}
			}else{
				for(var i=0;i<data.length;i++){
					data[i].completed=false;
				}
			}
			setData();
		}
		//全选状态
		var isSelectAll=function(){
			for(var i=0;i<data.length;i++){
				if(!data[i].completed){
					return false
				}
			}
			return true
		}

	}]);
})(angular);