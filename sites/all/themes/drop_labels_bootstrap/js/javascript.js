console.log("javascript.js - first line");
var playerApp = angular.module("app-player-droplabels", []);

playerApp.controller("ctr-player-droplabels", function($scope, $http, $log, $timeout, $interval){

	$scope.clips = [];


	console.log("javascript.js - line 10 interval function widout checkSource.");




	$scope.sliderSet = function sliderSets(elem) {
		$scope.clips[elem.id] = elem.apiGotenInf;
		$scope.$apply();
		arashSliderDp(".droplabels-" + elem.id + " ");
	};


	$scope.changeSource = function (videoIndex, indexOfObj) {
		console.log("javascript.js - line 60 changeSource function");
		console.log(videoIndex);
		// droplabels.player.playVideoAt(videoIndex);
		droplabelsObjects[indexOfObj].player.playVideoAt(videoIndex);
	};


});


jQuery(document).ready(function(){


}); //end of ready

console.log("javascript.js - Last line");