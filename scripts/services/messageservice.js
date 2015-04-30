'use strict';

angular.module('chattyApp')
  .factory('MessageService', function MessageService($q, $http) {
    return {
    	getMessages: function(){
    		var dfd = $q.defer();
    		$http({
    			method: "GET",
    			url: "http://localhost:9200"
    		}).then(function(res){
    			dfd.resolve(res);
    			console.log("res", res);
    		}).catch(function(err){
    			console.log("err", err);
    		});
    		return dfd.promise;
    	},
    }
  });
