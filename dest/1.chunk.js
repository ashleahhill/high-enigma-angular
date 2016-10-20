webpackJsonp([1],{

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _home_directive = __webpack_require__(7);

	var _home_directive2 = _interopRequireDefault(_home_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var home = angular.module('app.home', []);

	home.directive('home', _home_directive2.default);

	exports.default = home;

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $inject = [];
	var home = function home() {
	  return {
	    replace: true,
	    controller: function controller() {},
	    controllerAs: 'controller',
	    template: __webpack_require__(8)
	  };
	};

	home.$inject = $inject;

		exports.default = home;

/***/ },

/***/ 8:
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"home-page\">\n<h1>Ashley Hill</h1>\n<h2>Front End Developer, Architect, Dreamer</h2>\n<p>Looking for a balance between model and view in the Single Page App Age.</p>\n</div>\n";
	var id1="app/home/home.html";
	var inj=angular.element(window.document).injector();
	if(inj){inj.get("$templateCache").put(id1,v1);}
	else{ngModule.run(["$templateCache",function(c){c.put(id1,v1)}]);}
	module.exports=v1;

/***/ }

});
//# sourceMappingURL=1.chunk.js.map