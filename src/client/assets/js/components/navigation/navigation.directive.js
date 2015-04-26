(function () {
	'use strict';

	angular
		.module('navigation')
		.directive('navigation', Navigation);

	function Navigation() {
		return {
			restrict: 'E',
			templateUrl: 'components/navigation/navigation.directive.html',
			controller: NavigationCtrl,
			controllerAs: 'navigationCtrlVm',
			scope: {
				session: '='
			}
		};
	}

	function NavigationCtrl($scope) {
		var vm = this;
        var session = $scope.session;

		vm.username = session.username;
	}

})();