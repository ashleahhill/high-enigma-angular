webpackJsonp([3],{

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var stuff = angular.module('app.stuff', []);

	stuff.directive('stuff', __webpack_require__(14).default);

	exports.default = stuff;

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $inject = [];
	var stuff = function stuff() {
	  return {
	    replace: true,
	    controller: function controller() {},
	    controllerAs: 'controller',
	    template: __webpack_require__(15)
	  };
	};

	stuff.$inject = $inject;

		exports.default = stuff;

/***/ },

/***/ 15:
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"stuff-page\">\n<h1>Things</h1>\n<ul>\n<li><a target=\"_blank\" href=\"https://github.com/ashleahhill/high-enigma-angular\">Source of this site</a></li>\n<li><a target=\"_blank\" href=\"https://super-duper-carnival.firebaseapp.com/\">My first React App</a></li>\n</ul>\n</div>";
	var id1="app/stuff/stuff.html";
	var inj=angular.element(window.document).injector();
	if(inj){inj.get("$templateCache").put(id1,v1);}
	else{ngModule.run(["$templateCache",function(c){c.put(id1,v1)}]);}
	module.exports=v1;

/***/ }

});
//# sourceMappingURL=3.chunk.js.map