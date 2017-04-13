'use strict';

app.controller('listCtrl', function(DEFAULT, $rootScope, $state, posts) {

	var $listCtrl = this;

	function init(){
		$rootScope.isLoading = true;
		$rootScope.metaTitle = '';
		$listCtrl.footer = DEFAULT.FOOTER;
		$listCtrl.posts = posts.query(function(){
			$rootScope.isLoading = false;
		});

		$rootScope.metaKeywords = $state.current.data.keywords.toString();

	}

	init();

});
