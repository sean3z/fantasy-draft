(function() {
	'use strict';

	angular
        .module('fda', ['ui.router', 'navigation'])
        .config(configuration);
    
    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configuration($state, $urlRouter) {
        $state
            .state('index', {
                url: '/index'
            });
        
        $urlRouter.otherwise('/index');
    }

})();