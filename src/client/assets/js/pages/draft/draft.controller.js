(function () {
	'use strict';

	angular.module('draft').controller('DraftCtrl', DraftCtrl);
    
    DraftCtrl.$inject = ['UserService', '$state'];
    function DraftCtrl(User, $state) {
        var vm = this;
        
        if (!User.isLoggedIn()) $state.go('index');
        
        
    }

})();