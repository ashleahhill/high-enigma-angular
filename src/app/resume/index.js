const resume = angular.module('app.resume', []);

resume.controller('ResumeController', require('./resume_controller'));
resume.directive('resume', require('./resume_directive'));

export default resume;
