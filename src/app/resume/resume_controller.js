const $inject = ['BlahService'];
const ResumeController = function (blahService) {
  this.name = 'Resume: ' + blahService.blah();
};

ResumeController.$inject = $inject;

export default ResumeController;

