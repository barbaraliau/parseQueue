var app = angular.module('parseQ');

app.service('parseService', function($http, $q){

	this.postData = function(question){
		return $http({
			method: 'POST',
			url: "https://api.parse.com/1/classes/questions",
			data: {text: question, status: "red"}
		})
	};

	this.getData = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: "https://api.parse.com/1/classes/questions/"
		}).then(function(data){
			var results = data.data.results;
			deferred.resolve(results);
		})
		return deferred.promise;
	};

	this.updateData = function(objectId) {
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: "https://api.parse.com/1/classes/questions/" + objectId,
			data: {status: "yellow"}
		}).then(function(data){
			var results = data.data.results;
			deferred.resolve(results);
		})
		return deferred.promise;
	};

	this.deleteData = function(objectId){
		var deferred = $q.defer();
			$http({
			method: 'DELETE',
			url: "https://api.parse.com/1/classes/questions/" + objectId
		}).then(function(data){
			var results = data.data.results;
			deferred.resolve(results);
		})
		return deferred.promise;
	};
	



});