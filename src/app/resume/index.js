const resume = angular.module('app.resume', []);

resume.controller('ResumeController', require('./resume_controller').default);
resume.directive('resume', require('./resume_directive').default);

export default resume;
