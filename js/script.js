'use strict';

(function () {
var pageHeaderContainer = document.querySelector('.page-header');
var mainNavContainer = document.querySelector('.main-nav');
var navToggleContainer = document.querySelector('.main-nav__toggle');

//burger menu
mainNavContainer.classList.remove('main-nav--nojs');
pageHeaderContainer.classList.add('page-header--closed');
navToggleContainer.addEventListener('click', function() {
	if (pageHeaderContainer.classList.contains('page-header--closed')) {
		pageHeaderContainer.classList.remove('page-header--closed');
		pageHeaderContainer.classList.add('page-header--opened');
	} else {
		pageHeaderContainer.classList.add('page-header--closed');
		pageHeaderContainer.classList.remove('page-header--opened');
	}
});
})();