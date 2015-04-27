(function () {
	'use strict';

	angular
		.module('User')
		.service('UserService', User);

	function User() {
		return {
			username: 'Sean',
            isLoggedIn: function() {
                return true;
            }
		};
	}

})();