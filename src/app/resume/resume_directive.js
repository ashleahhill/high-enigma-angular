const $inject = [];
const resume = function () {
  return {
  	replace: true,
    controller: 'ResumeController',
    controllerAs: 'controller',
    template: '<div class="resume-page">' + require('./resume.md') + '</div>'
  };
};

resume.$inject = $inject;

export default resume;
