const resume = angular.module('app.resume', [
  require('../../blah').name
]);

resume.controller('ResumeController', require('./resume_controller'));
resume.directive('resume', require('./resume_directive'));

export default resume;
