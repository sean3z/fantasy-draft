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
			controllerAs: 'navigationCtrlVm'
		};
	}

    NavigationCtrl.$inject = ['UserService'];
	function NavigationCtrl(User) {
		var vm = this;
        
        if (User.isLoggedIn()) {
            vm.username = User.username;
        }
	}

})();