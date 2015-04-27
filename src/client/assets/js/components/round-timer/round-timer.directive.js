(function () {
	'use strict';

	angular
		.module('round-timer')
		.directive('roundTimer', RoundTimer);

	function RoundTimer() {
		return {
			restrict: 'E',
			templateUrl: 'components/round-timer/round-timer.directive.html',
			controller: RoundTimerCtrl,
			controllerAs: 'RoundTimerCtrlVm'
		};
	}

	function RoundTimerCtrl() {
		var vm = this;
	}

})();