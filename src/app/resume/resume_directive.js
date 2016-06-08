const $inject = [];
const resume = function () {
  return {
    controller: 'ResumeController',
    controllerAs: 'controller',
    template: '<div class="resume">' + require('./resume.md') + '</div>'
  };
};

resume.$inject = $inject;

export default resume;
