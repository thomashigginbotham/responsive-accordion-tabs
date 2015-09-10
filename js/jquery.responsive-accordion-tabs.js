/**
 * A jQuery plugin to create accordions or tabs as appropriate.
 * @param options
 */
(function(factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function($) {
	'use strict';

	$.fn.accordionTabs = function (options, accordionOptions, tabOptions) {
		// The settings object provides default settings.
		// The options argument can override them.
		var settings = $.extend({
			mediaQuery: '(min-width: 800px)'
		}, options);

		var accordionTabs = this;

		/**
		 * Initializes the plugin
		 */
		var init = function() {
			// Implement now...
			implement();

			// ...and again when the window resizes.
			$(window).on('resize.accordionTabs', debounce(implement, 250));
		};

		var implement = function() {
			var isLargeViewport = matchMedia(settings.mediaQuery).matches;

			accordionTabs.each(function() {
				var accordionTab = $(this);
				var headings = accordionTab.find('.accordion-tab-headings');
				var content = accordionTab.find('.accordion-tab-content');

				if (!isLargeViewport) {
					// Destroy tabs if previously implemented
					if (accordionTab.hasClass('ui-tabs')) {
						accordionTab.tabs('destroy');
					}

					// Implement accordion
					if (!content.hasClass('ui-accordion')) {
						headings.hide();
						content.accordion(accordionOptions);
					}
				} else {
					// Destroy accordion if previously implemented
					if (content.hasClass('ui-accordion')) {
						content.accordion('destroy');
					}

					// Implement tabs
					if (!accordionTab.hasClass('ui-tabs')) {
						headings.show();
						accordionTab.tabs(tabOptions);
					}
				}
			});
		};

		/**
		 * Returns a function that cannot be called in succession unless a specified
		 * amount of time has passed
		 * @param func - The function to debounce
		 * @param wait - The wait time (ms) before running the function again
		 * @returns The debounced function
		 */
		var debounce = function(func, wait) {
			var timeout;

			return function() {
				clearTimeout(timeout);

				timeout = setTimeout(function() {
					func();
				}, wait);
			};
		};

		// Let's go!
		init();

		// Always return the target object to allow chaining.
		return this;
	};
}));
