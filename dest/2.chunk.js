webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var resume = angular.module('app.resume', []);

	resume.controller('ResumeController', __webpack_require__(10).default);
	resume.directive('resume', __webpack_require__(11).default);

	exports.default = resume;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var ResumeController = function ResumeController() {
		// add print link?
	};

		exports.default = ResumeController;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $inject = [];
	var resume = function resume() {
	  return {
	    replace: true,
	    controller: 'ResumeController',
	    controllerAs: 'controller',
	    template: '<div class="resume-page">' + __webpack_require__(12) + '</div>'
	  };
	};

	resume.$inject = $inject;

		exports.default = resume;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"skills\">Skills</h2>\n<ul>\n<li>JavaScript ~ 14 years (3 server-side/SPA)</li>\n<li>AngularJS ~ 2 years</li>\n<li>Angular2 ~ 3 months</li>\n<li>TypeScript ~ 3 months</li>\n<li>SASS ~ 4 years</li>\n<li>Node.js ~ 2 years</li>\n<li>Grunt ~ 4 years</li>\n<li>HTML ~ 15 years</li>\n<li>CSS ~ 15 years</li>\n<li>PHP ~ 2 years</li>\n<li>React ~ 1 week</li>\n</ul>\n<p>Also proficient in Illustrator, Photoshop, and InDesign; but if you ask me to use Dreamweaver again, I may cry.</p>\n<h2 id=\"experience\">Experience</h2>\n<h3 id=\"front-end-web-developer-iii-2016-q-free-open-roads\">Front End Web Developer III —2016 — Q-Free Open Roads</h3>\n<ul>\n<li>Developed Angular 2 components and services for Transportation Management System Software UI of high quality and interoperablity with popluar 3rd party open source frameworks</li>\n<li>Unit Testing using Karma and Jasmine</li>\n<li>Developed API development server in Node.js</li>\n<li>Expanded Yeoman generator suite for internal use</li>\n<li>Wrote in TypeScript, JavaScript, and SCSS</li>\n<li>Contract Position</li>\n</ul>\n<h3 id=\"software-architect-2016-homes-com\">Software Architect —2016 — Homes.com</h3>\n<ul>\n<li>Continue to perform the duties of a Lead Front End Developer, in addition to:\n<strong> Planning and coordinating maintenance and enhancement of Front End architecture across two technology stacks\n</strong> Planning technical implementation of new features with Product Development Team\nDeveloping automated E2E testing suite in Protractor and Jasmine</li>\n</ul>\n<h3 id=\"lead-front-end-developer-2014-to-2016-homes-com\">Lead Front End Developer —2014 to 2016 — Homes.com</h3>\n<ul>\n<li>Designed front-end architecture for new consumer-facing portal using AngularJS, SASS, a lot of lodash and a dash of Handlebars.js. New application was 400% faster than previous site</li>\n<li>Integrated DFP and Adobe DTM with AngularJS application for user tracking</li>\n<li>Developed build tasks in Grunt.js to automate front-end builds, code style checking, and unit test coverage </li>\n<li>Created a system for switching templates in AngularJS directives using Webpack to increase code reuse while maintaining a logical, component-based organization</li>\n<li>Created an icon font builder using gulp.js, Inkscape, and Node.js that built font as well as creating specimen files and SASS maps so that icons could be included in code using descriptive names</li>\n<li>Created a mock data generator using Node.js, GNU Make, to hit REST-ful webservices and create JSON fixtures for mock backend and testing</li>\n<li>Created a SASS framework layer on top of Zurb Foundation</li>\n<li>Experimented with Jade, LESS, Rework, Atomify, dgeni, Jasmine, Stylus, and Bootstrap before settling on current architecture for Homes.com Front End</li>\n<li>Managed a team of 3-5 developers over 3 projects as well as remote contractors</li>\n<li>Worked in Agile/Scrum Development environment</li>\n</ul>\n<h3 id=\"front-end-developer-2011-to-2014-homes-com\">Front End Developer —2011 to 2014 — Homes.com</h3>\n<ul>\n<li>Refactored desktop and mobile CSS to use a custom SASS framework that supported multiple contexts</li>\n<li>Trained other developers in the use and setup of the SASS framework</li>\n<li>Created frame component in ColdFusion configurable with JSON to reduce code duplication</li>\n<li>Created a layered Compass sprite generator by overriding framework SASS to create a more straightforward implementation that worked better with our VCS</li>\n<li>Implemented Front End features using JavaScript in the view (jQuery and Backbone.js)</li>\n<li>Won Domininion Enterprises  Apps for EDU Hackathon with “Mr. Owl” App</li>\n<li>Received Honorable Mention at a separate Dominion Enterprises Hackathon for an app that locates Starbucks near the user’s prospective home and route to work</li>\n</ul>\n<h3 id=\"manager-marketing-media-special-events-2007-to-2011-\">Manager, Marketing Media Special Events  — 2007 to 2011 —</h3>\n<p>United Way of South Hampton Roads</p>\n<ul>\n<li>Designed all marketing collateral, including newsletters, forms, and brochures </li>\n<li>Developed custom e-commerce solutions for events and merchandise </li>\n<li>Allocated time between three overarching functions: advertising, web design and graphic design</li>\n</ul>\n<h3 id=\"education\">Education</h3>\n<p>Virginia Commonwealth University, Richmond VA </p>\n<p>Bachelor of Fine Arts, Cum-Laude </p>\n<p>Phi Kappa Phi Honor Society Member </p>\n<p>VCU AIGA Student Chapter Secretary</p>\n<p>Communication Arts and Design Major, Graphic Design Emphasis</p>\n";

/***/ }
]);
//# sourceMappingURL=2.chunk.js.map