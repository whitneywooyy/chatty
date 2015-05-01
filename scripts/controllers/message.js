'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = ["why"];
    MessageService.getMessages().then(function(res){
    	$scope.messages = res.data;
    	console.log("messages", $scope.messages);
    })
  });
