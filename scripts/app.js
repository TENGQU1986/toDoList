angular.module('myApp', [])
.controller('myCtrl', function($scope){
  $scope.taskitem = "";
  $scope.todolist=[];

  $scope.add = function(){
    $scope.todolist.push($scope.taskitem);
    $scope.taskitem="";
  }
  $scope.del=function(){
    $scope.todolist.splice(this.$index,1);
  }
})
