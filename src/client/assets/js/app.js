(function() {
	'use strict';

	angular
        .module('fda', ['ui.router', 'navigation', 'draft'])
        .config(configuration);
    
    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configuration($state, $urlRouter) {
        $state
            .state('index', {
                url: '/index'
            })
        
            .state('draft', {
                url: '/draft',
                controller: 'DraftCtrl',
                controllerAs: 'DraftCtrlVm',
                templateUrl: 'pages/draft/draft.page.html'
            });
        
        $urlRouter.otherwise('/index');
    }

})();