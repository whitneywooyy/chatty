'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];
    MessageService.getMessages().then(function(res){
    	$scope.messages = res.data;
    })
  });
