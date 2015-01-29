var app = angular.module('parseQ');

app.controller('MainCtrl', function($scope, parseService){


	parseService.getData().then(function(res){
		$scope.listQuestions = res;
		console.log(res);
	});

	$scope.postData = function() {
		parseService.postData($scope.questionInput).then(function(){
			$scope.listQuestions.push({question: $scope.questionInput});
				$scope.getData();
					$scope.questionInput = "";
		});
	};

	$scope.getData = function(){
		parseService.getData().then(function(res){
			console.log(res);
			$scope.listQuestions = res;
		});
	};

	$scope.changeStatus = function(objectId){
		parseService.updateData(objectId).then(function(){
			$scope.getData();
		})
		
	}

	$scope.deleteQuestion = function(objectId){
		parseService.deleteData(objectId).then(function(){
			$scope.getData();
		})
	}




});

