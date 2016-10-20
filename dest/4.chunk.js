webpackJsonp([4],{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var credits = angular.module('app.credits', []);

	credits.directive('credits', __webpack_require__(17).default);

	exports.default = credits;

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $inject = [];
	var credits = function credits() {
	  return {
	    replace: true,
	    controller: function controller() {},
	    controllerAs: 'controller',
	    template: '<div class="credits">' + __webpack_require__(18) + '</div>'
	  };
	};

	credits.$inject = $inject;

		exports.default = credits;

/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = "<h1 id=\"credit-where-credit-s-due\">Credit Where Credit&#39;s Due</h1>\n<h2 id=\"open-source-licences\">Open Source Licences</h2>\n<ul>\n<li>Angular Webpack <a href=\"https://github.com/packetloop/angular-webpack/blob/master/LICENSE.md\">GitHub</a></li>\n</ul>\n<h2 id=\"fonts\">Fonts</h2>\n<ul>\n<li>Josefin Sans <a href=\"http://www.google.com/webfonts#UsePlace:use/Collection:Poiret+One|Josefin+Sans:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic\">Google Web Fonts</a></li>\n<li>Entypo <a href=\"http://www.entypo.com/\">entypo</a></li>\n</ul>\n";

/***/ }

});
//# sourceMappingURL=4.chunk.js.map